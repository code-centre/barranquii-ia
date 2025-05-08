"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Carousel3DProps {
  images: string[]
  autoPlay?: boolean
  autoPlayInterval?: number
  pauseOnHover?: boolean
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
}: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const goToNext = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
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
      timer = setInterval(goToNext, autoPlayInterval)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [autoPlay, autoPlayInterval, isHovered, goToNext])

  const getImageIndex = (relativeIndex: number) => {
    return (currentIndex + relativeIndex + images.length) % images.length
  }

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fondo oscuro */}
      <div className="absolute inset-0 -z-10"></div>

      <div className="relative h-[400px] md:h-[500px] w-full">
        {/* Imagen anterior (izquierda) */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-0 h-[70%] w-[30%] rounded-2xl overflow-hidden 
                     transition-all duration-500 transform -translate-x-[10%] z-10 
                     border-4 border-purple-500 shadow-lg
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
                     border-4 border-purple-500 shadow-xl
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
                     border-4 border-purple-500 shadow-lg
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
                 bg-white/80 hover:bg-white flex items-center justify-center 
                 transition-colors duration-300"
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
                 bg-white/80 hover:bg-white flex items-center justify-center 
                 transition-colors duration-300"
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-purple-600 w-6" : "bg-purple-300 w-3"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
