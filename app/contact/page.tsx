export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
            <h1 className="text-3xl font-light tracking-widest uppercase mb-12 text-center text-gray-900">
                Contact
            </h1>
            <div className="text-center space-y-8">
                <div>
                    <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">General Inquiries</p>
                    <a href="mailto:info@olazabal.com" className="text-xl font-light text-gray-800 hover:text-gray-500 transition-colors">
                        info@olazabal.com
                    </a>
                </div>

                <div>
                    <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">Studio</p>
                    <p className="text-gray-600 font-light">
                        [City, Country Address Placeholder]<br />
                    </p>
                </div>
            </div>
        </div>
    );
}
