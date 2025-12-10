export default function EventsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-light tracking-widest uppercase mb-12 text-center text-gray-900">
                Exhibitions
            </h1>
            <div className="space-y-16">
                <div>
                    <h3 className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-8 text-center">Upcoming</h3>
                    <div className="grid gap-8">
                        <div className="bg-gray-50 p-8 text-center">
                            <p className="text-gray-500 font-light italic">No upcoming events scheduled at this time.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-8 text-center">Past Events</h3>
                    <div className="space-y-8">
                        {[1, 2].map((item) => (
                            <div key={item} className="flex flex-col md:flex-row md:items-center justify-between group">
                                <div className="mb-2 md:mb-0">
                                    <h2 className="text-lg font-normal text-gray-800 group-hover:text-gray-600 transition-colors">Exhibition Title {item}</h2>
                                    <p className="text-sm text-gray-500 font-light">Gallery Nmae, City, Country</p>
                                </div>
                                <div className="text-sm text-gray-400 tracking-wide">
                                    Month Year
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
