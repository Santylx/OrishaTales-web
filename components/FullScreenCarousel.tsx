"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageConfig {
    src: string;
    mobileClass: string;
}

const images: ImageConfig[] = [
    {
        src: "/hero-1.jpg",
        mobileClass: "object-cover object-[60%_50%]", // Adjusted: Moved image right (decreased %)
    },
    {
        src: "/hero-2.jpg",
        mobileClass: "object-cover object-[40%_50%]", // Adjusted: Moved image left (increased %)
    },
    {
        src: "/hero-3.jpg",
        mobileClass: "object-cover object-center", // Reverted to cover (less zoom out than contain)
    },
    {
        src: "/hero-4.jpg",
        mobileClass: "object-cover object-left scale-[2.3] origin-left", // ZoomIn 230% + Full Left
    },
    {
        src: "/hero-5.jpg",
        mobileClass: "object-cover object-right", // Pending user updates
    },
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
        <div className="fixed inset-0 bg-white">
            {images.map((img, index) => (
                <div
                    key={img.src}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={img.src}
                        alt={`Artwork ${index + 1}`}
                        fill
                        className={`md:object-cover md:object-center ${img.mobileClass}`}
                        priority={index === 0}
                        quality={90}
                    />
                </div>
            ))}
        </div>
    );
}
