import Image from "next/image";

interface HeroFigureProps {
  landing: string;
}

const THEME_FIGURE_MAP: Record<string, string> = {
    'default': '/3DFigures/caribeia.webp',
    'barranqui-ia': '/3DFigures/barranquiia.webp',
    'samar-ia': '/3DFigures/samaria.webp',
    'cartagen-ia': '/3DFigures/cartagenia.webp'
};

export default function HeroFigure({ landing }: HeroFigureProps) {

  return (
    <div className="absolute hidden -top-40 -right-20 xl:-right-28 lg:block xl:pl-20 -z-10 animate-fade-in-left animate-delay-300">
      <div className="">
        <Image
          src={THEME_FIGURE_MAP[landing]}
          width={600}
          height={600}
          alt='Imagen 3D de Caribe-IA'
          className="w-[570px] h-[550px] xl:w-[670px] xl:h-[650px] object-cover"
        />
      </div>
    </div>
  );
}