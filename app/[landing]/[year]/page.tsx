import Edition2024 from '@/app/components/ediciones-anteriores/Edition2024'
import Edition2025 from '@/app/components/ediciones-anteriores/Edition2025';
import Edition2026 from '@/app/components/ediciones-anteriores/Edition2026';
import { Miriam_Libre } from 'next/font/google';
import React from 'react'

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

export default function EditionPerYearPage({ params }: Props) {
	console.log(params)
	return (
		<>
		{LIST_OF_EDITION.find((edition) => edition.landing === params.landing)?.editions[params.year]}
		</>
	)
}
 