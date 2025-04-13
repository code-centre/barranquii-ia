'use client'
import React from 'react'
import { THEME_LANDINGS } from '@/app/utils/theme'

interface Props {
	title: string
	landing?: string
	size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "xxxxl" | "xxxxxl"
	align?: "left" | "center" | "right"
}


export default function Title({
	title,
	landing,
	size,
	align,
}: Props) {
	let sizeClass = ""
	switch (size) {
		case "sm":
			sizeClass = "text-2xl md:text-3xl"
			break
		case "md":
			sizeClass = "text-3xl md:text-4xl"
			break
		case "lg":
			sizeClass = "text-4xl md:text-5xl"
			break
		case "xl":
			sizeClass = "text-5xl md:text-6xl"
			break
		case "xxl":
			sizeClass = "text-6xl md:text-7xl"
			break
		case "xxxl":
			sizeClass = "text-7xl md:text-8xl"
			break
		case "xxxxl":
			sizeClass = "text-8xl md:text-9xl"
			break
		case "xxxxxl":
			sizeClass = "text-9xl md:text-10xl"
			break
		default:
			sizeClass = "text-3xl md:text-5xl"
	}

	let alignClass = ""
	switch (align) {
		case "left":
			alignClass = "text-left"
			break
		case "center":
			alignClass = "text-center"
			break
		case "right":
			alignClass = "text-right"
			break
		default:
			alignClass = "text-left"
	}
	return (
		<div className={`${alignClass}`}>
			<h2
				style={{ color: THEME_LANDINGS[landing ?? 'default'].principal }}
				// style={{
				// 	background: `linear-gradient(to right, ${THEME_LANDINGS[landing].gradient.from}, ${THEME_LANDINGS[landing].gradient.via}, ${THEME_LANDINGS[landing].gradient.to})`,
				// 	backgroundClip: 'text',
				// 	WebkitBackgroundClip: 'text',
				// 	color: 'transparent'
				// }} 
				className={`font-bold font-mono ${sizeClass}`}>{title}</h2>
		</div>
	)
}
