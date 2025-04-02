import Border from "../Border";
import Title from "../Title";
import HackatonesNav from "./HackatonesNav";

interface Props {
    landing: string
}

export default function PhasesSeason({ landing }: Props) {
    return (
        <div className="flex flex-col gap-10 mb-20">
            <Title
                title="Etapas"
            />
            <div className='grid grid-cols-[3px_1fr] gap-3 lg:gap-10'>
                <Border landing={landing} />
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-bold">1.- Temporada de Hackatones</h2>
                    <p> La Temporada de Hackatones de Caribe-IA es el momento clave para acercar la tecnología a los verdaderos constructores del futuro. A lo largo de distintas ciudades de la región Caribe, convocamos a mentes creativas, técnicas y visionarias a idear, prototipar e impulsar soluciones reales con el poder de la inteligencia artificial y la tecnología emergente.
                    </p>
                    <p>Estos espacios intensivos de co-creación no solo son una oportunidad para materializar ideas en prototipos funcionales, sino también para identificar talentos, equipos y proyectos con alto potencial, que podrán ser seleccionados para avanzar en el proceso de incubación de Caribe-IA.</p>

                </div>
                <HackatonesNav landing={landing} />

            </div>
        </div>
    );
}