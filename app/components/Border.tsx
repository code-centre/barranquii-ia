import React from 'react'
import { THEME_LANDINGS } from '../utils/theme'

interface Props {
	landing: string
}

export default function Border({ landing }: Props) {
	return (
		<div
			style={{
				background: `linear-gradient(to bottom, ${THEME_LANDINGS[landing].gradient.from}, ${THEME_LANDINGS[landing].gradient.via}, ${THEME_LANDINGS[landing].gradient.to})`,
			}}
			className='w-6 md:w-[3px] rounded-full h-auto'></div>
	)
}
