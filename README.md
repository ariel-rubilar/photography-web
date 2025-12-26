# photography-web

A personal Next.js + TypeScript + Tailwind CSS site to post photos, store Fujifilm recipe settings, and tag images for better search and organization.

---

## Motivation

This project exists as a personal hobby and practice space. It helps you:

- Publish and browse your photography.
- Save camera and film-simulation (Fujifilm) recipe settings alongside each photo/post to make it easier to search and reproduce looks later.
- Keep a simple, maintainable codebase using modern Next.js + TypeScript + Tailwind practices.

---

## Tech stack

- `Next.js` (app router)
- `TypeScript`
- `Tailwind CSS` for styling
- `next/image` for optimized image delivery
- No required database by default — content is stored as files in the repository (see "Content & storage").

---

## Features

- Simple file-based content (Markdown/YAML/JSON + images) — suitable for a small personal site.
- Fujifilm recipe metadata paired with posts/photos for reproducible editing notes.
- Tagging system for filtering photos/posts.
- Built with accessibility and modern patterns in mind (TypeScript + Tailwind + Next).

---

## Project layout (recommended)

A simple layout to organize content. Your project may vary, but here are common locations:

- `app/` — Next.js application routes and UI
- `public/photos/` — store original photo files (served statically)
- `content/` or `data/` — post files (Markdown with frontmatter, JSON, or YAML)
- `components/` — React components
- `styles/` — global Tailwind / CSS config

---

## Getting started

1. Install dependencies

```/dev/null/install.md#L1-4
npm install
# or
pnpm install
# or
yarn
```

2. Run the development server

```/dev/null/dev.md#L1-3
npm run dev
# or
pnpm dev
# or
yarn dev
```

3. Build for production

```/dev/null/build.md#L1-3
npm run build
npm start
# or use your preferred runner (pnpm/yarn)
```

Notes:
- The project `package.json` includes `dev`, `build`, and `start` scripts.
- Tailwind is included in `devDependencies` — ensure you have the Tailwind setup (postcss/tailwind config files).

---

## Content & photo workflow

This repository assumes a simple, manual workflow (good for hobby/personal use):

1. Add image files to `public/photos/`. You can create folders like `public/photos/2025/01/` if you want.
2. Create a post file in `content/` (or wherever your site reads posts from). Use YAML frontmatter or JSON to provide metadata including `photos`, `tags`, and a `fujifilm_recipe` object.
3. Commit and push to your repo (or deploy). The site will read the content and display posts.

Example YAML frontmatter (Markdown post):

```/dev/null/recipe.yml#L1-16
---
title: "Morning Light at the Lake"
date: "2025-01-02"
photos:
  - /photos/lake-001.jpg
tags: [landscape, sunrise, fujifilm]
fujifilm_recipe:
  camera: "X-T4"
  film_simulation: "Classic Chrome"
  exposure_comp: "+0.3"
  highlights: "-1"
  shadows: "+2"
  color: "+1"
  grain: "weak"
  sharpness: "medium"
  white_balance: "Daylight"
  notes: "Slightly underexposed to protect highlights."
---
```

Example JSON post:

```/dev/null/recipe.json#L1-18
{
  "title": "Morning Light at the Lake",
  "date": "2025-01-02",
  "photos": ["/photos/lake-001.jpg"],
  "tags": ["landscape","sunrise","fujifilm"],
  "fujifilm_recipe": {
    "camera": "X-T4",
    "film_simulation": "Classic Chrome",
    "exposure_comp": "+0.3",
    "highlights": -1,
    "shadows": 2,
    "color": 1,
    "grain": "weak",
    "sharpness": "medium",
    "white_balance": "Daylight",
    "notes": "Slightly underexposed to protect highlights."
  }
}
```

Keep metadata consistent to make searching and filtering reliable (for example, normalize `film_simulation` values like `Classic Chrome`, `Provia`, etc.).

---

## Fujifilm recipe format (recommended fields)

Recommended fields to include under `fujifilm_recipe`:

- `camera` — camera model (e.g., "X-T4")
- `film_simulation` — film simulation name (e.g., "Classic Chrome")
- `exposure_comp` — exposure compensation (e.g., "+0.3")
- `highlights` — highlight tone (numeric or string)
- `shadows` — shadow tone (numeric or string)
- `color` — color intensity (numeric or string)
- `grain` — grain strength (e.g., "weak", "strong")
- `sharpness` — sharpness level (e.g., "low", "medium", "high")
- `white_balance` — WB preset or Kelvin (e.g., "Daylight", "5600K")
- `notes` — free-text notes to capture context

Having these fields enables searching by camera/film simulation and filtering by recipe characteristics.

---

## Tags

- Add tags as a simple list in the post frontmatter e.g. `tags: [landscape, film, sunrise]`.
- Tags are free-text by default; consider normalizing to avoid duplicates (e.g., `sunrise` vs `Sunrise`).
- UI can provide filtering by tag — implement a page route that queries the content files and filters posts that include the selected tag.

---

## Image handling & optimization

- Store source images in `public/photos/` for simplicity. Use `next/image` to render images in the app for built-in optimization.
- If you later move to an external host (Cloudinary, S3), add the host to `next.config.js` `images.domains` so `next/image` can serve optimized images.

Example `next.config.js` snippet:

```/dev/null/next.config.js#L1-6
/** Example next.config.js - add if you use external image hosts */
module.exports = {
  images: {
    domains: ['your-cloud-host.com'],
  },
};
```

For large media libraries, consider an image CDN or a service like Cloudinary to offload storage and heavy transformations.

---

## Authentication & admin

- By default this repo uses a manual workflow (commits / file edits) to add content.
- If you want an in-app admin interface later, consider:
  - `NextAuth` for authentication (GitHub / email).
  - A headless CMS (Netlify CMS, Sanity, Contentful) or a simple admin page that writes files to a backend (requires a database or API).

---

## Environment variables

- No environment variables are strictly required for a local file-based setup.
- If you add external storage (S3, Cloudinary) or a database, add appropriate env vars like `CLOUDINARY_URL`, `DATABASE_URL`, or `AWS_*` and create a `.env.example` file with placeholders.

---

## Deployment

- Vercel is the easiest deployment target for Next.js. Connect the repo and deploy.
- If using external image hosts or APIs, add relevant configuration and environment variables in your deployment provider.

---

## Contributing & local practices

- This is a personal project, but you can still apply good practices:
  - Keep components small and typed (`TypeScript`).
  - Use Tailwind utilities for styling.
  - Normalize metadata format for easy filtering.
  - Add linting and formatting scripts if missing (`eslint`, `prettier`).

Recommended helpful scripts:
- `npm run dev` — start development server
- `npm run build` — build production
- `npm start` — run production build
- `npm run lint` — lint (if configured)

---

## Roadmap / ideas

- Add an optional admin UI to upload images and create posts from the browser.
- Add a small SQLite/Prisma layer for faster searching/filtering if content grows.
- Add EXIF reading pipeline to auto-populate camera/date/ISO/aperture/shutter speed.
- Add a tag normalization step and tag cloud UI.

---

## License

This repository currently has no license file. If you want to open-source it, consider adding an `LICENSE` file (MIT recommended for permissive use). Replace this section with the license of your choice.

---

## Author / Contact

Author: unspecified — replace with your name or handle.

---

If you want, I can:
- Draft a `.env.example` and `next.config.js` sample.
- Add a small MDX/Markdown example post and one UI component to render the `fujifilm_recipe`.
- Overwrite the `README.md` in the repo with this content.

Tell me which of the above you'd like me to add next.