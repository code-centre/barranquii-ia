import React from 'react'

export default function LandingPage({ params }: { params: { landing: string } }) {
  return (
    <main className="gap-20 flex flex-col py-20 min-h-screen">
     <p className='text-2xl text-white'>{params.landing}</p>
    </main>
  )
}
