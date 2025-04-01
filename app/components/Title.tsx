'use client'
import React from 'react'
import { THEME_LANDINGS } from '@/app/utils/theme'

interface Props {
	title: string
	landing?: string
}


export default function Title({ title, landing }: Props) {
	return (
		<h2
			style={{ color: THEME_LANDINGS[landing ?? 'default'].principal }}
			// style={{
			// 	background: `linear-gradient(to right, ${THEME_LANDINGS[landing].gradient.from}, ${THEME_LANDINGS[landing].gradient.via}, ${THEME_LANDINGS[landing].gradient.to})`,
			// 	backgroundClip: 'text',
			// 	WebkitBackgroundClip: 'text',
			// 	color: 'transparent'
			// }} 
			className={`text-3xl md:text-4xl lg:text-6xl  font-bold font-mono`}>{title}</h2>
	)
}
