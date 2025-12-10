"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { href: "/about", label: "About Olazábal" },
    { href: "/articles", label: "Articles" },
    { href: "/events", label: "Events" },
    { href: "/artwork", label: "Artwork" },
    { href: "/contact", label: "Contact" },
    // { href: "/shop", label: "Shop" }, // Hidden for now
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo / Artist Name */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl tracking-widest uppercase font-light hover:opacity-70 transition-opacity">
                            Olazábal
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
                            className="text-gray-500 hover:text-gray-900 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center justify-center h-2/3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-4 text-xl tracking-widest uppercase ${pathname === link.href ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
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
