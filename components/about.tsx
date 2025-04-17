"use client"

import { useEffect, useRef } from "react"

export default function About({
  dict,
}: {
  dict: {
    title: string
    content: string[]
  }
}) {
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
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-warmBrown-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12 reveal">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">{dict.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square rounded-full overflow-hidden bg-warmBrown-200 flex items-center justify-center reveal order-2 md:order-1 max-w-[250px] md:max-w-none mx-auto md:mx-0">
              <div className="w-4/5 h-4/5 rounded-full bg-[url('/placeholder.svg?height=500&width=500')] bg-cover bg-center shadow-lg transform transition-all duration-500 hover:scale-105"></div>
            </div>

            <div className="space-y-4 order-1 md:order-2">
              {dict.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base text-warmBrown-800 reveal"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

