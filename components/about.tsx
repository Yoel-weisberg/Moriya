"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

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
      { threshold: 0.1 }
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-t from-[#25363e] to-[#25343b]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12 reveal">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">{dict.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-square rounded-full overflow-hidden bg-warmBrown-200 flex items-center justify-center reveal order-2 md:order-1 w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto mx-auto md:mx-0 transition-transform duration-300 hover:scale-105">
              <Image
                src="https://static.yoelweisberg.com/portfilioio-images/AboutMe.jpg"
                alt="About Us"
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
              />
            </div>

            <div className="space-y-4 order-1 md:order-2">
              {dict.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base md:text-lg text-warmBrown-200 reveal leading-relaxed"
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

