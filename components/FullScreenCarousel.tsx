"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
    "/hero-4.jpg",
];

export default function FullScreenCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 20000); // 20 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-black">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Artwork ${index + 1}`}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                        quality={90}
                    />
                    {/* Overlay removed for full brightness */}
                    {/* <div className="absolute inset-0 bg-black/20" /> */}
                </div>
            ))}
        </div>
    );
}
