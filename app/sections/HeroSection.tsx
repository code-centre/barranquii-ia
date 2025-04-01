import HeroTitle from "../components/hero/HeroTitle";
import HeroFigure from "../components/hero/HeroFigure";

interface HeroSectionProps {
    landing: string;
}

export default function HeroSection({ landing }: HeroSectionProps) {
    return (
        <div className="flex justify-between mt-20">
            <div className="mb-10 lg:mb-16 xl:mb-20">
                <HeroTitle
                    landing={landing}
                    size="xxxxl"
                    align="left"
                    subtitle="Transformando ideas en startups de alto impacto con base en inteligencia artificial. "
                />
                <HeroFigure landing={landing} />
            </div>
        </div>
    );
}