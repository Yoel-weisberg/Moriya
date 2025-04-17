"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react"

export default function Testimonials({
  dict,
}: {
  dict: {
    title: string
    testimonials: {
      name: string
      text: string
    }[]
  }
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Sample WhatsApp screenshot URLs (replace with actual screenshots)
  const whatsappScreenshots = [
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === dict.testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? dict.testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay])

  const pauseAutoplay = () => setAutoplay(false)
  const resumeAutoplay = () => setAutoplay(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
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
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-warmBrown-50 reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">{dict.title}</h2>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          {/* WhatsApp-style testimonial carousel */}
          <div
            className="relative bg-[#E5DDD5] rounded-lg p-3 md:p-4 shadow-lg overflow-hidden"
            style={{ minHeight: "350px" }}
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            onTouchStart={pauseAutoplay}
            onTouchEnd={resumeAutoplay}
          >
            {/* WhatsApp header */}
            <div className="bg-warmBrown-700 text-white p-2 md:p-3 rounded-t-lg -mx-3 md:-mx-4 -mt-3 md:-mt-4 mb-3 md:mb-4 flex items-center">
              <MessageSquare className="mr-2" size={18} />
              <span className="font-medium text-sm md:text-base">Client Testimonials</span>
            </div>

            {/* Testimonial messages */}
            <div className="space-y-4 transition-all duration-500 ease-in-out">
              {dict.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : index < currentSlide
                        ? "opacity-0 -translate-x-full absolute"
                        : "opacity-0 translate-x-full absolute"
                  }`}
                >
                  {/* WhatsApp message bubble */}
                  <div className="whatsapp-message received">
                    <p className="text-xs md:text-sm mb-2">{testimonial.text}</p>
                    <p className="text-xs text-gray-500 text-right">{testimonial.name}</p>
                  </div>

                  {/* WhatsApp screenshot */}
                  <div className="mt-4 flex justify-center">
                    <img
                      src={whatsappScreenshots[index % whatsappScreenshots.length] || "/placeholder.svg"}
                      alt={`WhatsApp screenshot from ${testimonial.name}`}
                      className="rounded-lg shadow-md max-h-[200px] md:max-h-[250px] lg:max-h-[300px] transform transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows - larger touch targets for mobile */}
            <button
              onClick={prevSlide}
              className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 md:p-2 shadow-md hover:bg-white transition-all z-10 touch-manipulation"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-warmBrown-800" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 md:p-2 shadow-md hover:bg-white transition-all z-10 touch-manipulation"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-warmBrown-800" />
            </button>

            {/* Dots indicator - larger for touch */}
            <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center gap-2">
              {dict.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-warmBrown-700 w-4 md:w-5" : "bg-warmBrown-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

