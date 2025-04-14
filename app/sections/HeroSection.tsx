import HeroTitle from "../components/hero/HeroTitle";
import HeroFigure from "../components/hero/HeroFigure";
import { THEME_LANDINGS } from "../utils/theme";
import OceanScene from "../components/OceanScene";
import LavaLamp from "../components/CrystalMirror";

interface HeroSectionProps {
    landing: string;
}

export default function HeroSection({ landing }: HeroSectionProps) {
    return (
        <div className="flex mt-16 relative">
            <div className="mb-10 lg:mb-16 xl:mb-10 relative">
                <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute bottom-0 -z-10 -left-36 lg:w-[600px] lg:h-[600px] rounded-full w-[300px] h-[300px] blur-3xl "></div>
                <HeroTitle
                    landing={landing}
                    size="xxxxl"
                    align="left"
                    subtitle="Transformando ideas en startups de alto impacto con base en inteligencia artificial. "
                />
            </div>
            <div className="">
                {/* <OceanScene landing={landing} /> */}
                <HeroFigure landing={landing} />
            </div>
        </div>
    );
}