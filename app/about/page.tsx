"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative w-full">
            {/* Background Image - Fixed to cover screen */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/about-olazabal.jpg"
                    alt="Santiago Rodriguez Olazábal"
                    fill
                    className="object-cover object-[30%_50%] md:object-center" // Final adjustment to 30%
                    priority
                    quality={90}
                />
            </div>

            {/* Hero Text Content */}
            <div className="min-h-[calc(100vh-5rem)] flex flex-col items-end justify-end pb-12 px-6 md:px-12">
                <div className="text-right space-y-2 animate-fade-in">
                    <h1 className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-gray-900">
                        Santiago Rodriguez Olazábal
                    </h1>
                    <p className="text-xs md:text-sm tracking-[0.15em] font-light text-gray-700 uppercase">
                        Contemporary Afro-Cuban Art Master
                    </p>
                </div>
            </div>

            {/* Biography Content */}
            <div className="px-6 md:px-12 pb-32 flex flex-col items-end">
                <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 max-w-2xl text-justify space-y-6 text-gray-800 font-light leading-relaxed shadow-sm">
                    <p>
                        Born in Havana, Cuba, on July 25, 1955, Santiago Rodríguez Olazábal embarked on his artistic path at the National Academy of Art San Alejandro. Though his formal studies remained uncompleted between 1972 and 1975, this early immersion laid the groundwork for a distinguished career marked by profound introspection and a rich engagement with cultural narratives.
                    </p>
                    <p>
                        Olazábal&apos;s work, imbued with a distinctive vision, has been the subject of numerous solo exhibitions that resonate across continents. His artistic dialogue has unfolded in diverse settings, from the vibrant art scene of Havana, with exhibitions like <i>LA NOCHE PUSO SUS OJOS EN ELLA</i> at NG. Art Gallery in Panama City (2019) and <i>HISTORIAS POR CONTAR. Porque hay cosas que se nos escapan</i> at NG Art Gallery in Havana (2018), to presentations like <i>AGUA EN LAS RAÍCES</i> at Galería Collage Habana (2017) and <i>LO SECRETO</i> (with Rubén Rodríguez) at Galería Villa Manuela (2017). His journey has also taken him to American institutions, including <i>IMOYE</i> at the George Caleb Bingham Gallery, University of Missouri (2016), a highlight of "Afrocuban Artist a Renaissance."
                    </p>
                    <p>
                        His pieces, often serving as collateral events to major art gatherings, demonstrate a consistent presence in the global art discourse. <i>ADIFAFUN IMOLE</i>, presented at ZONA FRANCA during the 12th Havana Biennial (2015), and <i>PERMANCER EN LA TIERRA</i>, a collateral exhibition of the 11th Havana Biennial (2012), underscore his ongoing relevance. European audiences have experienced his compelling narratives through shows such as <i>COMO UN BARCO EN EL OCEANO</i> at Galería Saro León in Las Palmas de Gran Canaria (2014) and <i>GÚEMILERE</i> at Rainhart Gallery in Brussels (2013). Earlier significant solo showcases like <i>ONILE. El Espíritu Sagrado De La Tierra</i> at the National Museum of Fine Arts, Havana (2005), and <i>YO NUNCA MORIRE</i> at Galería Habana (2002), solidified his reputation as an artist of significant depth and impact.
                    </p>
                    <p>
                        Beyond his individual presentations, Olazábal&apos;s art has been a compelling force in a multitude of collective exhibitions, contributing to critical dialogues on contemporary art. His participation in events like SCOPE MIAMI and ART MADRID reflects his international acclaim, while his presence in landmark exhibitions such as <i>WITHOUT MASKS. CONTEMPORARY AFROCUBAN ART</i> from The Von Christierson Collection (various locations, including Museo Nacional de Bellas Artes, Havana, 2017, and Museum of Anthropology, Vancouver, 2014) and <i>DRAPETOMANIA</i> (Cooper Gallery of African American Art, Harvard, 2015, among others) highlights his profound engagement with themes of identity, heritage, and spirituality.
                    </p>
                    <p>
                        Olazábal&apos;s work is a valued part of numerous prestigious collections across the globe. These include the Museo Nacional de Bellas Artes in Havana, the Ludwig Collection Aachen, the Centro Atlántico de Arte Moderno (CAAM), the DAROS-LatinAmerica Collection, and The Von Christierson Collection. His presence in these esteemed repositories speaks to the enduring significance and universal appeal of his artistic contributions.
                    </p>
                    <p>
                        Throughout his career, Santiago Rodríguez Olazábal has garnered notable accolades that acknowledge his singular talent. Among these are the Special Mention for the Most Original Work at the KNOKE ART FAIR (2014), the DIPLOMA AL MERITO ARTISTICO from Instituto Superior de Arte (2007), and the International Silver Plate Award at the 4th BIENAL DE ANKARA (1992). These honors, alongside significant recognition for specific works like <i>ONILE. El Espíritu Sagrado De La Tierra</i>, which earned the Illustrious Visitor Coin of Vatican City (2005), and <i>ARA OKO</i>, honored with the Illustrious Son Medal of Villa de Guanabacoa (1986), underscore his consistent impact and recognition in the art world.
                    </p>
                </div>
            </div>
        </div>
    );
}
