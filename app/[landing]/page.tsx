import React from 'react'

export default function LandingPage({ params }: { params: { landing: string } }) {
  return (
    <main className="gap-32 xl:gap-44 flex flex-col py-20 min-h-screen overflow-hidden">
     <p className='text-2xl text-white'>{params.landing}</p>
    </main>
  )
}
