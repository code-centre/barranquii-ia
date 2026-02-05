import React from 'react';
import Image from 'next/image';

export default function SponsorsSection2026() {
    const mainSponsors = [
        { name: 'FCA', logo: '/images/sponsors/fca-logo.png', link: '#' },
        { name: 'Tech Centre', logo: '/images/sponsors/tech-centre-logo.png', link: '#' },
        { name: 'Caribe Ventures', logo: '/images/sponsors/caribe-ventures-logo.png', link: '#' },
        { name: 'Ciudad Inmersiva', logo: '/images/sponsors/ciudad-inmersiva-logo.png', link: '#' },
    ];

    const otherSponsors = [
        { name: 'Patrocinador Principal', logo: '/images/sponsors/main-sponsor-logo.png', link: '#' },
    ];

    return (
        <section className="py-16 text-white relative overflow-hidden">
            {/* Background subtle glow */}
            <div className="absolute inset-0 z-0 opacity-5">
                <div className="h-full w-full" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Esto es posible gracias al esfuerzo de
                        </span>
                    </h2>

                    {/* Main Sponsors */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-12">
                        {mainSponsors.map((sponsor) => (
                            <a 
                                href={sponsor.link} 
                                key={sponsor.name} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex justify-center items-center p-4 group"
                            >
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    width={150}
                                    height={80}
                                    className="object-contain h-20 grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-purple-500/50 my-8"></div>

                    <h3 className="text-3xl font-bold text-purple-300 mb-8">Patrocinadores</h3>

                    {/* Other Sponsors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
                        {otherSponsors.map((sponsor) => (
                            <a 
                                href={sponsor.link} 
                                key={sponsor.name} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex justify-center items-center p-4 group"
                            >
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    width={180}
                                    height={90}
                                    className="object-contain h-24 grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}