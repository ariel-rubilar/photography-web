# Frontend Architecture Guide

This document explains how the frontend project is structured, why decisions were made, and how to add new features safely. It is intended for new developers joining the project.

---

## 1. High-level goals

* Clear separation between **Public** and **Backoffice** contexts
* Avoid auth leakage by design
* Keep `app/` minimal and routing-only
* Scale safely as the project grows
* Mirror backend bounded contexts (DDD-friendly)

---

## 2. Core idea

The project is structured around **bounded contexts at the `src/` root**.

* `public/` → no authentication required (read-only UI)
* `backoffice/` → authenticated, admin/write capabilities
* `shared/` → truly shared utilities and UI
* `app/` → Next.js routing only

Each context owns its **models, services, hooks, and components**.

---

## 3. Folder structure overview

```
src/
├─ public/
│  ├─ photos/
│  │  ├─ model/
│  │  ├─ services/
│  │  ├─ hooks/
│  │  ├─ components/
│  │  └─ lib/
│  └─ index.ts
│
├─ backoffice/
│  ├─ photos/
│  │  ├─ model/
│  │  ├─ services/
│  │  ├─ hooks/
│  │  ├─ components/
│  │  └─ lib/
│  ├─ recipes/
│  │  └─ ...
│  └─ index.ts
│
├─ shared/
│  ├─ lib/
│  │  ├─ fetcher/
│  │  │  ├─ publicFetch.ts
│  │  │  └─ authFetch.ts
│  │  ├─ auth/
│  │  └─ queryClient.ts
│  └─ ui/
│
└─ app/
   ├─ (public)/photos/page.tsx
   └─ (backoffice)/photos/page.tsx
```

---

## 4. Context rules (VERY IMPORTANT)

### Allowed imports

* `public/*` → can import from `shared/*`
* `backoffice/*` → can import from `shared/*`
* `app/*` → can import from any context

### Forbidden imports

* `public/*` ❌ importing from `backoffice/*`
* `backoffice/*` ❌ importing from `public/*`

> Contexts are **hard boundaries**.

---

## 5. What goes inside each folder

### `model/`

Defines **types and DTOs** for the context.

```ts
// public/photos/model/photo.ts
export type Photo = {
  id: string;
  url: string;
  title: string;
};
```

Models can differ between contexts.

---

### `services/`

Responsible for **data access only** (no React, no UI).

* One service per context
* Auth is decided by context

```ts
// public/photos/services/photos.service.ts
import { publicFetch } from "@/shared/lib/fetcher";

export const listPhotos = () => publicFetch("/api/photos");
```

```ts
// backoffice/photos/services/photos.service.ts
import { authFetch } from "@/shared/lib/fetcher";

export const createPhoto = (data: CreatePhotoDTO) =>
  authFetch("/api/backoffice/photos", {
    method: "POST",
    body: JSON.stringify(data),
  });
```

---

### `hooks/` (TanStack Query)

Hooks orchestrate **server state** using TanStack Query.

```ts
// public/photos/hooks/usePhotos.ts
import { useQuery } from "@tanstack/react-query";
import { listPhotos } from "../services/photos.service";

export const usePhotos = () =>
  useQuery({
    queryKey: ["public", "photos"],
    queryFn: listPhotos,
  });
```

```ts
// backoffice/photos/hooks/useCreatePhoto.ts
import { useMutation } from "@tanstack/react-query";
import { createPhoto } from "../services/photos.service";

export const useCreatePhoto = () =>
  useMutation({ mutationFn: createPhoto });
```

---

### `components/`

Pure UI components. They:

* Consume hooks
* Contain no data-fetching logic
* Never call services directly

```tsx
// public/photos/components/PhotoGrid.tsx
import { usePhotos } from "../hooks/usePhotos";

export function PhotoGrid() {
  const { data, isLoading } = usePhotos();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data?.map(photo => (
        <img key={photo.id} src={photo.url} />
      ))}
    </div>
  );
}
```

---

### `lib/`

Small, **context-specific helpers**:

* mappers
* validators
* form helpers

No shared logic here.

---

## 6. Shared folder

The `shared/` folder contains **cross-context utilities** that are safe to reuse anywhere.

### Golden rule

> If a file can be used by **both public and backoffice without knowing the business context**, it belongs in `shared/`.

---

### `shared/lib/`

Low-level, framework-agnostic helpers.

#### ✅ What goes in `shared/lib`

* HTTP clients / fetch wrappers
* Auth token helpers (generic)
* Date / number formatting
* Query client configuration
* Environment helpers
* Generic mappers (no business meaning)

Examples:

```ts
shared/lib/fetcher/publicFetch.ts
shared/lib/fetcher/authFetch.ts
shared/lib/queryClient.ts
shared/lib/format/date.ts
shared/lib/env.ts
```

#### ❌ What must NOT go in `shared/lib`

* Feature-specific logic (photos, recipes, users)
* Permission checks (admin/editor)
* DTOs tied to one API endpoint
* TanStack Query hooks
* Business validation rules

If you have to ask *"which context uses this?"* → it does **not** belong in `shared`.

---

### `shared/ui/`

Reusable, dumb UI components.

#### ✅ Allowed

* Button
* Modal
* Input
* Dropdown
* Spinner

They:

* receive props
* emit events
* contain no business logic

#### ❌ Not allowed

* Data fetching
* Context-specific wording
* Permission logic

---

## 6.1 Context `lib/` folders

Each feature inside a context may have its own `lib/` folder.

These are **business-aware helpers**.

### Rule

> If a helper understands **what a Photo is**, it does NOT belong in `shared`.

---

### `public/*/lib/`

Helpers related to **presentation and read-only logic**.

#### ✅ Examples

```ts
public/photos/lib/photoViewModel.ts
public/photos/lib/mapPhotoToCard.ts
```

Use cases:

* adapt API data to UI needs
* sort / group data for display
* UI-only transformations

#### ❌ Not allowed

* Mutations
* Validation for writes
* Auth logic

---

### `backoffice/*/lib/`

Helpers related to **write rules and admin workflows**.

#### ✅ Examples

```ts
backoffice/photos/lib/validators.ts
backoffice/photos/lib/formMapper.ts
backoffice/photos/lib/permissions.ts
```

Use cases:

* form validation
* mapping form → DTO
* admin-only rules

#### ❌ Not allowed

* Fetch calls (go in services)
* React components
* Cross-context helpers

---

### Decision table

| Question                         | Goes in       |
| -------------------------------- | ------------- |
| Can both contexts use it safely? | `shared/lib`  |
| Is it feature-specific?          | context `lib` |
| Does it fetch data?              | `services`    |
| Does it manage server state?     | `hooks`       |
| Is it UI only?                   | `components`  |

---

---

## 7. `app/` folder rules

* Routing only
* No business logic
* Pages should be **thin**

```tsx
// app/(public)/photos/page.tsx
import { PhotoGrid } from "@/public/photos";

export default function Page() {
  return <PhotoGrid />;
}
```

---

## 8. How to add a new feature

1. Choose the context (`public` or `backoffice`)
2. Create a feature folder
3. Add model → service → hook → component
4. Wire it in `app/`

Never skip layers.

---

## 9. Why this structure

* Prevents accidental coupling
* Matches backend DDD
* Easy to test
* Easy to onboard new developers
* Scales without refactors

---

## 10. Final note

This structure is intentionally strict.

If something feels hard to do, it usually means a boundary is being crossed.
That is a **feature**, not a limitation.
