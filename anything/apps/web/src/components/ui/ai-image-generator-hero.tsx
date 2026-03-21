import type React from "react"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  onCtaClick?: () => void
  images: ImageCard[]
  features?: Array<{
    title: string
    description: string
  }>
}

export function ImageCarouselHero({
  title,
  description,
  ctaText,
  onCtaClick,
  images,
  features = [],
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotatingCards, setRotatingCards] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((v) => (v + 0.5) % 360))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setRotatingCards(images.map((_, i) => i * (360 / images.length)))
  }, [images.length])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-black via-black to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#a855f7]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#a855f7]/10 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full max-w-6xl h-96 sm:h-[500px] mb-12 sm:mb-16"
          onMouseMove={handleMouseMove}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1000px" }}>
            {images.map((image, index) => {
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180)
              const radius = 180
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              const perspectiveX = (mousePosition.x - 0.5) * 20
              const perspectiveY = (mousePosition.y - 0.5) * 20

              return (
                <div
                  key={image.id}
                  className="absolute w-32 h-40 sm:w-40 sm:h-48 transition-all duration-300"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotateX(${perspectiveY}deg) rotateY(${perspectiveX}deg) rotateZ(${image.rotation}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={cn(
                      "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl",
                      "transition-all duration-300 hover:scale-110",
                      "cursor-pointer group",
                    )}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative z-20 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8">{description}</p>
          <button
            onClick={onCtaClick}
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3 rounded-full",
              "bg-[#a855f7] text-white font-semibold",
              "hover:bg-[#9333ea] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300",
              "active:scale-95 group",
            )}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {features.length > 0 && (
          <div className="relative z-20 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "text-center p-6 rounded-xl",
                  "bg-white/5 backdrop-blur-sm border border-white/10",
                  "hover:bg-white/10 hover:border-[#a855f7]/30 transition-all duration-300",
                  "group",
                )}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#a855f7] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
