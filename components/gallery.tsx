"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"

const clinicImages = [
  "clinic1.jpg",
  "clinic2.jpg",
  "clinic3.jpg",
  "clinic4.jpg",
  "clinic5.jpg",
]

export default function Gallery() {
  const { dict, locale } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [expanded, setExpanded] = useState(false)

  const visibleImages = expanded ? clinicImages : clinicImages.slice(0, 3)

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
      className="relative overflow-hidden bg-[#1f2731] py-20 text-white sm:py-24 md:py-28"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-4xl text-center reveal">
          <h2 className="text-2xl font-bold text-warmBrown-100 sm:text-3xl md:text-4xl">
            {dict.gallery.title}
          </h2>
          <p className="mt-4 text-base text-warmBrown-200/80 sm:text-lg">
            {dict.gallery.subtitle}
          </p>
        </div>

        <div className="relative reveal">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleImages.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#11181f] shadow-2xl shadow-black/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`/clinic/${image}`}
                    alt={locale === "he" ? "תמונת קליניקה" : "Clinic image"}
                    className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
                    onError={(event) => {
                      const target = event.target as HTMLImageElement
                      target.src = "/placeholder.jpg"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {clinicImages.length > 3 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {expanded
                  ? locale === "he"
                    ? "הצג פחות"
                    : "Show less"
                  : locale === "he"
                    ? "ראה עוד"
                    : "See more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
