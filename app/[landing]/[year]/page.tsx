import Edition2024 from '@/app/components/ediciones-anteriores/Edition2024'
import Edition2025 from '@/app/components/ediciones-anteriores/Edition2025';
import Edition2026 from '@/app/components/ediciones-anteriores/Edition2026';
import React from 'react'
import type { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import { getLocale } from '@/app/i18n/getLocale';
import { getTranslations, createT } from '@/app/i18n/getTranslation';
import type { Locale } from '@/app/i18n/config';

type Props = {
  params: Promise<{ landing: string; year: string }>;
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

const cityByLanding: Record<string, string> = {
	'barranqui-ia': 'Barranquilla',
	'cartagen-ia': 'Cartagena',
	'samar-ia': 'Santa Marta',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { landing, year } = await params;
	const locale = (await getLocale()) as Locale;
	const translations = await getTranslations(locale);
	const t = createT(translations);

	const landingNames: Record<string, string> = {
		'barranqui-ia': 'Barranqui-IA',
		'cartagen-ia': 'Cartagen-IA',
		'samar-ia': 'Samar-IA',
	};
	
	const name = landingNames[landing] || 'Caribe-IA';
	const city = cityByLanding[landing] || 'Caribe';
	
	const eventDates: Record<string, Record<string, { start: string; end: string }>> = {
		'barranqui-ia': {
			'2026': { start: '2026-05-01', end: '2026-05-03' },
			'2025': { start: '2025-05-01', end: '2025-05-03' },
			'2024': { start: '2024-05-01', end: '2024-05-03' },
		},
	};
	
	const dates = eventDates[landing]?.[year] || { start: '', end: '' };
	const datesStr = dates.start ? `Del ${dates.start} al ${dates.end}. ` : '';
	
	const ogAlt = t('metadata.eventOgAlt', { name, year });
	
	const ogImage =
		landing === 'barranqui-ia'
			? {
					url: 'https://www.caribe-ia.com/barranqui-ia-og.png',
					width: 960,
					height: 540,
					alt: ogAlt,
					type: 'image/png' as const,
				}
			: {
					url: 'https://www.caribe-ia.com/portada.png',
					width: 2178,
					height: 1724,
					alt: `${name} ${year}`,
					type: 'image/png' as const,
				};
	
	const title = t('metadata.eventTitle', { name, year, city });
	const description = t('metadata.eventDescription', { name, year, dates: datesStr });
	
	return {
		title,
		description,
		openGraph: {
			title: `${name} ${year}`,
			description,
			url: `https://www.caribe-ia.com/${landing}/${year}`,
			type: 'website',
			images: [ogImage],
		},
		twitter: {
			card: "summary_large_image",
			title: `${name} ${year}`,
			description,
			images: [ogImage.url],
		},
		alternates: {
			canonical: `/${landing}/${year}`,
		},
	};
}

export default async function EditionPerYearPage({ params }: Props) {
	const { landing, year } = await params;
	const landingNames: Record<string, string> = {
		'barranqui-ia': 'Barranqui-IA',
		'cartagen-ia': 'Cartagen-IA',
		'samar-ia': 'Samar-IA',
	};
	
	const name = landingNames[landing] || 'Caribe-IA';
	
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
	
	const eventInfo = eventData[landing]?.[year];
	
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
		image: landing === 'barranqui-ia' ? "https://www.caribe-ia.com/barranqui-ia-og.png" : "https://www.caribe-ia.com/portada.png",
		offers: {
			"@type": "Offer",
			url: `https://www.caribe-ia.com/${landing}/${year}`,
			price: "0",
			priceCurrency: "COP",
			availability: "https://schema.org/InStock",
		},
	} : null;
	
	return (
		<>
			{eventSchema && <JsonLd data={eventSchema} />}
			{LIST_OF_EDITION.find((edition) => edition.landing === landing)?.editions[year]}
		</>
	)
}
 