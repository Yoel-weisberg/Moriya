"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/types"
import {IL, US} from "country-flag-icons/react/3x2"
export default function LanguageSwitcher({
  currentLang,
  dict,
  scrolled = false,
}: {
  currentLang: Locale
  dict: {
    switchToEnglish: string
    switchToHebrew: string
  }
  scrolled?: boolean
}) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = () => {
    const newLang = currentLang === "en" ? "he" : "en"
    const currentPath = pathname.split("/").slice(2).join("/") || ""
    router.push(`/${newLang}/${currentPath}`)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={switchLanguage}
      className={`rounded-full p-1 transition-all duration-300 transform hover:scale-110 ${
        scrolled ? "bg-transparent hover:bg-warmBrown-700/20" : "bg-transparent hover:bg-warmBrown-200/50"
      }`}
      title={currentLang === "en" ? dict.switchToHebrew : dict.switchToEnglish}
    >
      {currentLang === "en" ? (
        <IL/>
      ) : (
        <US />
      )}
    </Button>
  )
}

