import Edition2024 from '@/app/components/ediciones-anteriores/2024'
import React from 'react'

export default function EditionPerYearPage({ params }: { params: { year: string } }) {
	return (
		<Edition2024 />
	)
}
 