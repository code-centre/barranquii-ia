import Edition2024 from '@/app/components/ediciones-anteriores/Edition2024'
import Edition2025 from '@/app/components/ediciones-anteriores/Edition2025';
import Edition2026 from '@/app/components/ediciones-anteriores/Edition2026';
import { Miriam_Libre } from 'next/font/google';
import React from 'react'
import type { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';

type Props = {
  params: { landing: string; year: string };
};

const LIST_OF_EDITION: {landing: string; editions: { [key: string]: React.ReactNode }}[] = [
	{
		landing: 'barranqui-ia',
		editions: {
			'2024': <Edition2024 />,
			'2025': <Edition2025 params={{landing: 'barranqui-ia'}} />,
			'2026': <Edition2026 params={{landing: 'barranqui-ia'}} />,
		}
	}
]

export function generateStaticParams() {
	return [
		{ landing: 'barranqui-ia', year: '2024' },
		{ landing: 'barranqui-ia', year: '2025' },
		{ landing: 'barranqui-ia', year: '2026' },
	];
}

export function generateMetadata({ params }: Props): Metadata {
	const landingNames: Record<string, string> = {
		'barranqui-ia': 'Barranqui-IA',
		'cartagen-ia': 'Cartagen-IA',
		'samar-ia': 'Samar-IA',
	};
	
	const name = landingNames[params.landing] || 'Caribe-IA';
	const year = params.year;
	
	// Event dates based on year and landing
	const eventDates: Record<string, Record<string, { start: string; end: string }>> = {
		'barranqui-ia': {
			'2026': { start: '2026-05-01', end: '2026-05-03' },
			'2025': { start: '2025-05-01', end: '2025-05-03' },
			'2024': { start: '2024-05-01', end: '2024-05-03' },
		},
	};
	
	const dates = eventDates[params.landing]?.[year] || { start: '', end: '' };
	
	// Imagen de metadata para Barranqui-IA (2024, 2025, 2026)
	const ogImage =
		params.landing === 'barranqui-ia'
			? {
					url: 'https://www.caribe-ia.com/barranqui-ia-og.png',
					width: 960,
					height: 540,
					alt: `${name} ${year} - Hackatón de Inteligencia Artificial desde el Caribe`,
					type: 'image/png' as const,
				}
			: {
					url: 'https://www.caribe-ia.com/portada.png',
					width: 2178,
					height: 1724,
					alt: `${name} ${year}`,
					type: 'image/png' as const,
				};
	
	return {
		title: `${name} ${year} | Hackatón de IA en ${name.includes('Barranqui') ? 'Barranquilla' : name.includes('Cartagen') ? 'Cartagena' : 'Santa Marta'}`,
		description: `${name} ${year}: Hackatón de inteligencia artificial en el Caribe colombiano. ${dates.start ? `Del ${dates.start} al ${dates.end}.` : ''} Participa en el evento de tecnología e IA más importante de la región.`,
		openGraph: {
			title: `${name} ${year}`,
			description: `${name} ${year}: Hackatón de inteligencia artificial en el Caribe colombiano. ${dates.start ? `Del ${dates.start} al ${dates.end}.` : ''}`,
			url: `https://www.caribe-ia.com/${params.landing}/${year}`,
			type: 'website',
			images: [ogImage],
		},
		twitter: {
			card: "summary_large_image",
			title: `${name} ${year}`,
			description: `${name} ${year}: Hackatón de inteligencia artificial en el Caribe colombiano.`,
			images: [ogImage.url],
		},
		alternates: {
			canonical: `/${params.landing}/${year}`,
		},
	};
}

export default function EditionPerYearPage({ params }: Props) {
	const landingNames: Record<string, string> = {
		'barranqui-ia': 'Barranqui-IA',
		'cartagen-ia': 'Cartagen-IA',
		'samar-ia': 'Samar-IA',
	};
	
	const name = landingNames[params.landing] || 'Caribe-IA';
	const year = params.year;
	
	// Event dates and locations
	const eventData: Record<string, Record<string, { start: string; end: string; location: string; address: string }>> = {
		'barranqui-ia': {
			'2026': { 
				start: '2026-05-01T08:00:00-05:00', 
				end: '2026-05-03T18:00:00-05:00',
				location: 'Barranquilla, Atlántico, Colombia',
				address: 'Universidad del Norte, Barranquilla'
			},
			'2025': { 
				start: '2025-05-01T08:00:00-05:00', 
				end: '2025-05-03T18:00:00-05:00',
				location: 'Barranquilla, Atlántico, Colombia',
				address: 'Universidad del Norte, Barranquilla'
			},
			'2024': { 
				start: '2024-05-01T08:00:00-05:00', 
				end: '2024-05-03T18:00:00-05:00',
				location: 'Barranquilla, Atlántico, Colombia',
				address: 'Universidad del Norte, Barranquilla'
			},
		},
	};
	
	const eventInfo = eventData[params.landing]?.[year];
	
	const eventSchema = eventInfo ? {
		"@context": "https://schema.org",
		"@type": "Event",
		name: `${name} ${year}`,
		description: `${name} ${year}: Hackatón de inteligencia artificial en el Caribe colombiano. Prototipado intensivo durante un fin de semana con mentoría técnica y de negocio.`,
		startDate: eventInfo.start,
		endDate: eventInfo.end,
		eventStatus: "https://schema.org/EventScheduled",
		eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
		location: {
			"@type": "Place",
			name: eventInfo.address,
			address: {
				"@type": "PostalAddress",
				addressLocality: eventInfo.location,
				addressCountry: "CO",
			},
		},
		organizer: {
			"@type": "Organization",
			name: "Caribe-IA",
			url: "https://www.caribe-ia.com",
		},
		image: params.landing === 'barranqui-ia' ? "https://www.caribe-ia.com/barranqui-ia-og.png" : "https://www.caribe-ia.com/portada.png",
		offers: {
			"@type": "Offer",
			url: `https://www.caribe-ia.com/${params.landing}/${year}`,
			price: "0",
			priceCurrency: "COP",
			availability: "https://schema.org/InStock",
		},
	} : null;
	
	return (
		<>
			{eventSchema && <JsonLd data={eventSchema} />}
			{LIST_OF_EDITION.find((edition) => edition.landing === params.landing)?.editions[params.year]}
		</>
	)
}
 