"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface DiagonalSplitImageWithTitlesProps {
    leftImage: string
    rightImage: string
    leftAlt?: string
    rightAlt?: string
    leftTitle?: string
    rightTitle?: string
    dividerColor?: string
    dividerWidth?: number
    dividerAngle?: number
    height?: string
}

export default function ImageDivider({
    leftImage,
    rightImage,
    leftAlt = "Imagen izquierda",
    rightAlt = "Imagen derecha",
    leftTitle,
    rightTitle,
    dividerColor = "#8b5cf6",
    dividerWidth = 3,
    dividerAngle = -10,
    height,
}: DiagonalSplitImageWithTitlesProps) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkIfMobile()
        window.addEventListener("resize", checkIfMobile)

        return () => {
            window.removeEventListener("resize", checkIfMobile)
        }
    }, [])

    const effectiveAngle = isMobile ? dividerAngle * 1.5 : dividerAngle

    const angleInRadians = (effectiveAngle * Math.PI) / 180
    const offset = Math.tan(angleInRadians) * 0.5

    const leftClipPath = `polygon(0% 0%, 50% 0%, ${50 + offset * 100}% 100%, 0% 100%)`
    const rightClipPath = `polygon(50% 0%, 100% 0%, 100% 100%, ${50 + offset * 100}% 100%)`

    return (
        <div
            className="relative w-full"
            style={{
                height: height || "auto",
                aspectRatio: height ? "auto" : "16/9",
            }}
        >
            {/* Imagen izquierda con clipPath */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ clipPath: leftClipPath }}>
                <Image
                    src={leftImage || "/placeholder.svg"}
                    alt={leftAlt}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {leftTitle && (
                    <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-gray-900 bg-opacity-60 rounded-full text-white text-sm md:text-xl lg:text-2xl font-bold drop-shadow-lg px-3 py-1 md:px-4 md:py-2">
                        {leftTitle}
                    </div>
                )}
            </div>

            {/* Imagen derecha con clipPath */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ clipPath: rightClipPath }}>
                <Image
                    src={rightImage || "/placeholder.svg"}
                    alt={rightAlt}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-center object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {rightTitle && (
                    <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-gray-900 bg-opacity-60 rounded-full text-white text-sm md:text-xl lg:text-2xl font-bold drop-shadow-lg px-3 py-1 md:px-4 md:py-2">
                        {rightTitle}
                    </div>
                )}
            </div>

            {/* Línea diagonal ajustada */}
            <div
                className="absolute top-0 left-1/2 h-[101.6%] origin-top z-10"
                style={{
                    width: `${isMobile ? dividerWidth * 0.7 : dividerWidth}px`,
                    backgroundColor: dividerColor,
                    transform: `translateX(100%) rotate(${effectiveAngle * -1}deg)`,
                }}
            />
        </div>
    )
}

