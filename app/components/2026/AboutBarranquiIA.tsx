import React from 'react';
import Image from 'next/image';

export default function AboutBarranquiIA() {
    return (
        <section className="py-16 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        ¿Qué es Barranqui-IA?
                    </span>
                </h2>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                    Barranqui-IA es un hackatón de 48 horas donde desarrolladores,
                    diseñadores, data lovers y builders se reúnen para crear
                    soluciones reales con IA.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-purple-500 flex items-center justify-center bg-purple-900 bg-opacity-30">
                            <Image
                                src="/path-to-your-image-1.jpg" // Reemplaza con la ruta de tu imagen
                                alt="Retos empresariales"
                                width={192}
                                height={192}
                                objectFit="cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Retos empresariales para problemáticas concretas</h3>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-pink-500 flex items-center justify-center bg-purple-900 bg-opacity-30">
                            <Image
                                src="/path-to-your-image-2.jpg" // Reemplaza con la ruta de tu imagen
                                alt="Prototipo funcional"
                                width={192}
                                height={192}
                                objectFit="cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">48 horas para construir un prototipo funcional</h3>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-purple-500 flex items-center justify-center bg-purple-900 bg-opacity-30">
                            <Image
                                src="/path-to-your-image-3.jpg" // Reemplaza con la ruta de tu imagen
                                alt="Presentación y premiación"
                                width={192}
                                height={192}
                                objectFit="cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Presentación de soluciones y premiación</h3>
                    </div>
                </div>

                <p className="text-lg font-semibold text-center text-purple-400">
                    No son ideas. Son soluciones.
                </p>
            </div>
        </section>
    );
}