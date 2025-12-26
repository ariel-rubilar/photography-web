import { PhotoGallery } from "@/features/photos/components/PhotoGallery";
import { Photo } from "@/features/photos/domain/photo";

const photos: Photo[] = Array.from({ length: 15 }).map((_, index) => ({
  id: `${index + 1}`,
  url: `/plaholders/${index + 1}.JPG`,
  title: `Photo ${index + 1}`,
  description: `This is photo number ${index + 1}`,
}));

const Home = () => {
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
