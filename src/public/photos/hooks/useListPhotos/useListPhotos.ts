import { fetchPhotos } from "@/public/photos/services/fetchPhotos";
import { TAGS, usePublicQuery } from "@/public/shared/lib/query";

const useListPhotos = () => {
  const response = usePublicQuery({
    queryKey: [TAGS.PHOTO],
    queryFn: async ({ signal }) => await fetchPhotos({ signal }),
  });

  return response;
};

export { useListPhotos };
