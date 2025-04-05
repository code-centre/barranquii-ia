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
        title: "🚀 Hackatones Caribe-IA",
        faqs: [
            {
                question: "¿Quiénes pueden participar en los hackatones?",
                answer:
                    "Estudiantes, desarrolladores, diseñadores, emprendedores, creativos o cualquier persona interesada en construir soluciones con tecnología e inteligencia artificial. Puedes venir solo/a o en equipo.",
            },
            {
                question: "¿Debo tener una idea antes de llegar?",
                answer:
                    "No. Puedes llegar sin idea, sin equipo, o con una idea que quieras explorar. Durante el evento habrá espacios para formar equipos, descubrir retos y construir desde cero.",
            },
            {
                question: "¿Qué pasa si ya tengo una idea o un reto definido?",
                answer:
                    "¡También puedes participar! Solo recuerda que todo lo que se presente debe construirse desde cero durante el hackatón, sin traer soluciones previamente desarrolladas.",
            },
            {
                question:
                    "¿Cómo se aseguran de que la competencia sea justa entre los que llegan con idea y los que no?",
                answer:
                    "Nuestro equipo de mentores y jurados evaluará el proceso, el esfuerzo y el avance técnico en función del punto de partida de cada equipo. No premiamos solo el resultado, sino el camino recorrido durante el evento.",
            },
            {
                question: "¿Puedo venir sin equipo?",
                answer:
                    "¡Sí! Tendremos dinámicas para formar equipos al inicio del hackatón. Si vienes solo/a, es una gran oportunidad para conectar con otras personas con intereses afines.",
            },
            {
                question: "¿Qué tipo de premios se entregan?",
                answer:
                    "Habrá premios por creatividad, impacto, ejecución técnica, colaboración y otras categorías especiales. Todos los equipos tienen oportunidades de ser reconocidos, sin importar su nivel previo de experiencia.",
            },
            {
                question: "¿Dónde se realizan los hackatones?",
                answer:
                    "En distintas ciudades del Caribe colombiano, como Barranquilla, Cartagena y Santa Marta. Puedes revisar las fechas y sedes actualizadas en nuestras redes o sitio web.",
            },
            {
                question: "¿Necesito saber de inteligencia artificial para participar?",
                answer:
                    "No es un requisito, pero sí una ventaja. Si no tienes experiencia, podrás aprender durante el evento gracias a los talleres introductorios y el acompañamiento de mentores.",
            },
            {
                question: "¿Habrá mentores?",
                answer:
                    "Sí. Contaremos con un equipo de expertos que te guiarán tanto en lo técnico como en estrategia, diseño, pitch y validación de tu idea.",
            },
        ],
    },
    {
        title: "🌱 Programa de Incubación",
        faqs: [
            {
                question: "¿Qué incluye el programa de incubación?",
                answer:
                    "Durante 12 semanas recibirás acompañamiento estratégico y profundización técnica. Tendrás mentoría, talleres, retos semanales, espacios de co-creación y preparación para levantar inversión.",
            },
            {
                question: "¿En qué fechas se realiza el programa?",
                answer: "De septiembre a noviembre de 2025.",
            },
            {
                question:
                    "¿El enfoque es solo en negocio o también en desarrollo tecnológico?",
                answer:
                    "Ambos. Nuestro enfoque técnico es clave: trabajamos contigo para mejorar tu arquitectura de software, experiencia de usuario, modelo de IA y escalabilidad, al tiempo que fortalecemos el modelo de negocio.",
            },
            {
                question: "¿Tiene algún costo participar en la incubadora?",
                answer:
                    "No. Caribe-IA es un programa sin costo para los equipos seleccionados, gracias al apoyo de nuestros aliados y patrocinadores.",
            },
            {
                question: "¿Puedo aplicar si no participé en los hackatones?",
                answer:
                    "Generalmente se priorizan proyectos surgidos en los hackatones, pero podríamos abrir convocatorias externas en casos excepcionales. ¡Mantente atento!",
            },
        ],
    },
    {
        title: "💡 Demo Day & Crowdfunding",
        faqs: [
            {
                question: "¿Qué es el Demo Day?",
                answer:
                    "Es el evento final del programa de incubación, donde los equipos presentan públicamente sus startups frente a una audiencia de comunidad, aliados e inversionistas.",
            },
            {
                question: "¿Qué es el crowdfunding y cómo funciona?",
                answer:
                    "Es una forma de inversión colectiva donde cualquier persona puede apoyar económicamente un proyecto. En Caribe-IA, usamos este mecanismo para que friends & family, comunidad local e inversionistas ángeles puedan aportar desde montos pequeños hasta grandes inversiones.",
            },
            {
                question: "¿Cómo se asegura la transparencia del proceso de inversión?",
                answer:
                    "Trabajamos con plataformas aliadas de crowdfunding autorizadas que garantizan trazabilidad, seguridad y transparencia en el proceso.",
            },
            {
                question: "¿Qué beneficios reciben los inversionistas?",
                answer:
                    "Los inversionistas podrán participar en la etapa temprana de una startup, con posibilidad de retorno según el modelo propuesto por cada equipo (revenue share, equity, recompensas, etc.).",
            },
        ],
    },
];
