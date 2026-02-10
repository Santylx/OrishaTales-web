"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const links: { href: string; label: string }[] = [
    // { href: "/about", label: "About" },
    // { href: "/articles", label: "Articles" },
    // { href: "/events", label: "Events" },
    // { href: "/artwork", label: "Artwork" },
    // { href: "/contact", label: "Contact" },
] as const as { href: string; label: string }[];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent border-none">
            <div className="w-full px-6 md:px-12">
                <div className="flex justify-between items-center h-40">
                    {/* Logo / Artist Name */}
                    <div className="flex-shrink-0 flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-[150px] h-[150px] transition-transform group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="Orisha Tales Logo"
                                    fill
                                    className="object-contain"
                                    sizes="150px"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${pathname === link.href ? "text-gray-900 border-b border-gray-900" : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 hover:text-gray-600 focus:outline-none p-2"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute left-0 w-full h-[calc(100vh-5rem)] overflow-y-auto z-40">
                    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-2xl tracking-[0.2em] uppercase font-light transition-colors ${pathname === link.href ? "text-gray-900 border-b border-gray-900 pb-1" : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
