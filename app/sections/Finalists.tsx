'use client'
import React, { useState } from 'react'
import Title from '../components/Title';
import Border from '../components/Border';
import Image from 'next/image';

interface Props {
	landing: string;
}

export default function Finalists({ landing }: Props) {
	const [showDescription, setShowDescription] = useState({
		id: 0,
		show: false
	})
	const topSevenFinalistsStyles = 'h-[80px] w-full md:w-1/2 bg-[#d3a2fb] border-[#fbe4a2] border-2 rounded-md flex items-center justify-center text-black relative'

	const topSevenFinalists = [
		{
			id: 4,
			project: 'Edunova',
		},
		{
			id: 5,
			project: 'FlowSync',
		},
		{
			id: 6,
			project: 'Liendra AI',
		},
		{
			id: 7,
			project: 'Circula',
		},
		{
			id: 8,
			project: 'PIA-SS',
		},
		{
			id: 9,
			project: 'Hands 2 Voice',
		},
		{
			id: 10,
			project: 'El viaje del chigüiero',
		}
	]

	return (
		<div>
			<Title landing={landing} title="Finalistas" />
			<div className='grid grid-cols-[3px_1fr] gap-3 lg:gap-10 mt-28'>
				<Border landing={landing} />
				<div>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
						<div
							onMouseEnter={() => setShowDescription({ id: 2, show: true })}
							onMouseLeave={() => setShowDescription({ id: 2, show: false })}
							className='h-[280px] text-gray-800 shadow-xl rounded-md flex relative order-2 lg:order-1 mt-20 lg:mt-0'>
							<Image
								alt='Imagen del ganador del Barranqui-IA edición 2025'
								src='/ganadores/banner-second-place.png'
								width={500}
								height={280}
								className='w-[70%] left-0 right-0  mx-auto object-cover absolute -top-12'
							/>
							<Image
								alt='Imagen del ganador del Barranqui-IA edición 2025'
								src='/ganadores/canvas.jpg'
								width={400}
								height={280}
								className='w-full h-full object-cover'
							/>
							{
								showDescription.id === 2 && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white'> Plataforma que genera presentaciones y podcasts educativos según edad y nivel del usuario.</p>
							}
							<div className='bg-black/70 w-full h-10 absolute top-0 text-center'>
								<p className='text-xl font-mono font-bold text-white'> 2. Canvas</p>
							</div>
						</div>
						<div 
							onMouseEnter={() => setShowDescription({ id: 1, show: true })}
							onMouseLeave={() => setShowDescription({ id: 1, show: false })}
							className='h-[280px] relative text-gray-900 shadow-xl rounded-md lg:-mt-5 mt-20 order-1 lg:order-2'>
							<Image
								alt='Imagen del ganador del Barranqui-IA edición 2025'
								src='/ganadores/banner-first-place.png'
								width={500}
								height={280}
								className='w-[70%] left-0 right-0  mx-auto object-cover absolute -top-12'
							/>
							<Image alt='Imagen del ganador del Barranqui-IA edición 2025' src='/ganadores/alumbra.jpg' className='w-full h-full object-cover' width={400} height={280} />
							{
								showDescription.id === 1 && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white'>Sistema de IA para
									detectar señales de abuso en
									conversaciones digitales.</p>
							}
							<div className='bg-black/70 w-full h-10 absolute top-0 text-center'>
								<p className='text-xl font-mono font-bold text-white'> 1. Alumbra</p>
							</div>
						</div>
						<div
							onMouseEnter={() => setShowDescription({ id: 3, show: true })}
							onMouseLeave={() => setShowDescription({ id: 3, show: false })}
							className='h-[280px] text-black shadow-xl  rounded-md flex relative mt-20 lg:mt-0 order-3'>
							<Image
								alt='Imagen del ganador del Barranqui-IA edición 2025'
								src='/ganadores/banner-third-place.png'
								width={500}
								height={280}
								className='w-[70%] left-0 right-0  mx-auto object-cover absolute -top-12'
							/>
							<Image
								alt='Imagen del ganador del Barranqui-IA edición 2025'
								src='/ganadores/gecko-agent.jpg'
								width={400}
								height={280}
								className='w-full h-full object-cover'
							/>
							{
								showDescription.id === 3 && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white'>IA para
									identificar y rastrear personas/objetos en
									cámaras en tiempo real.</p>
							}
							<div className='bg-black/70 w-full h-10 absolute top-0 text-center'>
								<p className='text-xl font-mono font-bold text-white'> 3. Gecko Agent</p>
							</div>
						</div>
					</div>
					<div className='flex flex-wrap justify-center mt-5 gap-5'>
						<div className='flex flex-col md:flex-row w-full gap-4 justify-center'>
							<div className={topSevenFinalistsStyles}>
								<span className='absolute top-0 left-2 text-xl font-mono font-bold'>4.</span>
								<p className='font-medium'>Edunova</p>
							</div>
							<div className={topSevenFinalistsStyles}>
								<span className='absolute top-0 left-2 text-xl font-mono font-bold'>5.</span>
								<p className='font-medium'>Mirai</p>
							</div>
						</div>
						<div className='flex flex-col md:flex-row w-full gap-4 justify-center'>
							<div className={topSevenFinalistsStyles}>
								<span className='absolute top-0 left-2 text-xl font-mono font-bold'>6.</span>
								<p className='font-medium'>Triasure</p>
							</div>
							<div className={topSevenFinalistsStyles}>
								<span className='absolute top-0 left-2 text-xl font-mono font-bold'>7.</span>
								<p className='font-medium'>Botania</p>
							</div>
						</div>
						<div className='flex flex-col md:flex-row w-full gap-4 justify-center'>
							<div className={topSevenFinalistsStyles}>
								<span className='absolute top-0 left-2 text-xl font-mono font-bold'>8.</span>
							<p className='font-medium'>El viaje del chigüiero</p>
							</div>
							<div className={topSevenFinalistsStyles}>
								<span className='absolute top-0 left-2 text-xl font-mono font-bold'>9.</span>
								<p className='font-medium'>Signus</p>
							</div>
						</div>
						<div className={topSevenFinalistsStyles}>
							<span className='absolute top-0 left-2 text-xl font-mono font-bold'>10.</span>
								<p className='font-medium'>FlowSync</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
