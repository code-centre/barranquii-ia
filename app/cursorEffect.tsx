'use client';

import React, { useState, useEffect, useRef } from 'react';

// Número de partículas en la estela
const NUM_PARTICLES = 10;
// Radio de las partículas
const PARTICLE_SIZE = 10;
// Colores posibles para las partículas (tonos galácticos)
const COLORS = ['#ffffff', '#e0e0e0', '#c0c0ff', '#a0a0ff', '#8080ff'];

// Interfaz para la posición de una partícula
interface Position {
  x: number;
  y: number;
}

const GalacticCursorEffect = () => {
  // Estado para la posición actual del cursor
  const [pointerPos, setPointerPos] = useState<Position>({ x: -100, y: -100 });
  // Ref para almacenar las posiciones de las partículas y los elementos DOM
  const particlesRef = useRef<Array<{ pos: Position; element: HTMLDivElement | null }>>(
    Array.from({ length: NUM_PARTICLES }).map(() => ({
      pos: { x: -100, y: -100 },
      element: null,
    }))
  );
  // Ref para el bucle de animación
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Actualiza la posición principal del cursor
    const handleMouseMove = (event: MouseEvent) => {
      setPointerPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Bucle de animación para que las partículas sigan al cursor
    const animateParticles = () => {
      let targetX = pointerPos.x;
      let targetY = pointerPos.y;

      particlesRef.current.forEach((particle, index) => {
        const currentX = particle.pos.x;
        const currentY = particle.pos.y;
        const element = particle.element;

        // Interpolar suavemente hacia la posición del líder (partícula anterior o cursor)
        const dx = targetX - currentX;
        const dy = targetY - currentY;
        const newX = currentX + dx * 0.3; // Ajusta el valor 0.3 para cambiar la suavidad/retraso
        const newY = currentY + dy * 0.3;

        particle.pos.x = newX;
        particle.pos.y = newY;

        // Actualizar la posición del elemento DOM
        if (element) {
          element.style.transform = `translate(${newX - PARTICLE_SIZE / 2}px, ${newY - PARTICLE_SIZE / 2}px)`;
          // Opcional: Escalar o cambiar opacidad según la distancia/índice
          const scale = Math.max(0, 1 - index / NUM_PARTICLES);
          element.style.opacity = `${scale * 0.8}`; // Hacer más transparentes las últimas
          // element.style.width = `${PARTICLE_SIZE * scale}px`; // Hacer más pequeñas las últimas
          // element.style.height = `${PARTICLE_SIZE * scale}px`;
        }

        // La siguiente partícula seguirá a esta
        targetX = newX;
        targetY = newY;
      });

      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };

    // Iniciar animación
    animationFrameRef.current = requestAnimationFrame(animateParticles);

    // Limpieza
    return () => {
      console.log('Cleaning up cursor effect...');
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [pointerPos]); // Re-ejecutar efecto solo si pointerPos cambia (aunque el listener se añade una vez)

  return (
    <>
      {particlesRef.current.map((_, index) => (
        <div
          key={index}
          ref={(el) => { particlesRef.current[index].element = el }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${PARTICLE_SIZE}px`,
            height: `${PARTICLE_SIZE}px`,
            borderRadius: '50%',
            backgroundColor: COLORS[index % COLORS.length],
            pointerEvents: 'none', // Muy importante: para no interferir con clicks
            zIndex: 9999, // Asegura que esté por encima de otro contenido
            opacity: 0, // Inicialmente invisible hasta que se mueva
            transition: 'transform 0.05s linear', // Transición suave (opcional)
            willChange: 'transform, opacity', // Optimización
            // Podrías añadir blur o box-shadow aquí para un efecto más suave/difuso
            // filter: 'blur(2px)',
            boxShadow: `0 0 5px ${COLORS[index % COLORS.length]}, 0 0 10px ${COLORS[index % COLORS.length]}`,
          }}
        />
      ))}
    </>
  );
};

export default GalacticCursorEffect;