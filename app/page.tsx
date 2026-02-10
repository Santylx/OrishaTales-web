import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Images - Responsive */}
      <div className="absolute inset-0 -z-10">
        {/* Desktop Hero */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/hero-1.jpg"
            alt="Orisha Tales Desktop Hero"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        {/* Mobile Hero */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/hero-1-mobile.jpg"
            alt="Orisha Tales Mobile Hero"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
      </div>

      <div className="z-10 text-center px-4 animate-fade-in flex flex-col items-center gap-24">
        <h1 className="text-4xl md:text-7xl text-white drop-shadow-lg font-henny">
          Something Amazing is on the Way!
        </h1>

        <div className="flex flex-col items-center gap-8">
          <p className="text-2xl md:text-4xl text-white/90 font-bubbles tracking-wide">
            Stay in the Loop
          </p>

          <Link
            href="https://www.instagram.com/orishatalesbooks/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/70 transition-all transform hover:scale-110"
          >
            <Instagram size={48} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </main>
  );
}
