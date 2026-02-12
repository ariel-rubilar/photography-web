"use client";

import { PhotoGallery } from "@/public/photos/components/PhotoGallery";
import { useListPhotos } from "@/public/photos/hooks/useListPhotos";

const Home = () => {
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

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 left-0 right-0 border-b ">
        <div className="px-6 py-4">
          <h1 className="font-mono text-sm tracking-wider">FUJI RECIPES</h1>
        </div>
      </header>

      <main className="py-12 px-6">
        <PhotoGallery photos={photos} />
      </main>
    </div>
  );
};

export default Home;
