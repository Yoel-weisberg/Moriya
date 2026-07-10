"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const clinicImages = [
  "clinic-1.jpg",
  "clinic-2.jpg",
  "clinic-3.jpg",
  "clinic-4.jpg",
  "clinic-5.jpg",
  "clinic-6.jpg",
]

export default function Gallery() {
  const { dict, locale } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-28 overflow-hidden bg-[#1f2731] text-white"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warmBrown-100">
            {dict.gallery.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-warmBrown-200/80">
            {dict.gallery.subtitle}
          </p>
        </div>

        <div className="relative reveal">
          <Carousel className="group">
            <CarouselContent className="px-4">
              {clinicImages.map((image, index) => (
                <CarouselItem key={image}>
                  <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#11181f] shadow-2xl shadow-black/20">
                    <img
                      src={`/clinic/${image}`}
                      alt={locale === "he" ? `תמונת קליניקה` : `Clinic image`}
                      className="h-[420px] w-full object-cover transition duration-500 ease-out hover:scale-105"
                      onError={(event) => {
                        const target = event.target as HTMLImageElement
                        target.src = "/placeholder.jpg"
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:inline-flex bg-white/10 text-white hover:bg-white/20" />
            <CarouselNext className="hidden sm:inline-flex bg-white/10 text-white hover:bg-white/20" />

            <div className="mt-6 flex justify-center gap-3 sm:hidden">
              <CarouselPrevious className="bg-white/10 text-white hover:bg-white/20" />
              <CarouselNext className="bg-white/10 text-white hover:bg-white/20" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
