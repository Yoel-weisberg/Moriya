"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Hero({
  dict
}: {
  dict: {
    title: string
    subtitle: string
    cta: string
  }
}) {
  const heroRef = useRef<HTMLDivElement>(null)
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


    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center bg-warmBrown-50 overflow-hidden"
    >
      {/* Background with warm brown gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#25363e] to-[#25343b]"></div>


      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[10%] max-w-6xl mx-auto">
          {/* Text content */}
          <div className="flex flex-col items-center md:items-start  space-y-4 md:space-y-6 animate-fade-in md:w-1/2 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-warmBrown-200 animate-slide-up ">
              {dict.title}
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-warmBrown-200 max-w-2xl animate-slide-up"
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

