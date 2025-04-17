"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Locale } from "@/types"
import { Menu } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Header({
  lang,
  dict,
}: {
  lang: Locale
  dict: {
    home: string
    about: string
    testimonials: string
    contact: string
    switchToEnglish: string
    switchToHebrew: string
  }
}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close sheet when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-warmBrown-800/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href={`/${lang}`} className="text-lg md:text-xl font-semibold flex items-center gap-2 group">
          <span
          dir="rtl"
            className={`flex items-center gap-1 transition-colors duration-300 ${
              scrolled ? "text-white" : "text-warmBrown-900"
            }`}
          >
            <span
              className={`transition-colors duration-300 ${scrolled ? "text-warmBrown-300" : "text-warmBrown-700"}`}
            >
              מגע
            </span>{" "}
            לנשמה
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 md:gap-8">
          <Link
            href={`/${lang}#about`}
            className={`text-sm transition-all duration-300 hover:scale-105 ${
              scrolled ? "text-warmBrown-100 hover:text-white" : "text-warmBrown-900 hover:text-warmBrown-700"
            }`}
          >
            {dict.about}
          </Link>
          <Link
            href={`/${lang}#testimonials`}
            className={`text-sm transition-all duration-300 hover:scale-105 ${
              scrolled ? "text-warmBrown-100 hover:text-white" : "text-warmBrown-900 hover:text-warmBrown-700"
            }`}
          >
            {dict.testimonials}
          </Link>
          <Link
            href={`/${lang}#contact`}
            className={`text-sm transition-all duration-300 hover:scale-105 ${
              scrolled ? "text-warmBrown-100 hover:text-white" : "text-warmBrown-900 hover:text-warmBrown-700"
            }`}
          >
            {dict.contact}
          </Link>
          <LanguageSwitcher currentLang={lang} dict={dict} scrolled={scrolled} />
        </nav>

        {/* Mobile Navigation with Sheet */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors duration-300 p-2 ${scrolled ? "text-white hover:bg-warmBrown-700/20" : "text-warmBrown-900 hover:bg-warmBrown-200/50"}`}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-warmBrown-800 text-white border-warmBrown-700 p-0 w-[80vw] max-w-[300px]"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-warmBrown-700">
                  <div className="font-semibold text-xl text-warmBrown-100">Massage Therapy</div>
                </div>

                <nav className="flex-1 overflow-auto py-6 px-6">
                  <div className="space-y-6 flex flex-col">
                    <Link
                      href={`/${lang}#about`}
                      className="text-base py-2 text-warmBrown-100 hover:text-white transition-colors touch-manipulation flex items-center"
                      onClick={() => setOpen(false)}
                    >
                      {dict.about}
                    </Link>
                    <Link
                      href={`/${lang}#testimonials`}
                      className="text-base py-2 text-warmBrown-100 hover:text-white transition-colors touch-manipulation flex items-center"
                      onClick={() => setOpen(false)}
                    >
                      {dict.testimonials}
                    </Link>
                    <Link
                      href={`/${lang}#contact`}
                      className="text-base py-2 text-warmBrown-100 hover:text-white transition-colors touch-manipulation flex items-center"
                      onClick={() => setOpen(false)}
                    >
                      {dict.contact}
                    </Link>

                    <div className="pt-4 border-t border-warmBrown-700 mt-4">
                      <div className="flex items-center py-2">
                        <span className="text-warmBrown-300 mr-3">Language:</span>
                        <LanguageSwitcher currentLang={lang} dict={dict} scrolled={true} />
                      </div>
                    </div>
                  </div>
                </nav>

                <div className="p-6 border-t border-warmBrown-700 mt-auto">
                  <div className="flex justify-center space-x-4">
                    <Link href="#" className="text-warmBrown-300 hover:text-white transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Link>
                    <Link href="#" className="text-warmBrown-300 hover:text-white transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </Link>
                    <Link href="#" className="text-warmBrown-300 hover:text-white transition-colors">
                      <span className="sr-only">WhatsApp</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

