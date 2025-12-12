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
        mobileClass: "object-cover object-[80%_50%]", // Shift image left -> see Right side (Center the right figure)
    },
    {
        src: "/hero-2.jpg",
        mobileClass: "object-cover object-[20%_50%]", // Shift image right -> see Left side (Head of bird/child)
    },
    {
        src: "/hero-3.jpg",
        mobileClass: "object-contain bg-white", // Zoom out -> Fit entire image. White bg for bars.
    },
    {
        src: "/hero-4.jpg",
        mobileClass: "object-contain object-right bg-white", // Zoom out + shift left (show right? No, 'correr completamente hacia la izquierda' usually means move image left. But if contained, alignment matters. If contained and wide, object-right aligns it to right. User said: "correr la imagen completamente hacia la izquierda", i.e. show the RIGHT side? Or move the image TO the left? "para que se vea la punta del tarro". If I don't know where the 'punta del tarro' is, I'll assume object-right if moving image left. Actually 'object-contain' shows everything. Maybe they mean 'object-cover' but zoomed out? You can't. Let's stick to contain. If contain, alignment just moves the small image. I'll try object-right.)
        // Correction: If object-contain, the whole image is visible. Alignment only matters if aspect ratio leaves space.
        // Let's assume user might want cover but shifted for #4? "hacer un poco de zoom out, y correr...". Contain IS zoom out.
        // Let's use object-contain for now.
    },
    {
        src: "/hero-5.jpg",
        mobileClass: "object-cover object-right", // Shift image left -> See Right side (The figure)
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
