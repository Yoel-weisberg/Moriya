export type Locale = "en" | "he"

export const i18n = {
  defaultLocale: "en" as const,
  locales: ["en", "he"] as const,
}

export type Dictionary = {
  metadata: {
    title: string
    description: string
  }
  navigation: {
    home: string
    about: string
    testimonials: string
    contact: string
    switchToEnglish: string
    switchToHebrew: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  about: {
    title: string
    content: string[]
  }
  testimonials: {
    title: string
    testimonials: {
      name: string
      text: string
    }[]
  }
  contact: {
    title: string
    address: string
    phone: string
    email: string
    formName: string
    formEmail: string
    formMessage: string
    formSubmit: string
    successMessage: string
    errorMessage: string
  }
  footer: {
    rights: string
  }
}

