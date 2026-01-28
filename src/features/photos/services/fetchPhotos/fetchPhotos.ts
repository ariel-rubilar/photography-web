import { CONFIG } from "@/lib/config";
import { Photo } from "../../models/photo";

const fetchPhotos = async (): Promise<Photo[]> => {
  const promise = await fetch(`${CONFIG.APP.WEB_PHOTO_BASE_API_URI}/photos`);

  if (!promise.ok) {
    throw new Error("Failed to fetch photos");
  }

  const data = await promise.json();

  return data.data as Photo[];
};

export { fetchPhotos };
