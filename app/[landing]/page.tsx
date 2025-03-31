import React from 'react'

export default function LandingPage({ params }: { params: { landing: string } }) {
	return (
		<main className="py-20 md:py-16 lg:py-28 xl:py-32 min-h-screen max-w-6xl mx-auto px-5">
			<p>{params.landing}</p>
		</main>
	)
}
