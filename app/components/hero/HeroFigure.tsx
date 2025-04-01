import Image from "next/image";

interface HeroFigureProps {
  landing: string;
}

const THEME_FIGURE_MAP: Record<string, string> = {
    'default': '/3DFigures/caribeia.png',
    'barranqui-ia': '/3DFigures/barranquiia.png',
    'samar-ia': '/3DFigures/samaria.png',
    'cartagen-ia': '/3DFigures/cartagenia.png'
};

export default function HeroFigure({ landing }: HeroFigureProps) {

  return (
    <div className="absolute top-1 right-1/4 w-1/3 lg:block xl:pl-20 -z-10 mt-24">
      <div className="relative">
        <Image
          src={THEME_FIGURE_MAP[landing]}
          width={800}
          height={800}
          alt='Imagen 3D de Caribe-IA'
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}