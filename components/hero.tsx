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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      if (heroRef.current && !isMobile) {
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
      className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Main background with gradient and pattern */}
      <div className="absolute inset-0 bg-[#25363e]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#25363e] via-[#1a2a32] to-[#0f1a1f] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3a4a52] rounded-full mix-blend-overlay opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2a3a42] rounded-full mix-blend-overlay opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[10%] max-w-6xl mx-auto">
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6 animate-fade-in md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-warmBrown-200 animate-slide-up">
              {dict.title}
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-warmBrown-200 max-w-2xl animate-slide-up px-4 md:px-0"
              style={{ animationDelay: "200ms" }}
            >
              {dict.subtitle}
            </p>

            <div className="pt-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <Button
                asChild
                size="lg"
                className="rounded-full px-4 sm:px-6 md:px-8 py-2 md:py-3 text-sm md:text-base bg-warmBrown-700 hover:bg-warmBrown-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Link href="#contact">{dict.cta}</Link>
              </Button>
            </div>
          </div>

          <div
            className="mt-8 md:mt-0 md:w-1/2 w-full flex justify-center animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="profile-image-container w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 transition-all duration-300">
              <Image
                src="https://static.yoelweisberg.com/portfilioio-images/hero.jpg"
                alt="Massage Therapist"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-full transform transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

