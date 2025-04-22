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
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-[#25363e] reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 reveal">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">
            {dict.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto reveal">

            <Slider {...settings}>
              {whatsappScreenshots.map((screenShot, index) => (
                <div key={index}>
                  <div className="mt-4 flex justify-center">
                    <img
                      src={`https://static.yoelweisberg.com/moriyawebsite/${screenShot}`}
                      alt={`WhatsApp screenshot ${index + 1}`}
                      className="rounded-lg shadow-md max-h-[100px] md:max-h-[250px] lg:max-h-[300px] transform transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
    </section>
  );
}

