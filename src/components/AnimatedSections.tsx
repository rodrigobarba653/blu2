"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSections() {
  useEffect(() => {
    // Stats Bar - Fade in and slide up with stagger
    const statItems = document.querySelectorAll(".stats-bar-item");
    if (statItems.length > 0) {
      gsap.fromTo(
        statItems,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-bar-content",
            start: "top 80%",
          },
        }
      );
    }

    // About Us Section - Parallax image and text reveal
    const aboutImage = document.querySelector(".about-image");
    const aboutText = document.querySelector(".about-text");

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

    // Artist Spotlight Sections - Scale and fade in
    const artistSections = document.querySelectorAll(".artist-spotlight");
    artistSections.forEach((section) => {
      gsap.fromTo(
        section,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });

    // Services Cards - Stagger fade and slide up
    const serviceCards = document.querySelectorAll(".service-card");
    if (serviceCards.length > 0) {
      gsap.fromTo(
        serviceCards,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
          },
        }
      );
    }

    // Contact Section - Fade in with subtle scale
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      gsap.fromTo(
        contactSection,
        { scale: 0.98, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactSection,
            start: "top 85%",
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
