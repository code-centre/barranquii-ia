interface FAQ {
    question: string;
    answer: string;
}

interface FAQGroup {
    title: string;
    faqs: FAQ[];
}

export const FAQS_CARIBE_IA: FAQGroup[] = [
    {
        title: "🎯 Participantes del Hackatón",
        faqs: [
            {
                question: "¿Quién puede participar?",
                answer:
                    "Cualquier persona con ganas de construir: desarrolladores, diseñadores, científicos de datos, emprendedores o creativos. No importa tu nivel de experiencia ni si vienes solo o en equipo. Lo que buscamos es actitud y disposición para crear.",
            },
            {
                question: "¿Necesito tener una idea o equipo antes de llegar?",
                answer:
                    "Para nada. Puedes llegar con una idea, con un equipo, con ambas cosas, o con ninguna. Al inicio del evento habrá espacios para formar equipos, explorar retos y construir desde cero. Muchos de los mejores proyectos nacen ahí mismo.",
            },
            {
                question: "¿Hay que saber de inteligencia artificial?",
                answer:
                    "No es requisito. Si no tienes experiencia con IA, durante el evento encontrarás talleres introductorios y mentores que te guiarán. Lo que importa es que quieras aprender y construir algo real.",
            },
            {
                question: "¿Qué pasa si ya tengo un proyecto avanzado?",
                answer:
                    "Todo lo que se presente debe construirse durante el hackatón, partiendo desde cero. Puedes traer una idea clara y contexto del problema, pero la solución debe desarrollarse en el evento. Esto garantiza que la competencia sea justa para todos.",
            },
        ],
    },
    {
        title: "🏗️ Equipos en Incubación",
        faqs: [
            {
                question: "¿Cómo se seleccionan los equipos para la incubación?",
                answer:
                    "Los mejores proyectos del hackatón son evaluados por un jurado con criterios de impacto, viabilidad técnica y potencial de crecimiento. La selección es rigurosa porque queremos que los equipos que entren tengan las mejores condiciones para crecer en serio.",
            },
            {
                question: "¿Qué incluye el proceso de incubación?",
                answer:
                    "Doce semanas de acompañamiento intensivo donde el objetivo no es aprender, es construir. Los equipos reciben mentorías semanales, acceso a expertos en tecnología, negocios y VC, y acompañamiento directo para llevar su prototipo del hackatón hasta un MVP listo para el mercado. Salís del programa con un producto real, no con una presentación.",
            },
            {
                question: "¿Los equipos tienen que estar en Barranquilla durante la incubación?",
                answer:
                    "El programa está diseñado para founders del Caribe, pero el modelo de trabajo combina sesiones presenciales con acompañamiento remoto. Los detalles de formato se comunican a los equipos seleccionados.",
            },
        ],
    },
    {
        title: "🏭 Empresas con Retos",
        faqs: [
            {
                question: "¿Cómo puede participar una empresa con un reto?",
                answer:
                    "Las empresas pueden proponer retos reales que los equipos del hackatón intentarán resolver durante el evento. Es una forma directa de conectar con talento tech de la región y explorar soluciones innovadoras. Para participar, llena el formulario de propuesta de reto y te contactamos para coordinar los detalles.",
            },
        ],
    },
    {
        title: "💰 Inversión",
        faqs: [
            {
                question: "¿Pueden los equipos recibir inversión al terminar el programa?",
                answer:
                    "Sí. Los equipos que completen la incubación y presenten en el Demo Day durante Tech Caribe Weekend tendrán acceso a una audiencia de inversionistas que incluye a Caribe Ventures y a fondos de venture capital de toda Latinoamérica que asisten al festival. No es una garantía automática, pero sí la oportunidad más real que existe hoy en la región para un founder caribeño.",
            },
            {
                question: "¿Qué es Caribe Ventures y qué tipo de startups financia?",
                answer:
                    "Caribe Ventures es el primer fondo de inversión pre-seed enfocado en founders del Caribe colombiano que usan IA para transformar industrias tradicionales. Apostamos por builders con tracción temprana, no solo por ideas. Caribe-IA es el pipeline natural hacia el fondo.",
            },
        ],
    },
];
