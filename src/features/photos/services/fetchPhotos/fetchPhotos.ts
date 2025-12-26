import { Photo } from "../../domain/photo";

const photos: Photo[] = Array.from({ length: 15 }).map((_, index) => ({
  id: `${index + 1}`,
  url: `/plaholders/${index + 1}.JPG`,
  title: `Photo ${index + 1}`,
  description: `This is photo number ${index + 1}`,
}));

const fetchPhotos = async (): Promise<Photo[]> => {
  const promise = new Promise<Photo[]>((resolve) => {
    setTimeout(() => {
      resolve(photos);
    }, 500);
  });

  return promise;
};

export { fetchPhotos };
