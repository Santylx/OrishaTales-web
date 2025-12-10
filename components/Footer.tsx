"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <footer
            className={`py-8 mt-auto z-20 transition-colors duration-300 ${isHome
                    ? "fixed bottom-0 w-full bg-transparent border-none"
                    : "bg-white border-t border-gray-100 relative"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <p className={`text-xs tracking-widest uppercase transition-colors duration-300 ${isHome ? "text-gray-300/80" : "text-gray-400"
                    }`}>
                    &copy; {new Date().getFullYear()} Olazábal. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
