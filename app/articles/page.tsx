export default function ArticlesPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-light tracking-widest uppercase mb-12 text-center text-gray-900">
                Articles & Press
            </h1>
            <div className="space-y-12">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="border-b border-gray-100 pb-8 last:border-0">
                        <p className="text-xs tracking-widest text-gray-400 mb-2">DATE, YEAR</p>
                        <h2 className="text-xl font-normal text-gray-800 mb-2">Article Title Placeholder {item}</h2>
                        <p className="text-gray-500 font-light mb-4">
                            Brief excerpt from the article or publication description goes here.
                        </p>
                        <a href="#" className="text-xs uppercase tracking-widest border-b border-gray-300 pb-0.5 hover:border-gray-900 transition-colors">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
