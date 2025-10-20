"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function ArtistAnimations() {
  useEffect(() => {
    // Hero Section - Scale and fade in
    const heroSection = document.querySelector(".artist-hero");
    if (heroSection) {
      gsap.fromTo(
        heroSection,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        }
      );
    }

    // Hero text box - Slide from bottom
    const heroTextBox = document.querySelector(".artist-hero-text");
    if (heroTextBox) {
      gsap.fromTo(
        heroTextBox,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }

    // About section image - Scale and fade
    const aboutImage = document.querySelector(".artist-about-image");
    if (aboutImage) {
      gsap.fromTo(
        aboutImage,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutImage,
            start: "top 75%",
          },
        }
      );
    }

    // About section text - Slide from right
    const aboutText = document.querySelector(".artist-about-text");
    if (aboutText) {
      gsap.fromTo(
        aboutText,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutText,
            start: "top 75%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
