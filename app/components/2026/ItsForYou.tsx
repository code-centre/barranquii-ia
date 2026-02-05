import React from 'react';
import Image from 'next/image';

export default function IsItForYou() {
    return (
        <section className="py-16 text-white relative overflow-hidden">
            {/* Background glow elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            ¿No sabes si es para ti?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-4 max-w-3xl">
                        Un hackatón es un espacio seguro para explorar la tecnología, aprender y probar tus límites.
                        Estarás rodeado de otros participantes que, al igual que tú, no tienen todas las respuestas, pero se atreven
                        a construir apoyados de inteligencia artificial.
                    </p>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        También habrá mentores para ayudarte a resolver tus dudas y guiarte para completar tu prototipo.
                    </p>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    <div className="lg:col-span-2 relative h-96 rounded-lg overflow-hidden shadow-lg border border-purple-500/30">
                        <Image
                            src="/images/hackaton-group.jpg" // Reemplaza con la ruta de tu imagen principal
                            alt="Hackathon participants group photo"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="relative h-44 rounded-lg overflow-hidden shadow-lg border border-purple-500/30">
                            <Image
                                src="/images/hackaton-working-1.jpg" // Reemplaza con la ruta de tu imagen pequeña 1
                                alt="Participants working"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="relative h-44 rounded-lg overflow-hidden shadow-lg border border-purple-500/30">
                            <Image
                                src="/images/hackaton-working-2.jpg" // Reemplaza con la ruta de tu imagen pequeña 2
                                alt="Participants collaborating"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-2xl font-semibold text-purple-300 max-w-4xl mx-auto">
                        Bienvenidos developers, diseñadores, estudiantes y cualquier profesional (o no profesional) que se atreva a
                        romper sus propios límites.
                    </p>
                </div>
            </div>
        </section>
    );
}