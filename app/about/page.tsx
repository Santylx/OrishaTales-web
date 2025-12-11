"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-end pb-32">
            {/* Background Image - Fixed to cover screen */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/about-olazabal.jpg"
                    alt="Santiago Rodriguez Olazábal"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
            </div>

            {/* Text Content */}
            <div className="text-center z-10 text-white space-y-3 animate-fade-in px-4">
                <h1 className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase drop-shadow-lg">
                    Santiago Rodriguez Olazábal
                </h1>
                <p className="text-xs md:text-sm tracking-[0.15em] font-light text-gray-200 drop-shadow-md uppercase">
                    Contemporary Afro-Cuban Art Master
                </p>
            </div>
        </div>
    );
}
