"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative w-full">
            {/* Background Image - Fixed to cover screen */}
            <div className="fixed inset-0 -z-10 bg-gray-100">
                {/* Desktop Image */}
                <div className="hidden md:block relative w-full h-full">
                    <Image
                        src="/about-olazabal.jpg"
                        alt="Santiago Rodríguez Olazábal"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden relative w-full h-full">
                    <Image
                        src="/about-olazabal-mobile.jpg"
                        alt="Santiago Rodriguez Olazábal"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                </div>
            </div>

            {/* Hero Text Content */}
            <div className="min-h-[calc(100vh-5rem)] flex flex-col items-end justify-end pb-12 px-6 md:px-12">
                <div className="text-right space-y-2 animate-fade-in">
                    <h1 className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-gray-900">
                        Santiago Rodríguez Olazábal
                    </h1>
                    <p className="text-xs md:text-sm tracking-[0.15em] font-light text-gray-700 uppercase">
                        Contemporary Afro-Cuban Art Master
                    </p>
                </div>
            </div>

            {/* Biography Content */}
            {/* Width increased to max-w-4xl and pr-0 maintained for right alignment consistency */}
            <div className="pl-6 md:pl-12 pr-0 pb-32 flex flex-col items-end">
                <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 max-w-4xl text-justify space-y-6 text-gray-800 font-light leading-relaxed shadow-sm">
                    {/* Bilingual Quote Header */}
                    <div className="mb-8 border-l-4 border-gray-300 pl-6 space-y-3">
                        <p className="text-base text-gray-500 italic font-serif">
                            &quot;Mi obra es una alabanza a la memoria de mis antepasados, como la ablución de agua fresca que se ofrece a la santidad del espíritu y que me activa a cada momento.&quot;
                        </p>
                        <p className="text-base text-gray-500 font-serif not-italic">
                            &quot;My work is a praise to the memory of my ancestors, an ablution of fresh water offered to the sanctity of spirit, which activates me at every moment.&quot;
                        </p>
                    </div>

                    {/* Updated Biography Text */}
                    <p>
                        Born in Havana, Cuba, on July 25, 1955, Santiago Rodríguez Olazábal embarked on his artistic path at the National Academy of Art San Alejandro. Though his formal studies remained uncompleted between 1972 and 1975, this early immersion laid the groundwork for a distinguished career marked by profound introspection and a rich engagement with cultural narratives. Today, he is revered as a master whose influence transcends the Cuban canon, standing as a preeminent figure in the global narrative of Afro-descendant art.
                    </p>
                    <p>
                        Olazábal&apos;s work, imbued with a distinctive vision, has been the subject of numerous solo exhibitions that resonate across continents. This artistic dialogue has continued to evolve dynamically in recent years. In 2025, he presented <i>La ceiba no se dobla aunque el viento sea brujo</i> alongside Manuel Mendive at the Mendive Art Project Gallery in Havana. This followed a significant period of international activity, including an artistic creation residency at Centro de Arte La Regenta in Las Palmas de Gran Canaria, Spain, in 2024. His solo inquiries into spirituality and memory were further articulated in exhibitions such as <i>Travesía</i> at Galería Saro León (2023) and <i>Oriki: Canción de Elogio</i> at Factoría Habana (2022).
                    </p>
                    <p>
                        The artist remained prolific during the early 2020s, presenting <i>La fuerza del tiempo</i> at Galería Acacia (2021) and expanding his reach to Belgium with <i>Las marcas de la noche</i> at Kloser Contemporary Art (2021). These recent milestones build upon a foundational history of exhibitions, including <i>La noche puso sus ojos en ella</i> at NG Art Gallery in Panama City (2019) and <i>Imoye</i> at the University of Missouri (2016).
                    </p>
                    <p>
                        His pieces, often serving as collateral events to major art gatherings, demonstrating a consistent presence in the global art discourse. His engagement remains vigorous with recent participations in the <i>HB</i> exhibitions (2024 and 2025), honoring the 40th anniversary of the Havana Biennial. He has contributed to critical dialogues in shows such as <i>Mente Sabia Para Crear</i> at Casa de las Américas (2024) and explored themes of heritage in <i>West Indies Ltd.</i> at Galería Villa Manuela (2024).
                    </p>
                    <p>
                        International audiences continue to experience his compelling narratives through diverse collective showcases. Recent highlights include <i>Fe: Expressions of Faith in Contemporary Cuban Art</i> in Santa Fe, New Mexico (2023), and the European exhibition <i>Healing Power: Living Traditions, Global Interactions</i> at the National Museum of World Cultures in the Netherlands (2021). These recent events complement his historic presence in landmark exhibitions such as <i>Without Masks</i> and <i>Drapetomania</i>.
                    </p>
                    <p>
                        Olazábal&apos;s work is a valued part of numerous prestigious collections across the globe. In addition to the Museo Nacional de Bellas Artes in Havana, the Ludwig Collection, and the Centro Atlántico de Arte Moderno (CAAM), his work is represented in the National Museum of World Cultures in the Netherlands, the Luciano Méndez Collection in Spain, and the Klaus Kloser Contemporary Art collection in Belgium.
                    </p>
                    <p>
                        Throughout his career, Santiago Rodríguez Olazábal has garnered notable accolades that acknowledge his singular talent. Among these are the Special Mention for the Most Original Work at the Knoke Art Fair (2014), the Diploma al Mérito Artístico from the Instituto Superior de Arte (2007), and the International Silver Plate Award at the 4th Ankara Biennial (1992). These honors, alongside recognition for specific works like <i>Onile</i>, which earned the Illustrious Visitor Coin of Vatican City (2005), underscore his consistent impact and enduring recognition in the art world.
                    </p>

                    {/* CV Download Link */}
                    <a
                        href="/Olazábal-CV-Dic-2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-12 pt-6 border-t border-gray-200 text-right text-sm font-medium tracking-[0.1em] text-gray-400 hover:text-gray-900 transition-colors uppercase"
                    >
                        Download CV (PDF)
                    </a>
                </div>
            </div>
        </div>
    );
}
