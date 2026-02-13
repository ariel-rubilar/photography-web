"use client";

import { Empty } from "@/shared/components/ui/Empty";
import { useListPhotos } from "../../hooks/useListPhotos";
import { PhotoGalleryGrid } from "../PhotoGalleryGrid";
import { BellIcon, RefreshCcwIcon } from "lucide-react";
import { Button } from "@/shared/components/ui/Button";

const PhotoGallery = () => {
  const { data: photos = [], isError, isFetching } = useListPhotos();

  if (isError) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Empty.Root>
          <Empty.Header>
            <Empty.Media variant="icon">
              <BellIcon />
            </Empty.Media>
            <Empty.Title>Something went wrong</Empty.Title>
            <Empty.Description>
              An unexpected error has occurred. Please try again later.
            </Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button variant={"outline"}>
              <RefreshCcwIcon />
              Refresh
            </Button>
          </Empty.Content>
        </Empty.Root>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Loading photos...</p>
      </div>
    );
  }

  return <PhotoGalleryGrid photos={photos} />;
};

export { PhotoGallery };
