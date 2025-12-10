import FullScreenCarousel from "@/components/FullScreenCarousel";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <FullScreenCarousel />

      <div className="text-center space-y-6 animate-fade-in z-10 px-4 relative">
        <h1 className="text-6xl md:text-8xl font-thin tracking-[0.2em] uppercase text-white drop-shadow-lg">
          Olazábal
        </h1>
        <p className="text-sm md:text-base tracking-[0.3em] text-gray-200 uppercase drop-shadow-md">
          Contemporary Art
        </p>
      </div>
    </main>
  );
}
