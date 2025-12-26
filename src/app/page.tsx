import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 left-0 right-0 border-b ">
        <div className="px-6 py-4">
          <h1 className="font-mono text-sm tracking-wider">FUJI RECIPES</h1>
        </div>
      </header>

      <main className="py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="relative w-full aspect-4/3 overflow-hidden rounded-lg"
            >
              <Image
                src={`/plaholders/${index + 1}.JPG`}
                alt="Vercel logomark"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
