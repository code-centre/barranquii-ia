'use client'
import React, { useState } from 'react'
import Title from '../components/Title'
import Border from '../components/Border'
import { THEME_LANDINGS } from '../utils/theme'
import Image from 'next/image'

interface Props {
	landing: string
}

let THEME_WORKSHOPS: Record<string, { selected: { background: string; border: string }; unselected: string }> = {
	// '': '#a2fbf7',
	'barranqui-ia': {
		'selected': {
			background: '#d3a2fb',
			border: '#fbe4a2'
		},
		'unselected': '#7a5b91'
	},
	'samar-ia': {
		'selected': {
			background: '#fbd1a2',
			border: '#e54437'
		},
		'unselected': '#887260'
	},
	'cartagen-ia': {
		'selected': {
			background: '#a2fbf7',
			border: '#fbe4a2'
		},
		'unselected': '#588390'
	}
}

const WORKSHOPS: Record<string, { title: string; name: string; role: string, selected: boolean }[]> = {
	'barranqui-ia': [
		{
			title: '2:00pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: true,
		},
		{
			title: '2:30pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		},
		{
			title: '3:00pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		},
		{
			title: '3:30pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		}
	],
	'samar-ia': [
		{
			title: '2:30pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: true
		},
		{
			title: '3:00pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		},
		{
			title: '3:30pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		},
		{
			title: '4:00pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		},
		{
			title: '4:30pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		}
	],
	'cartagen-ia': [
		{
			title: '2:30pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: true
		},
		{
			title: '3:00pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		},
		{
			title: '3:30pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		},
		{
			title: '4:00pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		},
		{
			title: '4:30pm - Construye tu MVP con las bases',
			name: 'David Aragón',
			role: 'Google Developer Expert en IA',
			selected: false
		}
	]
}

export default function Workshops({ landing }: Props) {
	const [workshops, setWorkshops] = useState(WORKSHOPS[landing]);
	const [selectedWorkshop, setSelectedWorkshop] = useState(WORKSHOPS[landing].filter(workshop => workshop.selected === true)[0]);

	console.log(workshops);

	const handleWorkshopSwitchSelected = (workshopSelected: { title: string; name: string; role: string, selected: boolean }) => {
		setWorkshops((prevWorkshops) =>
      prevWorkshops.map(
        (workshop) =>
          workshop.title === workshopSelected.title
            ? { ...workshop, selected: true } // Establece highlight en true para el video seleccionado
            : { ...workshop, selected: false } // Establece highlight en false para todos los demás
      )
    );
	};

	return (
		<section className='flex flex-col gap-10 relative'>
			<Title landing={landing} title='Talleres con Google Developer Experts' />
			<div className='grid grid-cols-2 gap-3 lg:gap-10'>
				<div className='grid grid-cols-[3px_1fr] gap-3 lg:gap-10'>
					<Border landing={landing} />
					<div className='flex flex-col gap-3'>
						{
							workshops.map((workshop, index) => (
								<div onClick={() => handleWorkshopSwitchSelected(workshop)} style={{ backgroundColor: workshop.selected ? THEME_WORKSHOPS[landing].selected.background : THEME_WORKSHOPS[landing].unselected, border: `2px solid ${THEME_LANDINGS[landing].principal}`}} key={index} className='cursor-pointer rounded-3xl p-4 text-black flex flex-col '>
									<p className="">{workshop.title}</p>
									<h3 className="font-bold font-mono text-xl">{workshop.name}</h3>
									<p style={{ backgroundColor: workshop.selected ? THEME_WORKSHOPS[landing].selected.border : '#4285f4' }} className='p-1 px-3 rounded-3xl text-sm w-fit'>{workshop.role}</p>
								</div>
							))
						}
					</div>
				</div>
				<div className='h-full bg-gray-300 rounded-3xl'></div>
			</div>
			<Image src="/3DFigures/glass-3d.png" alt="3D glass" width={500} height={400} className="absolute -bottom-32 -right-56" />
		</section>
	)
}
