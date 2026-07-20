"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Certificates from "@/components/certificates"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import { FAQSection } from "@/components/FAQSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Certificates />
      <Gallery />
      <Testimonials />
      <FAQSection />
      <Contact />
    </main>
  )
}

