"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollToContact() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: contactSection, offsetY: 80 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="bg-transparent border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-colors backdrop-blur-sm font-roboto-black uppercase tracking-wider mt-6"
    >
      Contáctanos
    </button>
  );
}
