import { Photo } from "../../domain/photo";
import { PhotoCard } from "../PhotoCard";

const PhotoGallery = ({ photos }: { photos: Photo[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export { PhotoGallery };
