'use client'
import React, { useState } from 'react'
import Title from '../components/Title';
import Border from '../components/Border';
import Image from 'next/image';
import Link from 'next/link';

// Componente para el ícono de reproducción
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

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
				videoUrl: 'https://www.youtube.com/watch?v=BQOpkC1-_Zs',
			},
			{
				id: 5,
				project: 'Mirai',
				description: 'Solución de visión artificial que, con gafas inteligentes y una app, brinda autonomía, conexión y orientación sonora a personas con discapacidad visual.',
				videoUrl: 'https://www.youtube.com/watch?v=Urzr0xhaT7A',
			},
		],
		[
			{
				id: 6,
				project: 'Triasure',
				description: 'Plataforma para coleccionistas que organiza y valora ítems físicos, con red social para conectar personas con intereses y nichos similares.',
				videoUrl: 'https://www.youtube.com/watch?v=mZCjDB37wh0',
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
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pb-16'>
						<div className='flex flex-col relative'>
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
								<div className='bg-black/70 w-full h-10 absolute top-0 text-center'>
									<p className='text-xl font-mono font-bold text-white'> 2. Canvas</p>
								</div>
								<Image
									alt='Imagen del ganador del Barranqui-IA edición 2025'
									src='/ganadores/canvas.jpg'
									width={400}
									height={280}
									className='w-full h-full object-cover'
								/>
								{
									showDescription.id === 2 && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white animate-fade-in rounded-md'> Plataforma que genera presentaciones y podcasts educativos según edad y nivel del usuario.</p>
								}
								<Link href='https://www.youtube.com/watch?v=LKFi-vJKTEo' className='absolute -bottom-12 mx-auto w-fit right-0 left-0 bg-white text-black px-4 py-2 rounded-md flex justify-center items-center hover:bg-principleViolet hover:text-white transition-all duration-300 shadow-md font-medium'>
									<PlayIcon />
									<span>
										Ver pitch
									</span>
								</Link>
							</div>
						</div>
						<div>
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
									showDescription.id === 1 && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white animate-fade-in rounded-md'>Sistema de IA para
										detectar señales de abuso en
										conversaciones digitales.</p>
								}
								<div className='bg-black/70 w-full h-10 absolute top-0 text-center'>
									<p className='text-xl font-mono font-bold text-white'> 1. Alumbra</p>
								</div>
								<Link href='https://www.youtube.com/watch?v=TAv9fO7dC-4&t=12s' className='absolute -bottom-12 mx-auto w-fit right-0 left-0 bg-white text-black px-4 py-2 rounded-md flex justify-center items-center gap-1 hover:bg-principleViolet hover:text-white transition-all duration-300 shadow-md font-medium'>
									<PlayIcon />
									<span>
										Ver pitch
									</span>
								</Link>
							</div>
						</div>
						<div>
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
								{									showDescription.id === 3 && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white animate-fade-in rounded-md'>IA para
										identificar y rastrear personas/objetos en
										cámaras en tiempo real.</p>
								}
								<div className='bg-black/70 w-full h-10 absolute top-0 text-center'>
									<p className='text-xl font-mono font-bold text-white'> 3. Gecko Agent</p>
								</div>
								<Link href='https://www.youtube.com/watch?v=EadF3GuTPYI' className='absolute -bottom-12 mx-auto w-fit right-0 left-0 bg-white text-black px-4 py-2 rounded-md flex justify-center items-center gap-1 hover:bg-principleViolet hover:text-white transition-all duration-300 shadow-md font-medium'>
									<PlayIcon />
									<span>
										Ver pitch
									</span>
								</Link>
							</div>
						</div>
					</div>
					<div className='flex flex-wrap justify-center mt-5 gap-5'>
						{
							topSevenFinalists.map((finalist) => {
								if (finalist instanceof Array) {
									return (
										<div className='flex flex-col md:flex-row w-full gap-4 justify-center mb-14'>
											{
												finalist.map((finalist) => {
													return (
														<div onMouseEnter={() => setShowDescription({ id: finalist.id, show: true })} onMouseLeave={() => setShowDescription({ id: finalist.id, show: false })} className={`${topSevenFinalistsStyles} ${finalist.videoUrl ? 'mb-12' : ''}`}>
															<span className='absolute top-0 left-2 text-xl font-mono font-bold'>{finalist.id}.</span>
															<p className='font-medium'>{finalist.project}</p>
															{
																showDescription.id === finalist.id && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white animate-fade-in rounded-md'>{finalist.description}</p>
															}															{finalist.videoUrl && (
																<Link href={finalist.videoUrl} target="_blank" rel="noopener noreferrer" className='absolute -bottom-12 mx-auto w-fit right-0 left-0 bg-white text-black px-4 py-2 rounded-md flex justify-center items-center gap-1 hover:bg-principleViolet hover:text-white transition-all duration-300 shadow-md font-medium'>
																	<PlayIcon />
																	<span>
																		Ver pitch
																	</span>
																</Link>
															)}
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
												showDescription.id === finalist.id && showDescription.show && <p className='absolute bottom-0 left-0 right-0 text-center text-black px-2 py-1 text-sm bg-white animate-fade-in rounded-md'>{finalist.description}</p>
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