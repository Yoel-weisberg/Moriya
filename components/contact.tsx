"use client";

import { useEffect, useRef } from "react";
import ContactLink from "./ContactLink";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact({
  dict,
}: {
  dict: {
    title: string;
    address: string;
    phone: string;
    email: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    successMessage: string;
    errorMessage: string;
  };
}) {
  const sectionRef = useRef<HTMLElement>(null);

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warmBrown-100">{dict.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="reveal order-2 md:order-1">
            <div className="relative h-[280px] md:h-[400px] rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-warmBrown-700/10 to-transparent pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4022.874082154398!2d35.19332797610653!3d31.786790133930218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d6342abc4d23%3A0x1023a4c073c9823d!2sGat%20St%207%2C%20Jerusalem!5e1!3m2!1sen!2sil!4v1745321825625!5m2!1sen!2sil"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="rounded-2xl pointer-events-auto"
              ></iframe>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-warmBrown-400/10 to-transparent opacity-30 blur-sm pointer-events-none"></div>
            </div>
          </div>

          <div className="reveal order-1 md:order-2">
            <div className="bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl">
              <div className="space-y-6 md:space-y-8">
                <ContactLink
                  href={`https://wa.me/${dict.phone.replace(/[^0-9]/g, "")}`}
                  icon={<BsWhatsapp className="fab fa-whatsapp h-5 w-5 md:h-6 md:w-6" />}
                  title="WhatsApp"
                  description={dict.phone}
                  bgColor="bg-warmBrown-700"
                />

                <ContactLink
                  href={`tel:${dict.phone.replace(/[^0-9]/g, "")}`}
                  icon={<Phone className="h-5 w-5 md:h-6 md:w-6" />}
                  title="Phone"
                  description={dict.phone}
                  bgColor="bg-warmBrown-700"
                  animationDelay="100ms"
                />

                <ContactLink
                  href={`mailto:${dict.email}`}
                  icon={<Mail className="h-5 w-5 md:h-6 md:w-6" />}
                  title="Email"
                  description={dict.email}
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

