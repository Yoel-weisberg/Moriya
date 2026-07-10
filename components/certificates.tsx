"use client"

import Link from "next/link"
import { FileText } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const certificates = [
  {
    file: "מורידה - שוודי.pdf",
    labelHe: "תעודת עיסוי שוודי",
    labelEn: "Swedish Massage Certificate",
  },
  {
    file: "מוריה - אינטגרטיבי.pdf",
    labelHe: "תעודת עיסוי אינטגרטיבי",
    labelEn: "Integrative Massage Certificate",
  },
  {
    file: "מוריה - רפואי.pdf",
    labelHe: "תעודת עיסוי רפואי",
    labelEn: "Medical Massage Certificate",
  },
]

export default function Certificates() {
  const { locale } = useLanguage()
  const title = locale === "he" ? "תעודות הסמכה" : "Certificates"
  const subtitle =
    locale === "he"
      ? "צפה בתעודות ההסמכה שלי בקובצי PDF"
      : "View my certification documents in PDF format"

  return (
    <section id="certificates" className="relative py-20 sm:py-24 md:py-28 overflow-hidden bg-[#243038] text-white">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="mt-4 text-base sm:text-lg text-warmBrown-200/80">{subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((certificate) => {
            const href = `/license/${encodeURI(certificate.file)}`
            const label = locale === "he" ? certificate.labelHe : certificate.labelEn
            const thumbnail = `/license/thumbnails/${encodeURI(certificate.file.replace(/\.pdf$/i, ".png"))}`

            return (
              <div
                key={certificate.file}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-4 overflow-hidden rounded-3xl border border-white/10 bg-[#1f2937]">
                  <img
                    src={thumbnail}
                    alt={label}
                    className="h-52 w-full object-cover"
                    onError={(event) => {
                      const target = event.target as HTMLImageElement
                      target.src = "/license/pdf-thumbnail-placeholder.png"
                    }}
                  />
                </div>
                <div className="flex items-center gap-3 mb-4 text-warmBrown-100">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-warmBrown-700/20 text-warmBrown-100">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{label}</h3>
                </div>
                <p className="mb-6 text-sm text-warmBrown-200/80 leading-7">
                  {locale === "he"
                    ? "תצוגה מקדימה וקישור להורדה"
                    : "Thumbnail preview and download link."}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={href}
                    download
                    className="inline-flex items-center justify-center rounded-full bg-warmBrown-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-warmBrown-600"
                  >
                    {locale === "he" ? "הורד" : "Download"}
                  </a>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    {locale === "he" ? "פתח PDF" : "Open PDF"}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
