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
    <div className="absolute -top-40 -right-20 lg:block xl:pl-20 -z-10 animate-fade-in-left animate-delay-300">
      <div className="">
        <Image
          src={THEME_FIGURE_MAP[landing]}
          width={600}
          height={600}
          alt='Imagen 3D de Caribe-IA'
          className="w-[670px] h-[650px] object-cover"
        />
      </div>
    </div>
  );
}