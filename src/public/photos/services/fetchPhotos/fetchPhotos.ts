import { Photo } from "../../models/photo";
import { publicRequest } from "../../lib/api";

const fetchPhotos = async (): Promise<Photo[]> => {
  const response = await publicRequest<Photo[]>({
    url: "/v1/photos",
    method: "GET",
  });

  return response.data.data;
};

export { fetchPhotos };
