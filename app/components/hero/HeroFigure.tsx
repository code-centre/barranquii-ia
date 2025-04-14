import Image from "next/image";
import CrystalMirror from "../CrystalMirror";
import OceanScene from "../OceanScene";
import { ReactNode } from "react";

interface HeroFigureProps {
  landing: string;
}

const THEME_FIGURE_MAP: Record<string, string | ReactNode> = {
  'default': <OceanScene />,
  'barranqui-ia': <CrystalMirror />,
};
export default function HeroFigure({ landing }: HeroFigureProps) {

  return (
      <div className="">
        {THEME_FIGURE_MAP[landing]}
      </div>
  );
}