import { fetchPhotos } from "@/public/photos/services/fetchPhotos";
import { useQuery } from "@tanstack/react-query";
import { PHOTO_KEYS } from "../../lib/query";

const useListPhotos = () => {
  const response = useQuery({
    queryKey: PHOTO_KEYS.LIST(),
    queryFn: async ({ signal }) => await fetchPhotos({ signal }),
  });

  return response;
};

export { useListPhotos };
