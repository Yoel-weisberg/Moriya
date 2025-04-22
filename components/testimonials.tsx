"use client";

import { useState, useEffect, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials({
  dict,
}: {
  dict: {
    title: string;
    testimonials: {
      name: string;
      text: string;
    }[];
  };
}) {
  const whatsappScreenshots = [
    "screenshot2.jpg",
    "screenshot3.jpg",
    "screenshot4.jpg",
    "screenshot1.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-[#243038]">
      {/* Main background with gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.1] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#243038] via-[#1f282f] to-[#1a2026] opacity-95"></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.07) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(255,255,255,0.05) 0%, transparent 40%)'
        }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-warmBrown-600/20 to-transparent"></div>
        <div className="absolute top-1/4 left-[-20%] w-[800px] h-[800px] bg-[#1a2026] rounded-full mix-blend-overlay opacity-[0.05] blur-3xl"></div>
        <div className="absolute bottom-1/4 right-[-20%] w-[800px] h-[800px] bg-[#2a3842] rounded-full mix-blend-overlay opacity-[0.05] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warmBrown-100">
            {dict.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <Slider {...settings}>
              {whatsappScreenshots.map((screenShot, index) => (
                <div key={index}>
                  <div className="flex justify-center px-4">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-warmBrown-700/10 to-transparent"></div>
                      <img
                        src={`https://static.yoelweisberg.com/moriyawebsite/${screenShot}`}
                        alt={`WhatsApp screenshot ${index + 1}`}
                        className="max-h-[120px] sm:max-h-[200px] md:max-h-[280px] lg:max-h-[320px] w-auto transform transition-all duration-500 hover:scale-[1.02]"
                      />
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-warmBrown-400/10 to-transparent opacity-30 blur-sm"></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

