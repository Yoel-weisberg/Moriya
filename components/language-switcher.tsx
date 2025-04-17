"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/types"

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
        <div className="w-6 h-6 relative overflow-hidden rounded-full border border-warmBrown-200">
          <div className="absolute inset-0 bg-[#0038b8]"></div>
          <div className="absolute inset-[15%] flex justify-center items-center">
            <div className="text-white text-xs transform rotate-45">✡</div>
          </div>
        </div>
      ) : (
        <div className="w-6 h-6 relative overflow-hidden rounded-full border border-warmBrown-200">
          <div className="absolute inset-0 bg-[#012169]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[20%] bg-white"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-[20%] h-full bg-white"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[10%] bg-[#C8102E]"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-[10%] h-full bg-[#C8102E]"></div>
          </div>
        </div>
      )}
    </Button>
  )
}

