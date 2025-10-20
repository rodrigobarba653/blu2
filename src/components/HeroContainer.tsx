"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroContainerProps {
  children: React.ReactNode;
}

export default function HeroContainer({ children }: HeroContainerProps) {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP ScrollTrigger for hero section border inset animation
    if (heroContainerRef.current) {
      gsap.fromTo(
        heroContainerRef.current,
        {
          borderWidth: "0px",
          borderColor: "transparent",
        },
        {
          borderWidth: "60px",
          borderColor: "#000000",
          ease: "none",
          scrollTrigger: {
            trigger: heroContainerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // GSAP parallax for h1 with data-scroll-speed
      const h1Element = heroContainerRef.current.querySelector(
        "[data-scroll-speed]"
      );
      if (h1Element) {
        const speed = parseFloat(
          h1Element.getAttribute("data-scroll-speed") || "0"
        );
        gsap.to(h1Element, {
          y: () => window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: heroContainerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={heroContainerRef}
      className="max-w-[95vw] mx-auto rounded-4xl md:h-[90vh] h-[100vh] flex items-top justify-center relative overflow-hidden border-0 border-solid border-black!"
    >
      {children}
    </div>
  );
}
