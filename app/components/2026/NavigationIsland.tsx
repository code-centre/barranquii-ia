import React from 'react';
import Link from 'next/link';

export default function NavigationIsland() {
    return (
        <nav className="relative z-10 flex justify-center items-center px-8 py-4">
            <div className="relative flex items-center space-x-8 p-2 rounded-full border border-purple-500 bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                <Link href="#" className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Caribe-IA
                </Link>
                <Link href="#" className="text-white hover:text-purple-300 transition-colors">
                    ¿Qué es Barranqui-IA?
                </Link>
                <Link href="#" className="text-white hover:text-purple-300 transition-colors">
                    Experiencia
                </Link>
                <Link href="#" className="text-white hover:text-purple-300 transition-colors">
                    Boletos
                </Link>
            </div>
        </nav>
    );
}