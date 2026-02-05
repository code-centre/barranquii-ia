import React from 'react';
import Link from 'next/link';
import NavigationIsland from '../components/2026/NavigationIsland'; // Agrega esta línea
 

interface HeroSection2026Props {
    landing: string;
}

export default function HeroSection2026({ landing }: HeroSection2026Props) {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background abstract shapes */}
            <div className="absolute inset-0">
                <div className="absolute top-30 left-15 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '6s' }}></div>
                <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '6s' }}></div>
            </div>

            {/* Navigation */}
            <NavigationIsland /> {/* Reemplaza la navegación existente con esto */}
 

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
                <h1 className="text-6xl md:text-8xl font-bold text-center mb-6">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Barranqui-IA
                    </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white text-center mb-4 max-w-3xl">
                    Donde el caribe construye el futuro con Inteligencia artificial
                </p>
                
                <p className="text-lg text-purple-300 text-center mb-12">
                    3ra Edición - 1 al 3 de Mayo
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
                        Conoce más
                    </button>
                    <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors">
                        Accede a la preventa
                    </button>
                </div>

                <p className="text-sm text-purple-200">
                    Cupos limitados - Precio especial
                </p>
            </div>
        </div>
    );
}