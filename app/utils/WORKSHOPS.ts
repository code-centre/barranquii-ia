export const WORKSHOPS: Record<string, { title: string; name: string; role: string, selected: boolean, confirmed?: boolean, description?: string, image?: string, type?: string, time?: string }[]> = {
  'barranqui-ia': [
    {
      title: '2:00pm - Construye tu MVP con las bases',
      name: 'Argel Bejarano',
      role: 'Google Developer Expert en IA',
      selected: true,
      confirmed: true,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 2:00pm'
    },
    {
      title: '2:45pm - Potencia tu código con IA',
      name: 'Anuar Harb',
      role: 'Co-founder, director en Fundación Código Abierto y lider en Movimiento Costa Digital',
      selected: false,
      description: 'Descubre cómo utilizar la IA para mejorar tu productividad como desarrollador y potenciar tu código.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 2:45pm'
    },
    {
      title: '2:00pm - Shad-AI',
      name: 'Angie Zuñiga',
      role: 'Google Developer Expert en IA',
      selected: false,
      confirmed: true,
      description: 'Explora las posibilidades de la IA generativa para crear experiencias visuales impactantes.',
      image: '/mystery-mentor.png',
      time: 'Por confirmar'
    },
    {
      title: '3:30pm - Fullstack IA Development Multi Cloud y Gemini',
      name: 'Luis Reyes',
      role: 'CTO en Evolutec y lider en Movimiento Costa Digital',
      selected: false,
      confirmed: true,
      description: 'Aprende a construir aplicaciones fullstack potenciadas por inteligencia artificial usando AWS Amplify y Gemini de Google. Aprende a integrar servicios multi-cloud para crear soluciones inteligentes, escalables y modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 3:30pm'
    },
    {
      title: '4:15pm - Integra IA con Python',
      name: 'Andres Duque',
      role: 'Pendiente',
      selected: false,
      confirmed: true,
      description: 'Pendiente',
      image: '/mystery-mentor.png',
      time: 'Sala A - 4:15pm'
    },
    {
      title: '5:00pm - Agentes IA Potenciados por LLM: Diseñando Soluciones Autónomas e Inteligentes',
      name: 'Carlos Alarcón',
      role: 'Google Developer Expert en IA',
      selected: false,
      confirmed: true,
      description: 'Descubre cómo crear agentes autónomos utilizando modelos de lenguaje de gran escala.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 5:00pm'
    },
    {
      title: '5:45pm - Firebase AI con Flutter: cómo hacer una app en Flutter que SE traduzca automáticamente',
      name: 'Brian Castillo',
      role: 'Google Developer Expert en IA',
      confirmed: true,
      selected: false,
      description: 'Aprende a integrar Firebase AI con Flutter para crear aplicaciones con traducción automática.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 5:45pm'
    },
    {
      title: '2:00pm - Construye tu MVP con las bases',
      name: 'Argel Bejarano',
      role: 'Google Developer Expert en IA',
      selected: true,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Sala B - 2:00pm'
    },
    {
      title: '2:45pm - Potencia tu código con IA',
      name: 'Anuar Harb',
      role: 'Co-founder y director en Fundación Código Abierto',
      selected: false,
      description: 'Descubre cómo utilizar la IA para mejorar tu productividad como desarrollador y potenciar tu código.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Sala B - 2:45pm'
    },
    {
      title: '3:30pm - Shad-AI',
      name: 'Angie Zuñiga',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Explora las posibilidades de la IA generativa para crear experiencias visuales impactantes.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Sala B - 3:30pm'
    },
    {
      title: '4:15pm - Fullstack IA Development Multi Cloud y Gemini',
      name: 'Luis Reyes',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Aprende a construir aplicaciones fullstack potenciadas por inteligencia artificial usando AWS Amplify y Gemini de Google. Aprende a integrar servicios multi-cloud para crear soluciones inteligentes, escalables y modernas.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Sala B - 4:15pm'
    },
    {
      title: '5:00pm - Agentes IA Potenciados por LLM: Diseñando Soluciones Autónomas e Inteligentes',
      name: 'Carlos Alarcón',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Descubre cómo crear agentes autónomos utilizando modelos de lenguaje de gran escala.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Sala B - 5:00pm'
    },
    {
      title: '2:00pm - Valida tu idea rápido con este funnel práctico',
      name: 'Viviana del Pilar',
      role: 'Desarrolladora Web y emprendedora',
      selected: true,
      confirmed: true,
      description: 'En esta charla aprenderás cómo validar tu idea de negocio o proyecto tecnológico en cuestión de horas, no semanas. Usando un funnel simple y accionable, te mostraré cómo atraer interés real, generar confianza y obtener retroalimentación de usuarios (o posibles clientes) sin necesidad de tener el producto terminado. Ideal para equipos en hackatones que quieren validar rápido, enfocar su desarrollo y comunicar su propuesta con claridad.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Por confirmar'
    },
    {
      title: '2:45pm - Como vender (y hacer) productos que la gente quiera comprar',
      name: 'Daniel Cardona',
      role: 'Marketing e innovación de negocios',
      selected: false,
      confirmed: true,
      description: 'Como utilizar herramientas de ai + storytelling + herramientas de mkt para crear productos que a las personas se sientas estupidas diciendo que no. Aprenderas en menos de 1 hora como construir agentes para tener una base solidad de marketing de ofertas y narrativa',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Por confirmar'
    },
    {
      title: '3:30pm - Powerskills para equipos de trabajo',
      name: 'Diego Garcia',
      role: 'ingeniero de sistemas y especialista en gerencia de proyectos',
      selected: false,
      confirmed: true,
      description: 'Abordar negociación, escucha activa, paso a paso para asignar roles y tareas en el equipo de trabajo, presentación del proyecto final.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Por confirmar'
    },
    {
      title: '4:15pm - Cómo convertir la inteligencia artificial en un modelo de negocio exitoso',
      name: 'Elton Gomez',
      role: 'Fundador y CEO de Fontumi iAgents',
      selected: false,
      confirmed: true,
      description: '¿Por qué hablar de IA ahora? La IA ya no es el futuro, es el presente. Hoy no gana quien solo desarrolla tecnología, sino quien la convierte en valor real para las personas y empresas. Las empresas que dominan IA hoy (OpenAI, Anthropic, etc.) no solo tienen tecnología, tienen modelos de negocio sólidos.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Por confirmar'
    },
    {
      title: '5:00pm - El poder de los datos para una empresa',
      name: 'Gian Castro',
      role: 'Ingeniero de Datos y líder en Movimiento Costa Digital',
      selected: false,
      confirmed: true,
      description: 'Los datos son el nuevo motor de las empresas. En esta charla descubrirás cómo aprovecharlos para optimizar procesos, identificar oportunidades y tomar decisiones más inteligentes. Ideal para quienes quieren resolver retos reales con soluciones basadas en datos.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Sala B - 5:00pm'
    },
    {
      title: '5:45pm - Cómo levantar capital para tu startup',
      name: 'Jorge Nieto',
      role: 'Founder & CEO de Expedit Capital y Elevat-X',
      selected: false,
      confirmed: true,
      description: 'Cómo buscar de forma activa y pasiva capital para tu startup. Cómo hacer un pitch efectivo y qué buscan los inversionistas.',
      image: '/mystery-mentor.png',
      type: 'no-code',
      time: 'Por confirmar'
    },
  ],

  'samar-ia': [
    {
      title: '2:30pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: true,
      confirmed: true,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 2:30pm'
    },
    {
      title: '3:00pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 3:00pm'
    },
    {
      title: '3:30pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 3:30pm'
    },
    {
      title: '4:00pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 4:00pm'
    },
    {
      title: '4:30pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 4:30pm'
    }
  ],

  'cartagen-ia': [
    {
      title: '2:30pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: true,
      confirmed: true,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 2:30pm'
    },
    {
      title: '3:00pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 3:00pm'
    },
    {
      title: '3:30pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 3:30pm'
    },
    {
      title: '4:00pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 4:00pm'
    },
    {
      title: '4:30pm - Construye tu MVP con las bases',
      name: 'David Aragón',
      role: 'Google Developer Expert en IA',
      selected: false,
      description: 'Aprende a construir un producto mínimo viable utilizando las herramientas de IA más modernas.',
      image: '/mystery-mentor.png',
      time: 'Sala A - 4:30pm'
    }
  ]
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
