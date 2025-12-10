"use client";

import { useState } from "react";
import Image from "next/image";

// Placeholder data
const artworks = [
    { id: 1, title: "Untitled Landscape I", year: "2024", series: "Atmosphere", src: "" },
    { id: 2, title: "Untitled Landscape II", year: "2024", series: "Atmosphere", src: "" },
    { id: 3, title: "Silent Waters", year: "2023", series: "Reflection", src: "" },
    { id: 4, title: "Mountain Echo", year: "2023", series: "Reflection", src: "" },
    { id: 5, title: "Early Morning", year: "2022", series: "Origins", src: "" },
    { id: 6, title: "Late Evening", year: "2022", series: "Origins", src: "" },
];

const filters = ["All", "Atmosphere", "Reflection", "Origins"];

export default function ArtworkPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

    const filteredArtworks =
        activeFilter === "All"
            ? artworks
            : artworks.filter((art) => art.series === activeFilter);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-light tracking-widest uppercase mb-12 text-center text-gray-900">
                Artwork
            </h1>

            {/* Filter Menu */}
            <div className="flex justify-center flex-wrap gap-8 mb-16">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`text-sm tracking-widest uppercase transition-colors duration-300 ${activeFilter === filter
                                ? "text-gray-900 border-b border-gray-900"
                                : "text-gray-400 hover:text-gray-900"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtworks.map((art) => (
                    <div
                        key={art.id}
                        className="group cursor-pointer"
                        onClick={() => setSelectedArtwork(art)}
                    >
                        <div className="relative aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
                            {/* Image Placeholder - In real app use next/image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light tracking-widest uppercase group-hover:scale-105 transition-transform duration-700">
                                Artwork {art.id}
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-sm font-medium text-gray-900">{art.title}</h3>
                            <p className="text-xs text-gray-500 font-light tracking-wide">
                                {art.year}, {art.series}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedArtwork && (
                <div
                    className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    onClick={() => setSelectedArtwork(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-gray-500 hover:text-gray-900"
                        onClick={() => setSelectedArtwork(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    <div className="flex flex-col items-center max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative bg-gray-200 w-full max-w-4xl aspect-[4/3] mb-8">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl font-light tracking-widest">
                                [Hi-Res Image of {selectedArtwork.title}]
                            </div>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-light text-gray-900 mb-2">{selectedArtwork.title}</h2>
                            <p className="text-sm text-gray-500 tracking-widest uppercase">{selectedArtwork.year} — {selectedArtwork.series}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
