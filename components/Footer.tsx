"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const isTransparent = pathname === "/" || pathname === "/about";

    return (
        <footer
            className={`py-8 mt-auto z-20 transition-colors duration-300 ${isTransparent
                ? "fixed bottom-0 w-full bg-white border-none"
                : "bg-white border-t border-gray-100 relative"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <p className={`text-[10px] tracking-widest transition-colors duration-300 ${isTransparent ? "text-gray-900" : "text-gray-900"
                    }`}>
                    &copy; {new Date().getFullYear()} Orisha Tales | All rights reserved.
                </p>
            </div>
        </footer>
    );
}
