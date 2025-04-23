export const WORKSHOPS: Record<string, { title: string; name: string; role: string, selected: boolean, confirmed?: boolean, description?: string, image?: string, type?: string, time?: string, day?: string }[]> = {
  'barranqui-ia': [
    {
      title: '2:00pm - Tips para programar en la época de la Inteligencia artificial',
      name: 'Anuar Harb',
      role: 'CoFounder y Director de Fundación Código Abierto y Fullstack Developer',
      selected: true,
      confirmed: true,
      description: 'En este taller descubrirás cómo transformar tu forma de trabajar aprovechando las herramientas de IA para escribir mejor código, automatizar tareas repetitivas, y potenciar tu creatividad como desarrollador. No se trata de competir con la IA, sino de convertirla en tu mejor aliada.',
      image: '/mentores/anuar.webp',
      time: 'Sala A - 2:00pm',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '2:45pm - ShadAI Framework: Crea agentes con tecnología de la costa',
      name: 'Angie Zuñiga',
      role: 'CEO ShadAI - AI Engineer Founder Code and Cognition',
      selected: false,
      confirmed: true,
      description: 'En esta charla aprenderás cómo aprovechar el poder del ShadAI Framework para desarrollar agentes. Si estás participando en el reto de "Agentes x ShadAI", esta charla te dará las herramientas clave para llevar tu idea al siguiente nivel... y competir por ese premio extra de 1 millón de pesos 💸.',
      image: '/mentores/angie.webp',
      time: 'Por confirmar',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '3:30pm - Fullstack IA Development Multi Cloud y Gemini',
      name: 'Luis Reyes',
      role: 'CTO en Evolutec y lider en Movimiento Costa Digital',
      selected: false,
      confirmed: true,
      description: 'En esta charla aprenderas a construir aplicaciones fullstack potenciadas por inteligencia artificial usando AWS Amplify y Gemini de Google. Aprenderas a integrar servicios multi-cloud para crear soluciones inteligentes, escalables y modernas.',
      image: '/mentores/luis-reyes.webp',
      time: 'Sala A - 3:30pm',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '4:15pm - Integra IA con Python',
      name: 'Andres Duque',
      role: 'Pendiente',
      selected: false,
      confirmed: false,
      description: 'Pendiente',
      image: '/mystery-mentor.png',
      time: 'Sala A - 4:15pm',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '4:15pm - Agentes IA Potenciados por LLM: Diseñando Soluciones Autónomas e Inteligentes',
      name: 'Carlos Alarcón',
      role: 'CTO en Quix y Google Developer Expert',
      selected: false,
      confirmed: true,
      description: 'Descubre cómo los agentes de IA, potenciados por LLMs y arquitecturas como ReAct y Chain-of-Thought, están revolucionando el desarrollo de aplicaciones. Aprende a integrar razonamiento, herramientas externas y autonomía con frameworks como LangChain y Vertex AI para construir agentes capaces de resolver problemas de forma eficiente y en tiempo real.',
      image: '/mentores/carlos-alarcon.webp',
      time: 'Sala A - 4:15pm',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '5:00pm - Despliega tu Agente de IA: Python + Docker en acción',
      name: 'Andrés Duque',
      role: 'Confirmar',
      confirmed: true,
      selected: false,
      description: 'Confirmar',
      image: '/mystery-mentor.png',
      time: 'Sala A - 5:00pm',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '5:45pm - Conecta tu Agente AI con el futuro usando MCP',
      name: 'Luis Charris',
      role: 'Founder de Raudoc & CooWeb Cofounder & CTO en Kontroll AI Product Engineer',
      confirmed: true,
      selected: false,
      description: 'En esta charla revelaremos cómo cualquier proyecto, idea o agente de inteligencia artificial puede conectarse a flujos reales de trabajo a través del Model Context Protocol (MCP) y la plataforma Raudoc, que convierte documentos en acciones automatizables. Además, lanzaremos un reto especial para los participantes del hackatón: construir el mejor Agente AI conectado a Raudoc. El equipo ganador recibirá un premio especial de integración, visibilidad en el ecosistema de Raudoc y mentoría exclusiva para seguir escalando su agente al marketplace.',
      image: '/mentores/luis-charris.webp',
      time: 'Sala A - 5:45pm',
      day: 'Sábado 3 de Mayo'
    },

    // No-Code Workshops

    {
      title: '2:00pm - Valida tu idea rápido con este funnel práctico',
      name: 'Viviana del Pilar',
      role: 'Fundadora de Evolución Emprendedora',
      selected: true,
      confirmed: true,
      description: 'En esta charla aprenderás cómo validar tu idea de negocio o proyecto tecnológico en cuestión de horas, no semanas. Usando un funnel simple y accionable, te mostraré cómo atraer interés real, generar confianza y obtener retroalimentación de usuarios (o posibles clientes) sin necesidad de tener el producto terminado. Ideal para equipos en hackatones que quieren validar rápido, enfocar su desarrollo y comunicar su propuesta con claridad.',
      image: '/mentores/viviana-lopez.webp',
      type: 'no-code',
      time: 'Por confirmar',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '2:45pm - Cómo detonar la creatividad en la era de la IA',
      name: 'María Patricia Dávila',
      role: 'Directora de Dávila, agencia de publicidad',
      selected: false,
      confirmed: true,
      description: 'En esta charla descubrirás cómo la inteligencia artificial no reemplaza tu chispa creativa, sino que la enciende con nuevas posibilidades. Exploraremos herramientas, procesos y mentalidades que te ayudarán a romper bloqueos, generar ideas frescas y colaborar con la IA como una extensión de tu imaginación. Es hora de dejar de ver la IA como competencia y empezar a verla como musa.',
      image: '/mentores/maria-davila.webp',
      type: 'no-code',
      time: 'Por confirmar',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '3:30pm - De la idea al negocio: en minutos',
      name: 'Andres Salcedo',
      role: 'Founder of Edtools UX/UI Designer, frontend Dev',
      selected: false,
      confirmed: true,
      description: 'Confirmar',
      image: '/mentores/andres-salcedo.webp',
      type: 'no-code',
      time: 'Por confirmar',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '4:15pm - La importancia del análisis de datos para las empresas',
      name: 'Gian Castro',
      role: 'Ingeniero de Datos y líder en Movimiento Costa Digital',
      selected: false,
      confirmed: true,
      description: 'Los datos son el nuevo motor de las empresas. En esta charla descubrirás cómo aprovecharlos para optimizar procesos, identificar oportunidades y tomar decisiones más inteligentes. Ideal para quienes quieren resolver retos reales con soluciones basadas en datos.',
      image: '/mentores/gian-castro.webp',
      type: 'no-code',
      time: 'Sala B - 5:00pm',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '5:00pm - Duplica tus ventas con IA',
      name: 'Mauro Acevedo',
      role: 'Ingeniero de Datos y líder en Movimiento Costa Digital',
      selected: false,
      confirmed: true,
      description: 'Confirmar',
      image: '/mentores/mauro.webp',
      type: 'no-code',
      time: 'Sala B - 5:00pm',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '5:30pm - Cómo levantar capital para tu startup',
      name: 'Jorge Nieto',
      role: 'Emprededor Serial Founder & CEO de Expedit Capital y de Elevat-Xl',
      selected: false,
      confirmed: true,
      description: '¿Tienes una gran idea pero te falta el impulso financiero para llevarla al siguiente nivel? En esta charla aprenderás estrategias clave para conseguir inversión, desde cómo preparar tu pitch hasta cómo conectar con los inversionistas adecuados. Exploraremos etapas de financiamiento, tipos de capital, errores comunes y cómo construir una narrativa que enamore a quienes pueden apostarle a tu visión. Porque levantar capital no es solo cuestión de dinero, sino de confianza, claridad y convicción.',
      image: '/mentores/jorge-nieto.webp',
      type: 'no-code',
      time: 'Por confirmar',
      day: 'Sábado 3 de Mayo'
    },
    {
      title: '10:30am - Del código al corazón El arte de contar lo que programaste para que conecte y convenza.',
      name: 'Diego Garcia',
      role: 'Ingeniero de Sistemas, Especialista en Gerenci Jefe Gestión Inmobiliaria en Olimpica S.A.',
      selected: false,
      confirmed: true,
      description: 'Confirmar',
      image: '/mentores/diego.webp',
      type: 'no-code',
      time: 'Por confirmar',
      day: 'Domingo 4 de Mayo'
    },
  ],
}

export let THEME_WORKSHOPS: Record<string, { selected: { background: string; border: string }; unselected: string; noCode: { background: string; border: string; unselected: string } }> = {
  // '': '#a2fbf7',
  'barranqui-ia': {
    'selected': {
      background: '#d3a2fb',
      border: '#fbe4a2'
    },
    'unselected': '#7a5b91',
    'noCode': {
      background: '#a2fbf7',
      border: '#fb7f56',
      unselected: '#588390'
    }
  },
  'samar-ia': {
    'selected': {
      background: '#fbd1a2',
      border: '#e54437'
    },
    'unselected': '#887260',
    'noCode': {
      background: '#a2fbf7',
      border: '#fbe4a2',
      unselected: '#588390'
    }
  },
  'cartagen-ia': {
    'selected': {
      background: '#a2fbf7',
      border: '#fbe4a2'
    },
    'unselected': '#588390',
    'noCode': {
      background: '#d3a2fb',
      border: '#fbe4a2',
      unselected: '#7a5b91'
    }
  }
}
