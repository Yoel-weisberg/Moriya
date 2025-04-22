import type React from "react"
import "@/app/globals.css"
import { type Locale, i18n } from "@/types"
import { getDictionary } from "@/dictionaries"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollObserver from "@/components/scroll-observer"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang} dir={params.lang === "he" ? "rtl" : "ltr" } >
      <body className={`${inter.className} text-foreground ${params.lang === "he" ? "text-right" : "text-left"} `}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header lang={params.lang} dict={dict.navigation} />
          {children}
          <Footer dict={dict.footer} />
          <ScrollObserver />
        </ThemeProvider>
      </body>
    </html>
  )
}

