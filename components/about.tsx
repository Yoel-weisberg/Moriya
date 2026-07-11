"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function About() {
  const { dict } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [expanded, setExpanded] = useState(false)
  const visibleParagraphs = expanded ? dict.about.content : dict.about.content.slice(0, 4)

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
  }, [expanded])

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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warmBrown-100">{dict.about.title}</h2>
          </div>

          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="order-1">
              <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl shadow-black/10">
                {visibleParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base sm:text-lg leading-8 text-warmBrown-200/90 reveal"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {paragraph}
                  </p>
                ))}

                {dict.about.content.length > 4 && (
                  <button
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    className="inline-flex items-center justify-center rounded-full bg-warmBrown-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-warmBrown-600"
                  >
                    {expanded ? "הצג פחות" : "קרא עוד"}
                  </button>
                )}
              </div>
            </div>

            <div className="order-2 flex justify-center">
              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-warmBrown-400/25 via-transparent to-warmBrown-700/20 blur-3xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-full border border-white/15 bg-[#243038]/70 p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] reveal transition-transform duration-300 hover:scale-[1.01]">
                  <div className="absolute inset-2 rounded-full border border-white/10"></div>
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src="/about.png"
                      alt="About Us"
                      fill
                      className="object-contain p-2 transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

