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
    <div className=" top-10 right-40 lg:block xl:pl-20  -z-10 mt-5">
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