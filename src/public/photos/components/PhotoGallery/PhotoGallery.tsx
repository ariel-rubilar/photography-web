"use client";

import { useListPhotos } from "../../hooks/useListPhotos";
import { PhotoGalleryGrid } from "../PhotoGalleryGrid";

const PhotoGallery = () => {
  const { data: photos = [], isError, isFetching } = useListPhotos();

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          Failed to load photos. Please try again later.
        </p>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading photos...</p>
      </div>
    );
  }

  return <PhotoGalleryGrid photos={photos} />;
};

export { PhotoGallery };
