import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-1.jpg"
          alt="Orisha Tales Hero"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>
    </main>
  );
}
