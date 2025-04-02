import HeroTitle from "../components/hero/HeroTitle";
import HeroFigure from "../components/hero/HeroFigure";
import { THEME_LANDINGS } from "../utils/theme";

interface HeroSectionProps {
    landing: string;
}

export default function HeroSection({ landing }: HeroSectionProps) {
    return (
        <div className="flex mt-16">
            <div className="mb-10 lg:mb-16 xl:mb-10 relative">
            <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute bottom-0 -z-10 -left-36 w-[600px] h-[600px] rounded-full blur-3xl"></div> 
                <HeroTitle
                    landing={landing}
                    size="xxxxl"
                    align="left"
                    subtitle="Transformando ideas en startups de alto impacto con base en inteligencia artificial. "
                />
            </div>
            <HeroFigure landing={landing} />
        </div>
    );
}