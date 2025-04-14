'use client'
import React, { useState, useRef, useEffect } from 'react'
import Title from '../components/Title'
import { THEME_LANDINGS } from '../utils/theme'
import Image from 'next/image'
import { Clock, User, Calendar, MapPin, Code, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react'
import { Meteors } from '../components/Meteors'
import { THEME_WORKSHOPS, WORKSHOPS } from '../utils/WORKSHOPS'

interface Props {
	landing: string
}




export default function Workshops({ landing }: Props) {
	const [workshops, setWorkshops] = useState(WORKSHOPS[landing]);
	const [selectedWorkshop, setSelectedWorkshop] = useState(WORKSHOPS[landing].filter(workshop => workshop.selected === true)[0]);
	
	// Separar los talleres por tipo
	const normalWorkshops = workshops.filter(workshop => !workshop.type);
	const noCodeWorkshops = workshops.filter(workshop => workshop.type === 'no-code');
	
	// Estado para controlar qué tipo de taller se muestra
	const [activeTab, setActiveTab] = useState<'normal' | 'no-code'>('normal');
	
	// Referencias para el scroll horizontal
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	
	// Función para manejar el cambio de tab con animación suave
	const handleTabChange = (tab: 'normal' | 'no-code') => {
		setActiveTab(tab);
		
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const scrollPosition = tab === 'normal' ? 0 : container.scrollWidth / 2;
			
			container.scrollTo({
				left: scrollPosition,
				behavior: 'smooth'
			});
		}
	};

	const handleWorkshopSwitchSelected = (workshopSelected: { title: string; name: string; role: string, selected: boolean, confirmed?: boolean }) => {
		// Solo permitir seleccionar talleres confirmados
		if (!workshopSelected.confirmed) return;
		
		setWorkshops((prevWorkshops) =>
			prevWorkshops.map(
				(workshop) =>
					workshop.title === workshopSelected.title
						? { ...workshop, selected: true } // Establece highlight en true para el video seleccionado
						: { ...workshop, selected: false } // Establece highlight en false para todos los demás
			)
		);

		// Update the selected workshop
		setSelectedWorkshop(workshopSelected);
	};
	
	// Componente para mostrar los detalles del taller seleccionado
	const WorkshopDetails = () => {
		if (!selectedWorkshop) return null;
		
		const isNoCode = selectedWorkshop.type === 'no-code';
		
		return (
			<div className='rounded-3xl overflow-hidden shadow-xl h-full text-gray-700'>
				<div className='p-4 sm:p-6'>
					{selectedWorkshop.confirmed ? (
						<div className="space-y-4 sm:space-y-6">
							<div>
								<div className="relative bg-[#1a1a1a] p-4 sm:p-8 rounded-2xl shadow-xl border overflow-hidden" 
									style={{
										borderColor: isNoCode 
											? THEME_WORKSHOPS[landing].noCode.border 
											: THEME_LANDINGS[landing].principal
									}}>
									<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
										{/* Foto del ponente grande */}
										<div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl shadow-lg flex-shrink-0">
											{selectedWorkshop.image ? (
												<Image
													src={selectedWorkshop.image}
													alt={`Imagen de ${selectedWorkshop.name}`}
													fill
													className='object-cover'
												/>
											) : (
												<div className='w-full h-full bg-gray-200 flex items-center justify-center'>
													<User size={48} className='text-gray-400' />
												</div>
											)}
											
											{/* Decoración de esquina */}
											<div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
												style={{
													backgroundColor: isNoCode 
														? THEME_WORKSHOPS[landing].noCode.border 
														: THEME_LANDINGS[landing].principal
												}}>
												<User size={12} className="text-white sm:hidden" />
												<User size={16} className="text-white hidden sm:block" />
											</div>
										</div>
										
										<div className="text-center sm:text-left">
											<h3 className="text-xl sm:text-2xl font-bold mb-1 text-gray-200">{selectedWorkshop.name}</h3>
											<div className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full mb-2 sm:mb-3"
												style={{
													backgroundColor: isNoCode 
														? THEME_WORKSHOPS[landing].noCode.border 
														: THEME_LANDINGS[landing].principal,
													color: 'white'
												}}>
												<p className="font-medium text-xs sm:text-sm">{selectedWorkshop.role}</p>
											</div>
											
											{/* Indicador de tipo de taller */}
											<div className='flex flex-wrap justify-center sm:justify-start items-center gap-2 mt-2'>
												<div className='inline-flex items-center gap-1 bg-white px-2 sm:px-3 py-1 rounded-full shadow-sm'>
													{isNoCode ? (
														<>
															<Lightbulb size={14} className='text-gray-700 sm:hidden' />
															<Lightbulb size={16} className='text-gray-700 hidden sm:block' />
															<span className='font-medium text-xs sm:text-sm'>Crece con IA</span>
														</>
													) : (
														<>
															<Code size={14} className='text-gray-700 sm:hidden' />
															<Code size={16} className='text-gray-700 hidden sm:block' />
															<span className='font-medium text-xs sm:text-sm'>Construye con IA</span>
														</>
													)}
												</div>
												<div className='inline-flex items-center gap-1 bg-white px-2 sm:px-3 py-1 rounded-full shadow-sm'>
													<Clock size={14} className='text-gray-700 sm:hidden' />
													<Clock size={16} className='text-gray-700 hidden sm:block' />
													<span className='text-xs sm:text-sm'>{selectedWorkshop.title.split(' - ')[0]}</span>
												</div>
											</div>
										</div>
									</div>
								<Meteors number={5} />

									{/* Decoración de fondo */}
									<div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 -mr-10 sm:-mr-20 -mt-10 sm:-mt-20 opacity-5 "
										style={{
											backgroundColor: isNoCode 
												? THEME_WORKSHOPS[landing].noCode.border 
												: THEME_LANDINGS[landing].principal,
											borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
										}}></div>
									
									<div className="absolute bottom-0 left-0 w-24 sm:w-40 h-24 sm:h-40 -ml-6 sm:-ml-10 -mb-6 sm:-mb-10 opacity-5"
										style={{
											backgroundColor: isNoCode 
												? THEME_WORKSHOPS[landing].noCode.border 
												: THEME_LANDINGS[landing].principal,
											borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%'
										}}></div>
									
									<div className="relative z-10 mt-4 sm:mt-6">
										<div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
											<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md"
												style={{
													backgroundColor: isNoCode 
														? THEME_WORKSHOPS[landing].noCode.border 
														: THEME_LANDINGS[landing].principal
												}}>
												<Lightbulb size={16} className="text-white sm:hidden" />
												<Lightbulb size={20} className="text-white hidden sm:block" />
											</div>
											<h3 className="font-bold text-lg sm:text-2xl" style={{
												color: isNoCode 
													? THEME_WORKSHOPS[landing].noCode.border 
													: THEME_LANDINGS[landing].principal
											}}>Acerca del taller</h3>
										</div>
										
										<div className="border-l-3" style={{
											borderColor: isNoCode 
												? THEME_WORKSHOPS[landing].noCode.border 
												: THEME_LANDINGS[landing].principal
										}}>
											<p className="text-white text-sm sm:text-md leading-relaxed">
												{selectedWorkshop.description}
											</p>
											
											{/* Decoración de cita */}
											<div className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8 opacity-20">
												<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:hidden">
													<path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V15C10 16.0609 9.57857 17.0783 8.82843 17.8284C8.07828 18.5786 7.06087 19 6 19H5" 
														stroke={isNoCode 
															? THEME_WORKSHOPS[landing].noCode.border 
															: THEME_LANDINGS[landing].principal} 
														strokeWidth="2" 
														strokeLinecap="round" 
														strokeLinejoin="round"/>
													<path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V15C20 16.0609 19.5786 17.0783 18.8284 17.8284C18.0783 18.5786 17.0609 19 16 19H15" 
														stroke={isNoCode 
															? THEME_WORKSHOPS[landing].noCode.border 
															: THEME_LANDINGS[landing].principal} 
														strokeWidth="2" 
														strokeLinecap="round" 
														strokeLinejoin="round"/>
												</svg>
												<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden sm:block">
													<path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V15C10 16.0609 9.57857 17.0783 8.82843 17.8284C8.07828 18.5786 7.06087 19 6 19H5" 
														stroke={isNoCode 
															? THEME_WORKSHOPS[landing].noCode.border 
															: THEME_LANDINGS[landing].principal} 
														strokeWidth="2" 
														strokeLinecap="round" 
														strokeLinejoin="round"/>
													<path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V15C20 16.0609 19.5786 17.0783 18.8284 17.8284C18.0783 18.5786 17.0609 19 16 19H15" 
														stroke={isNoCode 
															? THEME_WORKSHOPS[landing].noCode.border 
															: THEME_LANDINGS[landing].principal} 
														strokeWidth="2" 
														strokeLinecap="round" 
														strokeLinejoin="round"/>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							{/* Detalles del evento */}
							<div className='flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-4'>
								<div className='flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'>
									<Calendar size={12} className='text-gray-700 sm:hidden' />
									<Calendar size={14} className='text-gray-700 hidden sm:block' />
									<span>Sábado 3 de Mayo</span>
								</div>
								<div className='flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'>
									<MapPin size={12} className='text-gray-700 sm:hidden' />
									<MapPin size={14} className='text-gray-700 hidden sm:block' />
									<span>{selectedWorkshop.time}</span>
								</div>
							</div>
						</div>
					) : (
						<div className="text-center p-4">
							<div className='w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gray-200 flex items-center justify-center'>
								<Calendar size={24} className='text-gray-400 sm:hidden' />
								<Calendar size={32} className='text-gray-400 hidden sm:block' />
							</div>
							<h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{
								color: isNoCode 
									? THEME_WORKSHOPS[landing].noCode.border 
									: THEME_LANDINGS[landing].principal
							}}>
								Taller por confirmar
							</h2>
							<p className="text-sm sm:text-base text-gray-700 max-w-md mx-auto">
								Estamos preparando un increíble taller para ti. ¡Mantente atento para más detalles!
							</p>
							<div className='mt-3 sm:mt-4 inline-block bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'>
								<div className='flex items-center gap-1 sm:gap-2'>
									<Clock size={12} className='text-gray-700 sm:hidden' />
									<Clock size={14} className='text-gray-700 hidden sm:block' />
									<span>{selectedWorkshop.title.split(' - ')[0]}</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	};
	
	// Función para renderizar la timeline de talleres de forma más compacta
	const renderCompactWorkshopsList = (workshopsList: any[], isNoCode = false) => {
		// Filtrar solo los talleres confirmados
		const confirmedWorkshops = workshopsList.filter((workshop: any) => workshop.confirmed);
		
		// Si no hay talleres confirmados, mostrar mensaje
		if (confirmedWorkshops.length === 0) {
			return (
				<div className="flex flex-col items-center justify-center py-6 sm:py-10 px-4">
					<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-inner">
						{isNoCode ? (
							<>
								<Lightbulb size={24} className="text-gray-400 sm:hidden" />
								<Lightbulb size={32} className="text-gray-400 hidden sm:block" />
							</>
						) : (
							<>
								<Code size={24} className="text-gray-400 sm:hidden" />
								<Code size={32} className="text-gray-400 hidden sm:block" />
							</>
						)}
					</div>
					<h3 className="text-sm sm:text-base font-medium text-gray-700 mb-1">No hay talleres confirmados</h3>
					<p className="text-xs sm:text-sm text-gray-500 text-center">Estamos preparando talleres increíbles para ti. ¡Vuelve pronto!</p>
				</div>
			);
		}
		
		return (
			<div className='relative text-gray-700'>
				<div className='absolute left-0 h-full w-1 rounded-full' 
					style={{
						backgroundColor: isNoCode 
							? THEME_WORKSHOPS[landing].noCode.border 
							: THEME_LANDINGS[landing].principal
					}}></div>
			
			<div className='space-y-3 sm:space-y-4 pl-4 sm:pl-6'>
				{confirmedWorkshops.map((workshop: any, index: number) => (
					<div 
						key={index}
						onClick={() => handleWorkshopSwitchSelected(workshop)}
						style={{
							backgroundColor: workshop.selected 
								? (isNoCode ? THEME_WORKSHOPS[landing].noCode.background : THEME_WORKSHOPS[landing].selected.background)
								: 'white',
							borderColor: workshop.selected 
								? (isNoCode ? THEME_WORKSHOPS[landing].noCode.border : THEME_LANDINGS[landing].principal)
								: 'transparent',
							boxShadow: workshop.selected 
								? `0 4px 12px rgba(0, 0, 0, 0.1)` 
								: 'none'
						}}
						className='cursor-pointer rounded-xl border-2 p-3 sm:p-4 hover:shadow-md transition-all duration-300'
					>
						<div className='flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700 mb-1'>
							<Clock size={12} className="flex-shrink-0 sm:hidden" />
							<Clock size={14} className="flex-shrink-0 hidden sm:block" />
							<p className="truncate">{workshop.title.split(' - ')[0]}</p>
						</div>
						<h3 className="font-bold text-sm sm:text-base line-clamp-2">{workshop.title.split(' - ')[1]}</h3>
						<div className='flex items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm'>
							<User size={12} className="flex-shrink-0 sm:hidden" />
							<User size={14} className="flex-shrink-0 hidden sm:block" />
							<p className="font-medium truncate">{workshop.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
	
	return (
		<section className='flex flex-col gap-5 lg:gap-10 relative px-5 lg:px-10 py-10'>
			<Title landing={landing} title='Talleres para programadores y startups' />
			
			{/* Tabs de navegación */}
			<div className="flex justify-center mb-4 sm:mb-6">
				<div className="bg-gray-100 p-1 rounded-full flex items-center shadow-sm">
					<button
						onClick={() => handleTabChange('normal')}
						className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 ${
							activeTab === 'normal'
								? 'bg-white shadow-md text-gray-800'
								: 'text-gray-500 hover:text-gray-700'
						}`}
					>
						<Code size={16} className="sm:hidden" />
						<Code size={18} className="hidden sm:block" />
						<span className="text-sm sm:text-base">Construye con IA</span>
					</button>
					<button
						onClick={() => handleTabChange('no-code')}
						className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 ${
							activeTab === 'no-code'
								? 'bg-white shadow-md text-gray-800'
								: 'text-gray-500 hover:text-gray-700'
						}`}
					>
						<Lightbulb size={16} className="sm:hidden" />
						<Lightbulb size={18} className="hidden sm:block" />
						<span className="text-sm sm:text-base">Crece con IA</span>
					</button>
				</div>
			</div>
			
			{/* Layout de dos columnas: Lista de talleres y Detalles */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
				{/* Columna izquierda: Lista de talleres */}
				<div>
					{/* Contenedor de slides con scroll horizontal */}
					<div 
						ref={scrollContainerRef}
						className="flex overflow-x-hidden snap-x snap-mandatory w-full"
						style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
					>
						{/* Normal Workshops Section */}
						<div className="min-w-full w-full snap-start">
							{normalWorkshops.length > 0 ? (
								<div>
									<div className="flex items-center justify-between mb-3 sm:mb-4">
										<div className="flex items-center gap-1 sm:gap-2">
											<Code size={16} className="text-gray-700 sm:hidden" />
											<Code size={20} className="text-gray-700 hidden sm:block" />
											<h2 className="text-lg sm:text-xl font-bold" style={{color: THEME_LANDINGS[landing].principal}}>
												Talleres de Desarrollo
											</h2>
										</div>
										<button 
											onClick={() => handleTabChange('no-code')}
											className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors px-2 py-1 rounded-full hover:bg-gray-100 text-xs sm:text-sm"
										>
											<span>Crecimiento</span>
											<ChevronRight size={14} className="sm:hidden" />
											<ChevronRight size={16} className="hidden sm:block" />
										</button>
									</div>
									{renderCompactWorkshopsList(normalWorkshops)}
								</div>
							) : (
								<div className="flex flex-col items-center justify-center py-8 sm:py-10">
									<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
										<Code size={20} className="text-gray-400 sm:hidden" />
										<Code size={24} className="text-gray-400 hidden sm:block" />
									</div>
									<h3 className="text-sm sm:text-base font-medium text-gray-700 mb-1">No hay talleres disponibles</h3>
									<p className="text-xs sm:text-sm text-gray-500">Pronto añadiremos más talleres</p>
								</div>
							)}
						</div>
						
						{/* No-Code Workshops Section */}
						<div className="min-w-full w-full snap-start">
							{noCodeWorkshops.length > 0 ? (
								<div>
									<div className="flex items-center justify-between mb-3 sm:mb-4">
										<button 
											onClick={() => handleTabChange('normal')}
											className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors px-2 py-1 rounded-full hover:bg-gray-100 text-xs sm:text-sm"
										>
											<ChevronLeft size={14} className="sm:hidden" />
											<ChevronLeft size={16} className="hidden sm:block" />
											<span>Desarrollo</span>
										</button>
										<div className="flex items-center gap-1 sm:gap-2">
											<Lightbulb size={16} className="text-gray-700 sm:hidden" />
											<Lightbulb size={20} className="text-gray-700 hidden sm:block" />
											<h2 className="text-lg sm:text-xl font-bold" style={{color: THEME_WORKSHOPS[landing].noCode.border}}>
												Talleres para startups
											</h2>
										</div>
									</div>
									{renderCompactWorkshopsList(noCodeWorkshops, true)}
								</div>
							) : (
								<div className="flex flex-col items-center justify-center py-8 sm:py-10">
									<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
										<Lightbulb size={20} className="text-gray-400 sm:hidden" />
										<Lightbulb size={24} className="text-gray-400 hidden sm:block" />
									</div>
									<h3 className="text-sm sm:text-base font-medium text-gray-700 mb-1">No hay talleres disponibles</h3>
									<p className="text-xs sm:text-sm text-gray-500">Pronto añadiremos más talleres</p>
								</div>
							)}
						</div>
					</div>
					
					{/* Indicadores de navegación */}
					<div className="flex justify-center mt-3 sm:mt-4 gap-2">
						<button 
							onClick={() => handleTabChange('normal')}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								activeTab === 'normal' 
									? 'bg-gray-800 w-5 sm:w-6' 
									: 'bg-gray-300 hover:bg-gray-400'
							}`}
							aria-label="Ver talleres de desarrollo"
						/>
						<button 
							onClick={() => handleTabChange('no-code')}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								activeTab === 'no-code' 
									? 'bg-gray-800 w-5 sm:w-6' 
									: 'bg-gray-300 hover:bg-gray-400'
							}`}
							aria-label="Ver talleres no-code"
						/>
					</div>
				</div>
				
				{/* Columna derecha: Detalles del taller seleccionado */}
				<div className="lg:sticky lg:top-4 self-start">
					<WorkshopDetails />
				</div>
			</div>
			
			<Image 
				src="/3DFigures/glass-3d.webp" 
				alt="3D glass" 
				width={500} 
				height={400} 
				className="absolute -bottom-32 -right-60 hidden lg:block" 
			/>
		</section>
	)
}