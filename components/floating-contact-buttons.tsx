"use client"

import { BsWhatsapp } from "react-icons/bs"
import { Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function FloatingContactButtons() {
  const { dict } = useLanguage()
  const phoneNumber = dict.contact.phone.replace(/[^0-9]/g, "")
  const whatsappHref = `https://wa.me/${phoneNumber}`
  const telHref = `tel:${phoneNumber}`

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:bg-[#1ebe5b] focus:outline-none focus:ring-2 focus:ring-white"
      >
        <BsWhatsapp className="h-6 w-6" />
      </a>
      <a
        href={telHref}
        aria-label="Call"
        className="inline-flex items-center justify-center rounded-full bg-warmBrown-700 p-4 text-white shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:bg-warmBrown-600 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
