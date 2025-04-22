"use client";

import { useEffect, useRef } from "react";
import ContactLink from "./ContactLink";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

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
    <section dir="ltr" id="contact" ref={sectionRef} className="py-16 md:py-24 bg-[#25363e] reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">{dict.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="reveal order-2 md:order-1">
            <div className="h-[250px] md:h-[400px] bg-white rounded-lg mb-6 md:mb-8 shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4022.874082154398!2d35.19332797610653!3d31.786790133930218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d6342abc4d23%3A0x1023a4c073c9823d!2sGat%20St%207%2C%20Jerusalem!5e1!3m2!1sen!2sil!4v1745321825625!5m2!1sen!2sil"
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
            <div className="bg-white p-5 md:p-8 rounded-lg shadow-lg ">

              <div className="space-y-4 md:space-y-8">
                <ContactLink
                  href={`https://wa.me/${dict.phone.replace(/[^0-9]/g, "")}`}
                  icon={<MessageSquare className="h-5 w-5 md:h-6 md:w-6" />}
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

