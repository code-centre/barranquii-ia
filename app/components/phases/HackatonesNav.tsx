import HeroTitle from "./../hero/HeroTitle"
import Link from "next/link"
import GradientTitle from "../GradientTitle"

interface Props {
  landing: string
}

export default function HackatonesNav({ landing }: Props) {
  return (
    <nav className="w-full grid grid-cols-1 gap-10" aria-label="Navegación de hackatones">
      <Link 
        href="/2025" 
        className="flex-1 xl:min-w-[350px] flex flex-col items-center justify-start py-5"
        aria-label="Barranqui-IA - 22 al 24 de Mayo"
      >
        <article className="flex flex-col items-center w-full space-y-2">
          <GradientTitle
            title="22 al 24 de Mayo"
            landing="barranqui-ia"
            size="sm"
          />
          <HeroTitle
            title="Barranqui-IA"
            landing="barranqui-ia"
            size="lg"
          />
        </article>
      </Link>
    </nav>
  )
}