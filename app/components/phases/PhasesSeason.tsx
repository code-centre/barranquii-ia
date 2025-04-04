import Border from "../Border"
import Title from "../Title"
import HackatonesNav from "./HackatonesNav"
import { BenefitsCard } from "./BenefitsCard"
import Image from "next/image"
import { THEME_LANDINGS } from "../../utils/theme";

interface Props {
    landing: string
}

const programBenefits = [
    "Mentoría técnica y de negocio",
    "Conexión con expertos en IA",
    "Espacio de coworking y conexión con la comunidad",
    "Oportunidades para construir tu pitch y presentarlo ante inversionistas",
    "Acceso a recursos computacionales",
]

export default function PhasesSeason({ landing }: Props) {
    return (
        <div className="flex flex-col gap-10 relative">
            <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute -top-56 -z-10 -right-44 w-[600px] h-[600px] rounded-full blur-3xl"></div>
            <Title title="Etapas" />
            {/* Estructura principal con el Border a la izquierda */}
            <div className="grid grid-cols-[auto_1fr]">
                {/* Columna del Border que abarca todas las secciones */}
                <div className="grid grid-cols-[3px_1fr] gap-3 lg:gap-10">
                    <Border landing={landing} />
                </div>

                {/* Columna del contenido */}
                <div className="flex flex-col gap-10 text-justify">
                    {/* Sección 1: Temporada de Hackatones */}
                    <div>
                        <h2 className="text-2xl font-bold">1.- Temporada de Hackatones</h2>
                        <div className="mt-4 space-y-4">
                            <p>
                                La Temporada de Hackatones de Caribe-IA es el momento clave para acercar la tecnología a los verdaderos
                                constructores del futuro. A lo largo de distintas ciudades de la región Caribe, convocamos a mentes
                                creativas, técnicas y visionarias a idear, prototipar e impulsar soluciones reales con el poder de la
                                inteligencia artificial y la tecnología emergente.
                            </p>
                            <p>
                                Estos espacios intensivos de co-creación no solo son una oportunidad para materializar ideas en
                                prototipos funcionales, sino también para identificar talentos, equipos y proyectos con alto potencial,
                                que podrán ser seleccionados para avanzar en el proceso de incubación de Caribe-IA.
                            </p>
                        </div>
                    </div>

                    {/* Navegación de Hackatones (fuera del grid para ocupar todo el ancho) */}
                    <div className="w-full -ml-[calc(auto+6px)] col-span-2">
                        <HackatonesNav landing={landing} />
                    </div>

                    {/* Sección 2: Programa de Incubación */}
                    <div>
                        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">2.- Programa de Incubación</h2>
                                <p>
                                    El Programa de Incubación de Caribe-IA es la siguiente etapa del viaje para los equipos más
                                    prometedores surgidos durante la temporada de hackatones.
                                </p>
                                <p>
                                    Durante 12 semanas intensivas (de septiembre a noviembre), los equipos seleccionados enfrentarán una
                                    serie de capacitaciones y retos, diseñados para acelerar su crecimiento y transformarlos en startups
                                    reales con visión global.
                                </p>
                            </div>
                            <div>
                                <BenefitsCard title="A lo largo del programa, recibirás:" benefits={programBenefits} />
                            </div>
                        </div>
                    </div>

                    {/* Sección 3: Demo Day & Crowdfunding */}
                    <div>
                        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <Image
                                    src="/FOTOSBARRANQUI-IA/12.jpg"
                                    alt="Demo Day"
                                    width={400}
                                    height={450}
                                    className="rounded-lg w-full h-auto"
                                />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">3.- Demo Day & Crowdfunding</h2>
                                <p>
                                    El Demo Day de Caribe-IA es un evento donde los equipos presentan sus startups ante audiencia de
                                    aliados, inversionistas, medios y comunidad.
                                </p>
                                <p>
                                    A través de una plataforma de crowdfunding, los proyectos podrán levantar capital de manera abierta y
                                    transparente, permitiendo que familiares, amigos, compañeros e incluso inversionistas ángeles
                                    participen con aportes de apoyo.
                                </p>
                                <p>
                                    Queremos democratizar el acceso a la inversión y activar un ecosistema donde todos puedan ser parte
                                    del crecimiento de las startups nacidas en el Caribe y que sean impulsadas desde el Caribe.
                                </p>
                            </div>
                        </div>
                        <Image src="/3DFigures/glass-3d.png" alt="3D glass" width={500} height={400} className="absolute -z-10 -right-60 -bottom-32" />
                        {/* <div className="relative">
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

