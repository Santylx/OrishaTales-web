export default function Footer() {
    return (
        <footer className="bg-white py-12 border-t border-gray-100 mt-auto relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <p className="text-gray-400 text-xs tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} Olazábal. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
