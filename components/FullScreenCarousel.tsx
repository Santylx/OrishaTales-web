"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const imageIds = [1, 2, 3, 4, 5];

export default function FullScreenCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageIds.length);
        }, 12000); // 12 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-white">
            {imageIds.map((id, index) => (
                <div
                    key={id}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Mobile Image (Visible only on mobile) */}
                    <div className="relative w-full h-full md:hidden">
                        <Image
                            src={`/hero-${id}-mobile.jpg`}
                            alt={`Artwork ${id}`}
                            fill
                            className={`object-contain object-center ${id === 5 ? "scale-[1.05]" : ""}`}
                            priority={index === 0}
                            quality={90}
                        />
                    </div>

                    {/* Desktop Image (Visible only on desktop) */}
                    <div className="relative w-full h-full hidden md:block">
                        <Image
                            src={`/hero-${id}.jpg`}
                            alt={`Artwork ${id}`}
                            fill
                            className="object-cover object-center"
                            priority={index === 0}
                            quality={90}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
