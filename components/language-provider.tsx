"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { Dictionary, Locale } from "@/types"
import { i18n } from "@/types"
import enDict from "@/dictionaries/en.json"
import heDict from "@/dictionaries/he.json"

const LanguageContext = createContext<{
  locale: Locale
  dict: Dictionary
  setLocale: (locale: Locale) => void
  ready: boolean
}>({
  locale: i18n.defaultLocale,
  dict: enDict,
  setLocale: () => {},
  ready: true,
})

const dictionaries: Record<Locale, Dictionary> = {
  en: enDict,
  he: heDict,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(i18n.defaultLocale)
  const [dict, setDict] = useState<Dictionary>(enDict)

  useEffect(() => {
    const stored = window.localStorage.getItem("lang") as Locale | null
    if (stored === "en" || stored === "he") {
      setLocale(stored)
    }
  }, [])

  useEffect(() => {
    setDict(dictionaries[locale])
    window.localStorage.setItem("lang", locale)
  }, [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr"
  }, [locale])

  const value = useMemo(
    () => ({ locale, dict, setLocale, ready: Boolean(dict) }),
    [locale, dict],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
