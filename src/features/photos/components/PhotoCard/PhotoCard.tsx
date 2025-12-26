import { Photo } from "@/features/photos/domain/photo";
import Image from "next/image";

const PhotoCard = ({ photo }: { photo: Photo }) => {
  return (
    <div className="relative w-full aspect-4/3 overflow-hidden rounded-lg">
      <Image src={photo.url} alt={photo.title} fill className="object-cover" />
    </div>
  );
};

export { PhotoCard };
