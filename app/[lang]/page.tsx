import type { Locale } from "@/types"
import { getDictionary } from "@/dictionaries"
import Hero from "@/components/hero"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Testimonials dict={dict.testimonials} />
      <Contact dict={dict.contact} />
    </main>
  )
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "he" }]
}

