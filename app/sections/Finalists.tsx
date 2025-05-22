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
	const topSevenFinalistsStyles = 'h-[80px] w-full md:w-1/2 bg-[#d3a2fb] border-[#fbe4a2] border-2 rounded-md flex items-center justify-center text-black relative cursor-pointer'

	const topSevenFinalists = [
		[
			{
				id: 4,
				project: 'Edunova',
				description: 'Revoluciona la educación en Barranquilla con IA, detectando cómo aprende cada estudiante y creando rutas personalizadas con chatbots.',
			},
			{
				id: 5,
				project: 'Mirai',
				description: 'Solución de visión artificial que, con gafas inteligentes y una app, brinda autonomía, conexión y orientación sonora a personas con discapacidad visual.',
			},
		],
		[
			{
				id: 6,
				project: 'Triasure',
				description: 'Plataforma para coleccionistas que organiza y valora ítems físicos, con red social para conectar personas con intereses y nichos similares.',
			},
			{
				id: 7,
				project: 'Botania',
				description: 'Aplicación que combina arte y tecnología para crear experiencias interactivas con plantas virtuales.',
			},
		],
		[
			{
				id: 8,
				project: 'El viaje del chigüiro',
				description: 'App gamificada de autocuidado que promueve el bienestar emocional a través del cuidado de un personaje virtual.',
			},
			{
				id: 9,
				project: 'Signus',
				description: 'Aplicación que facilita la comunicación mediante traducción de texto a lenguaje de señas.',
			},
		],
		{
			id: 10,
			project: 'FlowSync',
			description: 'Asistente inteligente que centraliza aplicaciones y archivos, permitiendo agendar, resumir, enviar y buscar con comandos simples para mejorar la productividad.',
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
						{
							topSevenFinalists.map((finalist) => {

								if (finalist instanceof Array) {
									return (
										<div className='flex flex-col md:flex-row w-full gap-4 justify-center'>
											{
												finalist.map((finalist) => {
													return (
														<div onMouseEnter={() => setShowDescription({ id: finalist.id, show: true })} onMouseLeave={() => setShowDescription({ id: finalist.id, show: false })} className={topSevenFinalistsStyles}>
															<span className='absolute top-0 left-2 text-xl font-mono font-bold'>{finalist.id}.</span>
															<p className='font-medium'>{finalist.project}</p>
															{
																showDescription.id === finalist.id && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white'>{finalist.description}</p>
															}
														</div>
													)
												})
											}
										</div>
									)
								} else {
									return (
										<div onMouseEnter={() => setShowDescription({ id: finalist.id, show: true })} onMouseLeave={() => setShowDescription({ id: finalist.id, show: false })} className={topSevenFinalistsStyles}>
											<span className='absolute top-0 left-2 text-xl font-mono font-bold'>{finalist.id}.</span>
											<p className='font-medium'>{finalist.project}</p>
											{
												showDescription.id === finalist.id && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white'>{finalist.description}</p>
											}
										</div>
									)
								}

							})
						}
					</div>
					<a href="https://barranqui-ia-2025-25105.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" className=' text-lg text-white block mt-10 w-fit bg-principleViolet hover:bg-principleViolet/80 mx-auto py-2 px-6 rounded-md'>Ver en devpost</a>
				</div>
			</div>
		</div>
	)
}
