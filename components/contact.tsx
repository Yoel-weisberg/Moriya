"use client"

import { useEffect, useRef } from "react"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Contact({
  dict,
}: {
  dict: {
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
}) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-warmBrown-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">{dict.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="reveal order-2 md:order-1">
            <div className="h-[250px] md:h-[400px] bg-white rounded-lg mb-6 md:mb-8 shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.92602478796!2d34.72057045!3d32.0879801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2sus!4v1712444582786!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div className="reveal order-1 md:order-2">
            <div className="bg-white p-5 md:p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-warmBrown-800">Get in Touch</h3>

              <div className="space-y-4 md:space-y-8">
                {/* WhatsApp Contact */}
                <Link
                  href={`https://wa.me/${dict.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#25D366]/10 rounded-lg hover:bg-[#25D366]/20 transition-all transform hover:-translate-y-1 hover:shadow-md reveal touch-manipulation"
                >
                  <div className="bg-[#25D366] text-white p-2 md:p-3 rounded-full">
                    <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base text-warmBrown-900">WhatsApp</h4>
                    <p className="text-xs md:text-sm text-warmBrown-700">{dict.phone}</p>
                  </div>
                </Link>

                {/* Phone Contact */}
                <Link
                  href={`tel:${dict.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-warmBrown-200/50 rounded-lg hover:bg-warmBrown-200 transition-all transform hover:-translate-y-1 hover:shadow-md reveal touch-manipulation"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="bg-warmBrown-700 text-white p-2 md:p-3 rounded-full">
                    <Phone className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base text-warmBrown-900">Phone</h4>
                    <p className="text-xs md:text-sm text-warmBrown-700">{dict.phone}</p>
                  </div>
                </Link>

                {/* Email Contact */}
                <Link
                  href={`mailto:${dict.email}`}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-warmBrown-200/50 rounded-lg hover:bg-warmBrown-200 transition-all transform hover:-translate-y-1 hover:shadow-md reveal touch-manipulation"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="bg-warmBrown-700 text-white p-2 md:p-3 rounded-full">
                    <Mail className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base text-warmBrown-900">Email</h4>
                    <p className="text-xs md:text-sm text-warmBrown-700">{dict.email}</p>
                  </div>
                </Link>

                {/* Location */}
                <Link
                  href="https://maps.google.com/?q=Tel+Aviv+Israel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-warmBrown-200/50 rounded-lg hover:bg-warmBrown-200 transition-all transform hover:-translate-y-1 hover:shadow-md reveal touch-manipulation"
                  style={{ animationDelay: "300ms" }}
                >
                  <div className="bg-warmBrown-700 text-white p-2 md:p-3 rounded-full">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base text-warmBrown-900">Location</h4>
                    <p className="text-xs md:text-sm text-warmBrown-700">{dict.address}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

