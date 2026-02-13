import { PUBLIC_KEYS } from "@/public/shared/lib/query";

const PHOTO_KEY = "photo";

const ALL_KEY = [...PUBLIC_KEYS.ALL, PHOTO_KEY];

const LISTS_KEY = [...ALL_KEY, "lists"];

const LIST_KEY = () => [...LISTS_KEY];

const DETAILS_KEY = [...ALL_KEY, "details"];

const DETAIL_KEY = () => [...DETAILS_KEY];

const PHOTO_KEYS = {
  ALL: ALL_KEY,
  LISTS: LISTS_KEY,
  LIST: LIST_KEY,
  DETAILS: DETAILS_KEY,
  DETAIL: DETAIL_KEY,
};

export { PHOTO_KEYS };
