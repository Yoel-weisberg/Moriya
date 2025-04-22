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
      className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1a2026]"
    >
      {/* Main background with gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2026] via-[#1f282f] to-[#243038] opacity-95"></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 100% 0%, rgba(255,255,255,0.06) 0%, transparent 40%)'
        }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-[#2a3842] rounded-full mix-blend-overlay opacity-[0.07] blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#1f282f] rounded-full mix-blend-overlay opacity-[0.05] blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-warmBrown-400/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-8 sm:py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-[10%] max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-8 animate-fade-in md:w-1/2 w-full max-md:text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-warmBrown-100 animate-slide-up leading-tight">
              {dict.title}
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-warmBrown-200/90 max-w-2xl animate-slide-up px-4 md:px-0 leading-relaxed"
              style={{ animationDelay: "200ms" }}
            >
              {dict.subtitle}
            </p>

            <div className="pt-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 sm:px-10 py-6 text-base sm:text-lg bg-warmBrown-700 hover:bg-warmBrown-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Link href="#contact">{dict.cta}</Link>
              </Button>
            </div>
          </div>

          <div
            className="md:w-1/2 w-full flex justify-center animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative profile-image-container w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-warmBrown-700/20 to-transparent rounded-full"></div>
              <Image
                src="https://static.yoelweisberg.com/portfilioio-images/hero.jpg"
                alt="Massage Therapist"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-full shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
              <div className="absolute -inset-0.5 bg-gradient-to-br from-warmBrown-400/20 to-transparent opacity-50 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

