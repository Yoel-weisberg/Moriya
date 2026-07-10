"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { IL, US } from "country-flag-icons/react/3x2"

export default function LanguageSwitcher({
  scrolled = false,
}: {
  scrolled?: boolean
}) {
  const { locale, dict, setLocale } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "he" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className={`rounded-full p-1 transition-all duration-300 transform hover:scale-110 ${
        scrolled ? "bg-transparent hover:bg-warmBrown-700/20" : "bg-transparent hover:bg-warmBrown-200/50"
      }`}
      title={locale === "en" ? dict.navigation.switchToHebrew : dict.navigation.switchToEnglish}
    >
      {locale === "en" ? <IL /> : <US />}
    </Button>
  )
}

