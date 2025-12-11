"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative min-h-[calc(100vh-5rem)] flex flex-col items-end justify-end pb-24 w-full">
            {/* Background Image - Fixed to cover screen */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/about-olazabal.jpg"
                    alt="Santiago Rodriguez Olazábal"
                    fill
                    className="object-cover object-[30%_50%] md:object-center" // Final adjustment to 30%
                    priority
                    quality={90}
                />
            </div>

            {/* Text Content */}
            <div className="text-right z-10 space-y-2 animate-fade-in px-6 md:px-12 pb-12">
                <h1 className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-gray-900">
                    Santiago Rodriguez Olazábal
                </h1>
                <p className="text-xs md:text-sm tracking-[0.15em] font-light text-gray-700 uppercase">
                    Contemporary Afro-Cuban Art Master
                </p>
            </div>
        </div>
    );
}
