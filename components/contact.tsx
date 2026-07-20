"use client";

import { useEffect, useRef, useState } from "react";
import ContactLink from "./ContactLink";
import { Phone, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useLanguage } from "@/components/language-provider"

export default function Contact() {
  const { dict, locale } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [formError, setFormError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, phone, message } = formData

    if (!name || !phone || !message) {
      setFormError(locale === "he" ? "אנא מלאי שם, טלפון והודעה." : "Please complete name, phone, and message.")
      setFormStatus("error")
      return
    }

    setFormError("")
    setFormStatus("idle")

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mgojglol"

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          _subject: locale === "he" ? "טופס לידים מאתר" : "Lead form submission",
        }),
      })

      if (!response.ok) {
        throw new Error("submit failed")
      }

      setFormStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setFormError(
        locale === "he"
          ? "אירעה שגיאה בשליחת הטופס. אנא נסי שנית מאוחר יותר."
          : "Something went wrong sending the form. Please try again later."
      )
      setFormStatus("error")
      console.error("Form submission error:", error)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section dir="ltr" id="contact" ref={sectionRef} className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-[#1a2026]">
      {/* Main background with gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#1a2026] via-[#1f282f] to-[#243038] opacity-95"></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 40%)'
        }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-warmBrown-500/20 to-transparent"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#243038] rounded-full mix-blend-overlay opacity-[0.05] blur-3xl"></div>
        <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] bg-[#1a2026] rounded-full mix-blend-overlay opacity-[0.05] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warmBrown-100">{dict.contact.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="reveal order-1 md:order-1">
            <div className="bg-[#11181f] p-6 sm:p-8 rounded-[2rem] shadow-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-warmBrown-200">{locale === "he" ? "שם" : "Name"}</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      dir={locale === "he" ? "rtl" : "ltr"}
                      className={`mt-2 w-full rounded-2xl border border-white/10 bg-[#11181f] px-4 py-3 text-white outline-none focus:border-warmBrown-500 ${
                        locale === "he" ? "text-right" : "text-left"
                      }`}
                      placeholder={locale === "he" ? "הכנס שם" : "Enter your name"}
                    />
                  </label>
                  <label className="block">
                  <span className="text-sm font-medium text-warmBrown-200">{locale === "he" ? "אימייל" : "Email"}</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      dir={locale === "he" ? "rtl" : "ltr"}
                      className={`mt-2 w-full rounded-2xl border border-white/10 bg-[#11181f] px-4 py-3 text-white outline-none focus:border-warmBrown-500 ${
                        locale === "he" ? "text-right" : "text-left"
                      }`}
                      placeholder={locale === "he" ? "הכנס אימייל" : "Enter your email"}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-warmBrown-200">{locale === "he" ? "טלפון" : "Phone"}</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    dir={locale === "he" ? "rtl" : "ltr"}
                    className={`mt-2 w-full rounded-2xl border border-white/10 bg-[#11181f] px-4 py-3 text-white outline-none focus:border-warmBrown-500 ${
                      locale === "he" ? "text-right" : "text-left"
                    }`}
                    placeholder={locale === "he" ? "הכנס טלפון" : "Enter your phone"}
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-warmBrown-200">{locale === "he" ? "הודעה" : "Message"}</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    dir={locale === "he" ? "rtl" : "ltr"}
                    className={
                      `mt-2 w-full rounded-2xl border border-white/10 bg-[#11181f] px-4 py-3 text-white outline-none focus:border-warmBrown-500 ${
                        locale === "he" ? "text-right" : "text-left"
                      }`
                    }
                    placeholder={locale === "he" ? "הכנס הודעה" : "Enter your message"}
                  />
                </label>

                {formStatus === "error" && (
                  <p className="text-sm text-red-400">{formError}</p>
                )}
                {formStatus === "success" && (
                  <p className="text-sm text-emerald-400">{locale === "he" ? "הטופס נשלח בהצלחה!" : "Form submitted successfully!"}</p>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-warmBrown-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-warmBrown-600"
                >
                  {locale === "he" ? "לקביעת רגע של מגע לנשמה" : "Send"}
                </button>
              </form>
            </div>
          </div>

          <div className="reveal order-2 md:order-2">
            <div className="bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl">
              <div className="space-y-6 md:space-y-8">
                <ContactLink
                  href={`https://wa.me/${dict.contact.phone.replace(/[^0-9]/g, "")}`}
                  icon={<BsWhatsapp className="fab fa-whatsapp h-5 w-5 md:h-6 md:w-6" />}
                  title="WhatsApp"
                  description={dict.contact.phone}
                  bgColor="bg-warmBrown-700"
                />

                <ContactLink
                  href={`tel:${dict.contact.phone.replace(/[^0-9]/g, "")}`}
                  icon={<Phone className="h-5 w-5 md:h-6 md:w-6" />}
                  title="Phone"
                  description={dict.contact.phone}
                  bgColor="bg-warmBrown-700"
                  animationDelay="100ms"
                />

                <ContactLink
                  href={`mailto:${dict.contact.email}`}
                  icon={<Mail className="h-5 w-5 md:h-6 md:w-6" />}
                  title="Email"
                  description={dict.contact.email}
                  bgColor="bg-warmBrown-700"
                  animationDelay="200ms"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

