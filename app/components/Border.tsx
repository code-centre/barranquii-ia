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
			className='w-1 md:w-[3px] lg:w-[6px] xl:w-[6px] rounded-full h-full min-h-full'></div>
	)
}
