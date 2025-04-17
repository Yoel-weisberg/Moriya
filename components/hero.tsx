"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Hero({
  dict,
}: {
  dict: {
    title: string
    subtitle: string
    cta: string
  }
}) {
  const heroRef = useRef<HTMLDivElement>(null)
  const [showFlowerRain, setShowFlowerRain] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Add a slight parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Create flower rain animation
    if (showFlowerRain) {
      const flowerRainContainer = document.querySelector(".flower-rain-container")

      // Create fewer petals on mobile for better performance
      const petalCount = isMobile ? 25 : 50

      // Create flower petals
      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("div")
        petal.className = "flower-petal"

        // Random size between 15px and 30px (smaller on mobile)
        const size = Math.floor(Math.random() * (isMobile ? 12 : 16)) + (isMobile ? 10 : 15)
        petal.style.width = `${size}px`
        petal.style.height = `${size}px`

        // Random horizontal position
        petal.style.left = `${Math.random() * 100}%`

        // Random fall duration between 7s and 15s
        const fallDuration = Math.floor(Math.random() * 8) + 7
        petal.style.animationDuration = `${fallDuration}s`

        // Random delay so they don't all start at once
        const fallDelay = Math.random() * 5
        petal.style.animationDelay = `${fallDelay}s`

        flowerRainContainer?.appendChild(petal)
      }

      // Remove flower rain after 10 seconds
      const timer = setTimeout(() => {
        setShowFlowerRain(false)
      }, 10000)

      return () => {
        clearTimeout(timer)
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", checkMobile)
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [showFlowerRain, isMobile])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center bg-warmBrown-50 overflow-hidden"
    >
      {/* Background with warm brown gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-warmBrown-100 to-warmBrown-50"></div>

      {/* Flower rain animation */}
      {showFlowerRain && <div className="flower-rain-container"></div>}

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[10%] max-w-6xl mx-auto">
          {/* Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 animate-fade-in md:w-1/2 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text animate-slide-up">
              {dict.title}
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-warmBrown-800 max-w-2xl animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              {dict.subtitle}
            </p>

            <div className="pt-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base bg-warmBrown-700 hover:bg-warmBrown-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Link href="#contact">{dict.cta}</Link>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="mt-8 md:mt-0 md:w-1/2 w-full flex justify-center animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="profile-image-container w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Image
                src="https://static.yoelweisberg.com/portfilioio-images/hero.jpg"
                alt="Massage Therapist"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

