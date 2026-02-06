import HeroTitle from "./../hero/HeroTitle"
import Link from "next/link"
import GradientTitle from "../GradientTitle"

interface Props {
  landing: string
}

export default function HackatonesNav({ landing }: Props) {
  return (
    <nav className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10" aria-label="Navegación de hackatones">
      <Link 
        href="/2025" 
        className="flex-1 xl:min-w-[350px] flex flex-col items-center justify-start py-5"
        aria-label="Barranqui-IA - 1 al 3 de Mayo"
      >
        <article className="flex flex-col items-center w-full space-y-2">
          <GradientTitle
            title="1 al 3 de Mayo"
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

      <Link 
        href="" 
        className="w-full flex flex-col items-center justify-start py-5"
        aria-label="Cartagen-IA - 15 al 17 de Mayo"
      >
        <article className="flex flex-col items-center w-full space-y-2">
          <GradientTitle
            title="15 al 17 de Mayo"
            landing="cartagen-ia"
            size="sm"
          />
          <HeroTitle
            title="Cartagen-IA"
            landing="cartagen-ia"
            size="lg"
          />
        </article>
      </Link>

      <Link 
        href="" 
        className="flex-1 xl:min-w-[350px] flex flex-col items-center justify-start py-5"
        aria-label="Samar-IA - 29 al 31 de Mayo"
      >
        <article className="flex flex-col items-center w-full space-y-2">
          <GradientTitle
            title="29 al 31 de Mayo"
            landing="samar-ia"
            size="sm"
          />
          <HeroTitle
            title="Samar-IA"
            landing="samar-ia"
            size="lg"
          />
        </article>
      </Link>
    </nav>
  )
}