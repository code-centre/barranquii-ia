"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Carousel3DProps {
  images: string[]
  autoPlay?: boolean
  autoPlayInterval?: number
  pauseOnHover?: boolean
  title?: string
}

export default function Carousel3D({
  images = [
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
  ],
  autoPlay = false,
  autoPlayInterval = 3000,
  pauseOnHover = true,
  title,
}: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToPrevious = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsHovered(true)
    }
  }
  
  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsHovered(false)
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (autoPlay && !isHovered) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, autoPlayInterval)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [autoPlay, autoPlayInterval, isHovered, images.length])

  const getImageIndex = (relativeIndex: number) => {
    return (currentIndex + relativeIndex + images.length) % images.length
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {title && (
        <header className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
        </header>
      )}
      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-[400px] md:h-[500px] w-full">
        {/* Imagen anterior (izquierda) */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-0 h-[70%] w-[30%] rounded-2xl overflow-hidden 
                     transition-all duration-500 transform -translate-x-[10%] z-10 
                     border-2 border-purple-500/50 shadow-lg
                     ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[getImageIndex(-1)] || "/placeholder.svg"}
              alt="Imagen anterior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Imagen actual (centro) */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] w-[50%] 
                     rounded-2xl overflow-hidden transition-all duration-500 transform z-20 
                     border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5),0_0_60px_rgba(168,85,247,0.2)]
                     ${isTransitioning ? "scale-95 opacity-90" : "scale-100 opacity-100"}`}
        >
          <div className="relative w-full h-full">
            <Image src={images[currentIndex] || "/placeholder.svg"} alt="Imagen actual" fill className="object-cover" />
          </div>
        </div>

        {/* Imagen siguiente (derecha) */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 right-0 h-[70%] w-[30%] rounded-2xl 
                     overflow-hidden transition-all duration-500 transform translate-x-[10%] z-10 
                     border-2 border-purple-500/50 shadow-lg
                     ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[getImageIndex(1)] || "/placeholder.svg"}
              alt="Imagen siguiente"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

        {/* Botones de navegación */}
        <button
          className="absolute top-1/2 -translate-y-1/2 left-4 z-30 w-10 h-10 rounded-full 
                   bg-purple-900/80 hover:bg-purple-800 border border-purple-500/50 
                   text-white flex items-center justify-center 
                   transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          onClick={goToPrevious}
          disabled={isTransitioning}
          aria-label="Anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          className="absolute top-1/2 -translate-y-1/2 right-4 z-30 w-10 h-10 rounded-full 
                   bg-purple-900/80 hover:bg-purple-800 border border-purple-500/50 
                   text-white flex items-center justify-center 
                   transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          onClick={goToNext}
          disabled={isTransitioning}
          aria-label="Siguiente"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

        {/* Indicadores */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-30 pb-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-purple-500 w-8 h-3 shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                  : "bg-purple-500/40 w-3 h-3 hover:bg-purple-500/60"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
