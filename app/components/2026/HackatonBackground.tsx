import React from 'react';

interface HackatonTextProps {
  text: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  rotation: number;
  variant: 'filled' | 'outline';
  size: string;
}

const HackatonText = ({ text, position, rotation, variant, size }: HackatonTextProps) => {
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    fontSize: size,
    fontWeight: 900,
    letterSpacing: '0.1em',
    userSelect: 'none',
    opacity: 0.15,
    transform: `rotate(${rotation}deg)`,
    ...position,
  };

  if (variant === 'outline') {
    return (
      <h1
        style={{
          ...baseStyle,
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}
      >
        {text}
      </h1>
    );
  }

  return (
    <h1
      style={{
        ...baseStyle,
        color: 'rgba(255, 255, 255, 0.15)',
      }}
    >
      {text}
    </h1>
  );
};

export default function HackatonBackground() {
  const hackatonInstances = [
    // Primera fila superior - muy espaciadas
    { position: { top: '3%', left: '2%' }, rotation: 0, variant: 'outline' as const, size: '8vw' },
    { position: { top: '5%', right: '2%' }, rotation: 180, variant: 'filled' as const, size: '7vw' },
    
    // Segunda fila - mucho más espaciada verticalmente
    { position: { top: '20%', left: '1%' }, rotation: 180, variant: 'filled' as const, size: '9vw' },
    { position: { top: '22%', right: '1%' }, rotation: 0, variant: 'outline' as const, size: '8vw' },
    
    // Tercera fila - centro superior
    { position: { top: '38%', left: '3%' }, rotation: 0, variant: 'filled' as const, size: '7vw' },
    { position: { top: '40%', right: '3%' }, rotation: 180, variant: 'outline' as const, size: '8vw' },
    
    // Cuarta fila - centro superior medio
    { position: { top: '56%', left: '1%' }, rotation: 180, variant: 'outline' as const, size: '9vw' },
    { position: { top: '58%', right: '1%' }, rotation: 0, variant: 'filled' as const, size: '8vw' },
    
    // Quinta fila - centro inferior medio
    { position: { top: '74%', left: '2%' }, rotation: 0, variant: 'filled' as const, size: '7vw' },
    { position: { top: '76%', right: '2%' }, rotation: 180, variant: 'outline' as const, size: '8vw' },
    
    // Sexta fila - abajo
    { position: { top: '92%', left: '4%' }, rotation: 180, variant: 'outline' as const, size: '7vw' },
    { position: { top: '94%', right: '4%' }, rotation: 0, variant: 'filled' as const, size: '6vw' },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {hackatonInstances.map((instance, index) => (
        <HackatonText
          key={index}
          text="HACKATON"
          position={instance.position}
          rotation={instance.rotation}
          variant={instance.variant}
          size={instance.size}
        />
      ))}
    </div>
  );
}