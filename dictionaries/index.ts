import "server-only"
import type { Locale, Dictionary } from "@/types"

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default as Dictionary),
  he: () => import("./he.json").then((module) => module.default as Dictionary),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

