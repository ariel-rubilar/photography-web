import { publicRequest } from "@/public/shared/lib/api";
import { Photo } from "../../models/photo";

const fetchPhotos = async ({
  signal,
}: {
  signal?: AbortSignal;
}): Promise<Photo[]> => {
  const response = await publicRequest<Photo[]>({
    url: "/api/v1/web/photos",
    method: "GET",
    signal: signal,
  });

  return response.data.data;
};

export { fetchPhotos };
