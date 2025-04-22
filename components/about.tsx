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
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-[#1f282f]"
    >
      {/* Main background with gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.12] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1f282f] via-[#243038] to-[#2a3842] opacity-95"></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 40%)'
        }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-warmBrown-500/20 to-transparent"></div>
        <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] bg-[#2a3842] rounded-full mix-blend-overlay opacity-[0.06] blur-3xl"></div>
        <div className="absolute bottom-1/3 left-[-10%] w-[600px] h-[600px] bg-[#1f282f] rounded-full mix-blend-overlay opacity-[0.06] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16 reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warmBrown-100">{dict.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-warmBrown-900/10 flex items-center justify-center reveal order-2 md:order-1 w-56 h-56 sm:w-72 sm:h-72 md:w-full md:h-auto mx-auto md:mx-0 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-warmBrown-700/10 to-transparent"></div>
              <Image
                src="https://static.yoelweisberg.com/portfilioio-images/AboutMe.jpg"
                alt="About Us"
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-[1.02]"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-br from-warmBrown-400/10 to-transparent opacity-50 blur-sm"></div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              {dict.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-warmBrown-200/90 reveal leading-relaxed"
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

