import { PhotoGallery } from "@/public/photos/components/PhotoGallery";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 left-0 right-0 border-b ">
        <div className="px-6 py-4">
          <h1 className="font-mono text-sm tracking-wider">FUJI RECIPES</h1>
        </div>
      </header>

      <main className="py-12 px-6 flex-1 min-h-0 overflow-x-hidden overflow-y-auto flex flex-col">
        <PhotoGallery />
      </main>
    </div>
  );
};

export default Home;
