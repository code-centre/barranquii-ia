import React from 'react'
import Summary from '../sections/Summary'

export default function LandingPage({ params }: { params: { landing: string } }) {
	return (
		<main className="py-20 lg:py-28 xl:py-32 min-h-screen max-w-6xl mx-auto px-5">
			<Summary landing={params.landing} />
		</main>
	)
}
