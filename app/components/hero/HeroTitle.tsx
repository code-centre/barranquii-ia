'use client'
import React from 'react'
import { THEME_LANDINGS } from '@/app/utils/theme'
import Border from '../Border'


interface Props {
  landing: string
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "xxxxl" | "xxxxxl"
  align?: "left" | "center" | "right"
  subtitle?: string
}

export const TITLES: Record<string, string> = {
  'default': 'Caribe-IA',
  'barranqui-ia': 'Barranqui-IA',
  'samar-ia': 'Samar-IA',
  'cartagen-ia': 'Cartagen-IA'
}

const SUBTITLES: Record<string, string> = {
  'default': 'El programa integral para crear startups de alto impacto en IA desde la región Caribe de Colombia.',
  'barranqui-ia': 'El primer hackatón de inteligencia artificial en el Caribe | Segunda Edición',
  'samar-ia': 'El primer hackatón de inteligencia artificial en el Caribe | Edición Santa Marta',
  'cartagen-ia': 'El primer hackatón de inteligencia artificial en el Caribe | Edición Cartagena'
}

export default function HeroTitle({
  landing,
  size,
  align,
  subtitle
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
      sizeClass = "text-4xl md:text-5xl"
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
    <>
      <div className={`${alignClass} flex flex-col`}>
        <h2
          // style={{ color: THEME_LANDINGS[landing ?? 'default'].principal }}
          style={{
            background: `linear-gradient(to right, ${THEME_LANDINGS[landing].gradient.from}, ${THEME_LANDINGS[landing].gradient.via}, ${THEME_LANDINGS[landing].gradient.to})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
          className={`font-bold font-mono ${sizeClass}`}>{TITLES[landing]}</h2>
      </div>
      <div className='flex mt-6'>
        <Border landing={landing || 'default'} />
        {subtitle && <p className={`pl-5 text-2xl max-w-2xl`}>{SUBTITLES[landing]}</p>}
      </div>
    </>

  )
}
