"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import NavBarElement from "./navBarElement"
import { useLanguage } from "@/components/language-provider"

export default function Header() {
  const { locale, dict } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      dir={locale === "he" ? "rtl" : "ltr"}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warmBrown-800/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-3 md:py-4"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between direction-normal gap-7 mx-16 ">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="מגע לנשמה"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span
            className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
              scrolled ? "text-white" : "text-warmBrown-200"
            }`}
          >
            מגע לנשמה
          </span>
        </Link>

        <nav className="flex items-center gap-6 md:gap-8 md:text-xl font-bold">
          <NavBarElement href="#about" text={dict.navigation.about} scrolled={scrolled} />
          <NavBarElement href="#certificates" text={dict.navigation.certificates} scrolled={scrolled} />
          <NavBarElement href="#gallery" text={dict.navigation.gallery} scrolled={scrolled} />
          <NavBarElement href="#testimonials" text={dict.navigation.testimonials} scrolled={scrolled} />
          <NavBarElement href="#QNA" text={dict.navigation.QNA} scrolled={scrolled} />
          <NavBarElement href="#contact" text={dict.navigation.contact} scrolled={scrolled} />
        </nav>

        <LanguageSwitcher scrolled={scrolled} />
      </div>

      {/* Mobile Navigation with Sheet */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`transition-colors duration-300 p-2 scale-150 ${
                scrolled
                  ? "text-white hover:bg-warmBrown-700/20"
                  : "text-white hover:bg-warmBrown-200/50"
              }`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-warmBrown-800 text-white border-warmBrown-700 p-0 w-[80vw] max-w-[300px]"
          >
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-warmBrown-700">
                <div className="font-semibold text-xl text-warmBrown-100">
                  מגע לנשמה
                </div>
              </div>

              <nav className="flex-1 overflow-auto py-6 px-6">
                <div className="space-y-6 flex flex-col">
                  <Link
                    href="#about"
                    className="text-base py-2 text-warmBrown-100 hover:text-white transition-colors touch-manipulation flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    {dict.navigation.about}
                  </Link>
                  <Link
                    href="#certificates"
                    className="text-base py-2 text-warmBrown-100 hover:text-white transition-colors touch-manipulation flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    {dict.navigation.certificates}
                  </Link>
                  <Link
                    href="#gallery"
                    className="text-base py-2 text-warmBrown-100 hover:text-white transition-colors touch-manipulation flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    {dict.navigation.gallery}
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-base py-2 text-warmBrown-100 hover:text-white transition-colors touch-manipulation flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    {dict.navigation.testimonials}
                  </Link>
                  <Link
                    href="#contact"
                    className="text-base py-2 text-warmBrown-100 hover:text-white transition-colors touch-manipulation flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    {dict.navigation.contact}
                  </Link>
                  <Link
                    href="#QNA"
                    className="text-base py-2 text-warmBrown-100 hover:text-white transition-colors touch-manipulation flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    {dict.navigation.QNA}
                  </Link>

                  <div className="pt-4 border-t border-warmBrown-700 mt-4">
                    <div className="flex items-center py-2">
                      <LanguageSwitcher scrolled={true} />
                    </div>
                  </div>
                </div>
              </nav>

              <div className="p-6 border-t border-warmBrown-700 mt-auto">
                <div className="flex justify-center space-x-4">
                  <Link
                    href="#"
                    className="text-warmBrown-300 hover:text-white transition-colors"
                  >
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
                  <Link
                    href="#"
                    className="text-warmBrown-300 hover:text-white transition-colors"
                  >
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
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="text-warmBrown-300 hover:text-white transition-colors"
                  >
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
    </header>
  )
}
