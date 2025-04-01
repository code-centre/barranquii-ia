"use client";
import React from 'react';
import Link from 'next/link';

export default function PromoBar() {
  return (
    <div className="w-full bg-gradient-to-r from-principleViolet via-purple-600 to-blue-600 py-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between max-w-7xl px-4">
        <div className="flex items-center space-x-3">
          <div className="bg-white text-principleViolet font-bold px-3 py-1 rounded-md text-sm animate-pulse">
            NUEVO
          </div>
          <p className="text-white font-medium text-sm md:text-base">
            ¡Ya están abiertas las inscripciones para Barranqui-IA 2025! 3 y 4 de mayo en la Universidad del Norte
          </p>
        </div>
        
        <Link 
          href="#Preinscribete"
          className="mt-3 md:mt-0 bg-white text-principleViolet hover:bg-opacity-90 px-4 py-1 rounded-md font-bold text-sm transition-all duration-300 transform hover:scale-105 flex items-center group"
        >
          Inscríbete ahora
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}