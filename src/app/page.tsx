import { PhotoGallery } from "@/public/photos/components/PhotoGallery";
import { fetchPhotos } from "@/public/photos/services/fetchPhotos";

export const dynamic = "force-dynamic";

const Home = async () => {
  const photos = await fetchPhotos();
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
