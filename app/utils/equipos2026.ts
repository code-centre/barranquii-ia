export type LineaTematica =
	| 'fintech'
	| 'salud'
	| 'juventudes'
	| 'sostenibilidad'
	| 'innovacion-abierta';

export type Equipo2026 = {
	name: string;
	desc: string;
	linea: LineaTematica;
	award?: string;
};

export const LINEAS_2026: { id: LineaTematica; labelKey: string }[] = [
	{ id: 'fintech', labelKey: 'accelTeams.lineFintech' },
	{ id: 'salud', labelKey: 'accelTeams.lineHealth' },
	{ id: 'juventudes', labelKey: 'accelTeams.lineYouth' },
	{ id: 'sostenibilidad', labelKey: 'accelTeams.lineSustainability' },
	{ id: 'innovacion-abierta', labelKey: 'accelTeams.lineOpenInnovation' },
];

export const EQUIPOS_2026: Equipo2026[] = [
	// Fintech (24)
	{ name: 'Dockers', desc: 'Servicios financieros para mayores de 50 años', linea: 'fintech', award: 'Ganador Fintech' },
	{ name: 'Scorefy', desc: 'Score crediticio alternativo para no bancarizados', linea: 'fintech' },
	{ name: 'Voz Activa', desc: 'Identidad financiera para vendedores informales por voz', linea: 'fintech' },
	{ name: 'KredIA', desc: 'Originación de crédito por llamada con voz', linea: 'fintech' },
	{ name: 'KAMBIO / NEXO', desc: 'Crédito a PYMEs en 2 minutos, embebido en banca', linea: 'fintech' },
	{ name: 'Nauta (Tracto)', desc: 'Posicionamiento en buscadores y LLMs + compliance', linea: 'fintech' },
	{ name: 'Nivo', desc: 'Democratización del acceso financiero con IA', linea: 'fintech' },
	{ name: 'Finora Labs', desc: 'Convierte datos bancarios en una ruta de decisiones', linea: 'fintech' },
	{ name: 'SIRA', desc: 'Agentes que gestionan cartera: contactan y negocian', linea: 'fintech' },
	{ name: 'Titor', desc: 'Orquestación de agentes para banca inteligente', linea: 'fintech' },
	{ name: 'GEO Copilot Serfinanza', desc: 'Copiloto de IA para banca', linea: 'fintech' },
	{ name: 'Nexo', desc: 'IA financiera que asiste a asesores 24/7', linea: 'fintech' },
	{ name: 'Credifit AI', desc: 'Clasificador para elegir la mejor opción de crédito', linea: 'fintech' },
	{ name: 'Monter-ia', desc: 'Perfil financiero que crece con el usuario', linea: 'fintech' },
	{ name: 'FinSolution (FinConfía)', desc: 'Asesor financiero sin jerga bancaria', linea: 'fintech' },
	{ name: 'Finnbot_IA', desc: 'Asesor financiero conversacional', linea: 'fintech' },
	{ name: 'CostaIA', desc: 'El guía tras cada asesor financiero', linea: 'fintech' },
	{ name: 'HackaTeam', desc: 'Solución fintech con IA', linea: 'fintech' },
	{ name: 'FinAssist', desc: 'Asistente financiero', linea: 'fintech' },
	{ name: 'Sierra Nevada', desc: 'Fintech con IA', linea: 'fintech' },
	{ name: 'Team Seven', desc: 'Asesor financiero con IA', linea: 'fintech' },
	{ name: 'BOCA', desc: 'Action hub para el sector financiero', linea: 'fintech' },
	{ name: 'Team Fidia', desc: 'Crédito financiero para microempresas', linea: 'fintech' },
	{ name: 'Luup', desc: 'Plataforma fintech', linea: 'fintech' },
	// Salud (18)
	{ name: 'Medora', desc: 'Analiza historias clínicas y detecta riesgos críticos antes de prescribir', linea: 'salud', award: '1er lugar' },
	{ name: 'Signara', desc: 'Traducción bidireccional de Lengua de Señas Colombiana, en tiempo real', linea: 'salud', award: '3er lugar' },
	{ name: 'Sigmoides', desc: 'Automatiza la gestión de incapacidades médicas', linea: 'salud', award: 'Ganador Salud' },
	{ name: 'Mincapp', desc: 'Estructura y valida incapacidades médicas con IA', linea: 'salud' },
	{ name: 'Cirillait', desc: 'Convierte tiempo administrativo en tiempo clínico', linea: 'salud' },
	{ name: 'BAQ-TEAM (Medi-bot)', desc: 'Atención médica primaria por voz', linea: 'salud' },
	{ name: 'MediAgent', desc: 'Agente de salud con voz', linea: 'salud' },
	{ name: 'MONWE', desc: 'Plataforma de salud con IA', linea: 'salud' },
	{ name: 'Fryends', desc: 'Atención preventiva para población gestante', linea: 'salud' },
	{ name: 'Dore', desc: 'Asistente para enfermedades crónicas', linea: 'salud' },
	{ name: 'Aurora', desc: 'Cuidado de adultos mayores con IA', linea: 'salud' },
	{ name: 'Kinestia', desc: 'Rehabilitación neuromotora inteligente', linea: 'salud' },
	{ name: 'Signa Prosthetics', desc: 'Salud y prótesis con IA', linea: 'salud' },
	{ name: 'Fiebre_amarIA', desc: 'Clasificación temprana de fiebre amarilla', linea: 'salud' },
	{ name: 'Flox Team', desc: 'Escanea tu receta y ahorra dinero', linea: 'salud' },
	{ name: 'Papus', desc: 'Gestión de incapacidades con IA', linea: 'salud' },
	{ name: 'XRAI', desc: 'IA que acelera diagnósticos', linea: 'salud' },
	{ name: 'USM', desc: 'Solución de salud con IA', linea: 'salud' },
	// Juventudes (10)
	{ name: 'Salto AI', desc: 'Primer empleo formal para jóvenes', linea: 'juventudes', award: 'Ganador Juventudes' },
	{ name: 'Punto de Arranque', desc: 'El GPS del emprendedor', linea: 'juventudes' },
	{ name: 'Neos', desc: 'Coach de carrera con IA', linea: 'juventudes' },
	{ name: 'teamD2 (prompt2quant)', desc: 'Ingeniería cuantitativa descentralizada', linea: 'juventudes' },
	{ name: 'CUATRO MAS UNO (BID)', desc: 'Acompaña a jóvenes emprendedores', linea: 'juventudes' },
	{ name: 'Oesix Tech', desc: 'Pequeños proyectos en experiencia profesional real', linea: 'juventudes' },
	{ name: 'Hyre', desc: 'Solución para juventudes', linea: 'juventudes' },
	{ name: 'Synervia', desc: 'Desarrollo e innovación', linea: 'juventudes' },
	{ name: 'Andes-Caribe Team', desc: 'Juventudes con IA', linea: 'juventudes' },
	{ name: 'Párchate', desc: 'Plataforma para juventudes', linea: 'juventudes' },
	// Sostenibilidad (9)
	{ name: 'mixnoro', desc: 'IA para reducir costo y CO₂ del concreto', linea: 'sostenibilidad', award: 'Ganador Sostenibilidad' },
	{ name: 'EcoHackers', desc: 'Clasifica residuos por foto + IoT', linea: 'sostenibilidad', award: '2do lugar' },
	{ name: 'The Fire Boys', desc: 'Mantenimiento predictivo de plantas solares', linea: 'sostenibilidad' },
	{ name: 'Sentinela', desc: 'Detección temprana de riesgos y desastres', linea: 'sostenibilidad' },
	{ name: 'Vialink', desc: 'El futuro de la movilidad', linea: 'sostenibilidad' },
	{ name: 'OSEL code', desc: 'Productividad y bienestar laboral', linea: 'sostenibilidad' },
	{ name: 'Mosqueteros Dev', desc: 'Solución de sostenibilidad', linea: 'sostenibilidad' },
	{ name: 'bit&byte', desc: 'Sostenibilidad con visión por computador', linea: 'sostenibilidad' },
	{ name: 'Inteligencia Artesanal', desc: 'IA para procesos sostenibles', linea: 'sostenibilidad' },
	// Innovación abierta (9)
	{ name: 'Argus', desc: 'Agentes que ayudan a encontrar personas desaparecidas', linea: 'innovacion-abierta' },
	{ name: 'Nexum', desc: 'Plataforma de construcción con IA (PMI + ágil)', linea: 'innovacion-abierta' },
	{ name: 'Habitta', desc: 'SaaS de gestión operativa y administrativa', linea: 'innovacion-abierta' },
	{ name: 'Scared of Work (Kairós)', desc: 'IA que conecta con lo que sientes', linea: 'innovacion-abierta' },
	{ name: 'Bindeg', desc: 'Roomies: vivienda para universitarios foráneos', linea: 'innovacion-abierta' },
	{ name: 'AE-Commerce', desc: 'E-commerce con IA', linea: 'innovacion-abierta' },
	{ name: 'proxdeep', desc: 'Equipo veterano de las tres ediciones', linea: 'innovacion-abierta' },
	{ name: 'Axylabs', desc: 'Proyecto con LLM', linea: 'innovacion-abierta' },
	{ name: 'Misael Diaz Maldonado', desc: 'Desarrollo individual', linea: 'innovacion-abierta' },
];
