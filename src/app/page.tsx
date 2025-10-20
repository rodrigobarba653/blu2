"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Client component for scroll functionality
function ScrollToContact() {
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

export default function Home() {
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
    }

    // GSAP parallax for h1 with data-scroll-speed
    const h1Element = document.querySelector("[data-scroll-speed]");
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

    // Stats Bar - Fade in and slide up with stagger
    const statItems = document.querySelectorAll(".stats-bar-item");
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

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Main content with top padding for fixed nav */}
      <main className="pt-4">
        {/* Hero Section */}
        <section className="md:px-8 px-4 relative">
          <div
            ref={heroContainerRef}
            className="max-w-[95vw] mx-auto rounded-4xl md:h-[90vh] h-[100vh] flex items-top justify-center relative overflow-hidden border-0 border-solid border-black!"
          >
            {/* Background Images */}
            <div className="absolute inset-0 z-20">
              <Image
                src="/images/hero-1.png"
                alt="Hero Background"
                className="w-full h-full object-cover mt-2"
                fill
                priority
              />
            </div>
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero-2.png"
                alt="Hero Background"
                className="w-full h-full object-cover"
                fill
              />
            </div>

            <div className="md:text-left text-center mb-16 relative z-10 xl:mt-20 lg:mt-24 md:mt-32 mt-20">
              <h1
                data-scroll-speed="-0.5"
                className="xl:text-[12.5rem] lg:text-[9rem] md:text-[6rem] text-[6.4rem] xl:leading-[12rem] lg:leading-[9rem] md:leading-[6rem] leading-[5rem] font-roboto-black text-white heading-letterspacing-3xl"
              >
                vive la música
              </h1>
              <p className="text-lg font-roboto-regular text-white xl:max-w-lg lg:max-w-96 md:max-w-72 max-w-none leading-relaxed text-left hidden md:block">
                Representamos a artistas de alto impacto y los conectamos con
                escenarios clave. Elevamos carreras y creamos experiencias que
                dejan huella.
              </p>
            </div>
          </div>
          <p className="text-white text-lg leading-relaxed text-left block md:hidden  relative z-30 -mt-20">
            Representamos a artistas de alto impacto y los conectamos con
            escenarios clave. Elevamos carreras y creamos experiencias que dejan
            huella.
          </p>
        </section>

        {/* Stats Bar */}
        <section className="py-16 relative md:px-8 px-4">
          {/* Gradient BG */}
          <div className="bg-[#1A18E8]/60 w-[500px] h-[500px] absolute -top-20 left-0 blur-[400px]"></div>

          {/* Stats Bar Content */}
          <div className="stats-bar-content bg-gradient-to-r from-slate-700/30 via-slate-600/30 to-slate-600/30 backdrop-blur-sm rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-slate-600 max-w-7xl mx-auto w-full">
            <div className="stats-bar-item text-center">
              <div className="text-4xl font-roboto-black text-white mb-2">
                500+
              </div>
              <div className="text-white font-roboto-regular">
                Conciertos y eventos privados
              </div>
            </div>
            <div className="stats-bar-item text-center">
              <div className="text-4xl font-roboto-black text-white mb-2">
                15+
              </div>
              <div className="text-white font-roboto-regular">
                Años de Experiencia
              </div>
            </div>
            <div className="stats-bar-item text-center">
              <div className="text-4xl font-roboto-black text-white mb-2">
                80+
              </div>
              <div className="text-white font-roboto-regular">
                Ciudades Alcanzadas
              </div>
            </div>
            <div className="stats-bar-item text-center">
              <div className="text-4xl font-roboto-black text-white mb-2">
                100+
              </div>
              <div className="text-white font-roboto-regular">
                Artistas Representados
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="md:px-8 px-4 py-16 relative">
          {/* Gradient BG */}
          <div className="bg-[#1A18E8]/60 w-[500px] h-[500px] absolute -bottom-40 right-0 blur-[400px] z-0"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div className="about-image order-2 md:order-1 bg-primary md:h-[600px] h-[320px] rounded-4xl overflow-hidden">
                <Image
                  src="/images/about-us.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover relative!"
                  fill
                />
              </div>
              <div className="about-text order-1 md:order-2">
                <div className="text-xl text-white md:mb-4 mb-0 font-roboto">
                  NOSOTROS
                </div>
                <h2 className="lg:text-7xl md:text-6xl text-5xl font-roboto-black text-white mb-6 heading-letterspacing-lg">
                  traemos íconos a tu escenario
                </h2>
                <p className="text-white text-lg leading-relaxed font-roboto-regular">
                  Durante más de 20 años hemos trabajado con artistas, marcas y
                  gobiernos, nacionales e internacionales, para posicionarnos
                  como una compañía con un &ldquo;Boutique Client
                  Experience&rdquo;, por lo cual damos seguimiento continuo,
                  eficiente y personalizado a todos nuestros clientes.
                </p>
                <ScrollToContact />
              </div>
            </div>
          </div>
        </section>

        {/* Artist Spotlight - Miguel Bosé */}
        <section className="md:px-8 px-4 md:py-24 py-16 relative">
          <div className="artist-spotlight max-w-7xl mx-auto bg-primary h-[640px] rounded-[48px] relative overflow-hidden z-10">
            <Image
              src="/images/bose.jpg"
              alt="About Us"
              className="w-full h-full object-cover relative! z-0 md:block hidden"
              fill
            />
            <Image
              src="/images/bose-mobile.jpg"
              alt="About Us"
              className="w-full h-full object-cover relative! z-0 md:hidden block sm:object-center object-bottom"
              fill
            />
            <div className="lg:max-w-lg max-w-md bg-black rounded-br-4xl md:p-8 p-4 absolute z-20 top-0">
              <div className="text-xl text-white md:mb-4 mb-2 font-roboto">
                ARTISTA
              </div>
              <h2 className="lg:text-7xl md:text-6xl text-4xl font-roboto-black text-white heading-letterspacing-lg">
                Miguel Bosé
              </h2>
              {/* Round elements */}
              <div className="absolute -top-[3px] -right-[58px] z-20 w-16 h-16">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover rotate-90"
                  fill
                />
              </div>
              <div className="absolute -bottom-[61px] -left-[6px] z-20 w-16 h-16">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover rotate-90"
                  fill
                />
              </div>
            </div>
            <div className="absolute md:bottom-0 bottom-0 left-0 max-w-xl bg-black rounded-tr-4xl sm:p-8 p-4 px-4">
              <p className="text-white text-lg leading-relaxed font-roboto-regular mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link
                className="text-white font-roboto-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors border-b border-white hover:border-primary w-fit"
                href="/artist/miguel-bose"
              >
                Ver más
                <Icon icon="mdi:arrow-right" className="text-xl" />
              </Link>
              {/* Round elements */}
              <div className="absolute -bottom-[5px] -right-[61px] z-20 w-16 h-16 md:block hidden">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover"
                  fill
                />
              </div>
              <div className="absolute -top-[58px] -left-[3px] z-20 w-16 h-16">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </section>

        {/* Artist Spotlight - Flans */}
        <section className="px-8 md:py-24 py-16 relative">
          {/* Gradient BG */}
          <div className="bg-[#1A18E8]/70 w-[500px] h-[500px] absolute top-20 left-0 blur-[400px] z-0"></div>

          <div className="artist-spotlight max-w-7xl mx-auto bg-amber-50 h-[640px] rounded-[48px] relative overflow-hidden">
            <Image
              src="/images/flan.jpg"
              alt="About Us"
              className="w-full h-full object-cover relative! z-0 md:block hidden"
              fill
            />
            <Image
              src="/images/flan-mobile.jpg"
              alt="About Us"
              className="w-full h-full object-cover relative! z-0 md:hidden block -mt-16"
              fill
            />
            <div className="lg:max-w-lg max-w-md bg-black md:rounded-bl-4xl rounded-bl-none md:rounded-br-none rounded-br-4xl md:p-8 p-4 absolute z-20 top-0 md:right-0">
              <div className="text-xl text-white mb-0 font-roboto">ARTISTA</div>
              <h2 className="lg:text-7xl md:text-6xl text-4xl font-roboto-black text-white heading-letterspacing-lg">
                Flans
              </h2>
              {/* Round elements */}
              <div className="absolute md:-top-[6px] -top-[3px] md:-left-[61px] md:right-auto -right-[58px] z-20 w-16 h-16">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover md:rotate-180 rotate-90"
                  fill
                />
              </div>
              <div className="absolute md:-bottom-[58px] -bottom-[61px] md:left-auto -left-[6px] md:-right-[3px] z-20 w-16 h-16">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover md:rotate-180 rotate-90"
                  fill
                />
              </div>
            </div>
            <div className="absolute md:bottom-0 bottom-0 md:right-0 md:left-auto right-0 left-0 max-w-xl bg-black md:rounded-tr-none rounded-tr-4xl md:rounded-tl-4xl rounded-tl-none md:p-8 p-4 px-4">
              <p className="text-white text-lg leading-relaxed font-roboto-regular mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link
                className="text-white font-roboto-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors border-b border-white hover:border-primary w-fit"
                href="/artist/flans"
              >
                Ver más
                <Icon icon="mdi:arrow-right" className="text-xl" />
              </Link>
              {/* Round elements */}
              <div className="absolute -bottom-[5px] md:right-auto -left-[58px] -right-[61px] z-20 w-16 h-16 md:block hidden ">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover md:-rotate-90 rotate-0"
                  fill
                />
              </div>
              <div className="absolute md:-top-[61px] -top-[58px] md:-right-[6px] right-auto md:left-auto -left-[3px] z-20 w-16 h-16">
                <Image
                  src="/images/corners.svg"
                  alt="Round Elements"
                  className="w-full object-cover md:-rotate-90 rotate-0"
                  fill
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="md:px-8 px-4 md:py-16 py-16 relative">
          {/* Gradient BG */}
          <div className="bg-[#1A18E8]/70 w-[500px] h-[500px] absolute -bottom-40 right-0 blur-[400px] z-0"></div>

          <div className="max-w-7xl mx-auto">
            <div className="order-1 md:order-2">
              <div className="text-xl text-white mb-0 font-roboto">
                SERVICIOS
              </div>
              <h2 className="lg:text-7xl md:text-6xl text-5xl font-roboto-black text-white mb-6 heading-letterspacing-lg">
                que ofrecemos
              </h2>
              <ScrollToContact />
              {/* Grid of services */}
              <div className="services-grid grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-16">
                <div className="service-card bg-gradient-to-r from-slate-700/30 via-slate-600/30 to-slate-600/30 backdrop-blur-sm rounded-3xl p-8 gap-8 border border-slate-600">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 relative mx-auto mb-8">
                      <Image
                        src="/images/icon-1.svg"
                        alt="Production"
                        className="object-cover h-full"
                        fill
                      />
                    </div>
                    <h3 className="text-xl font-roboto-black mb-2">
                      Producción y logística
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="service-card bg-gradient-to-r from-slate-700/30 via-slate-600/30 to-slate-600/30 backdrop-blur-sm rounded-3xl p-8 gap-8 border border-slate-600">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 relative mx-auto mb-8">
                      <Image
                        src="/images/icon-2.svg"
                        alt="Production"
                        className="object-cover h-full"
                        fill
                      />
                    </div>
                    <h3 className="text-xl font-roboto-black mb-2">
                      Contratación de Talento
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="service-card bg-gradient-to-r from-slate-700/30 via-slate-600/30 to-slate-600/30 backdrop-blur-sm rounded-3xl p-8 gap-8 border border-slate-600">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 relative mx-auto mb-8">
                      <Image
                        src="/images/icon-3.svg"
                        alt="Production"
                        className="object-cover h-full"
                        fill
                      />
                    </div>
                    <h3 className="text-xl font-roboto-black mb-2">
                      Hospitality
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="service-card bg-gradient-to-r from-slate-700/30 via-slate-600/30 to-slate-600/30 backdrop-blur-sm rounded-3xl p-8 gap-8 border border-slate-600">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 relative mx-auto mb-8">
                      <Image
                        src="/images/icon-4.svg"
                        alt="Production"
                        className="object-cover h-full"
                        fill
                      />
                    </div>
                    <h3 className="text-xl font-roboto-black mb-2">
                      Proyectos a la Medida
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="md:px-8 px-4 py-16 relative">
          {/* Gradient BG */}
          <div className="bg-[#1A18E8]/60 w-[500px] h-[500px] absolute -bottom-20 left-0 blur-[400px] z-0"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Side - Get in Touch */}
              <div className="md:space-y-8">
                <h2 className="lg:text-8xl md:text-7xl text-6xl font-roboto-black text-white heading-letterspacing-lg">
                  contáctanos
                </h2>

                {/* Dot Pattern */}
                <div className="md:grid grid-cols-8 gap-4 opacity-30 hidden">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-white rounded-full"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Right Side - Contact Information */}
              <div className="grid grid-cols-2 gap-8 h-fit">
                {/* Address */}
                <div className="flex items-start gap-4 h-fit">
                  <div className="w-6 h-6 mt-1">
                    <Icon
                      icon="mdi:map-marker"
                      className="text-white text-2xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-roboto-black text-white mb-2">
                      Address
                    </h3>
                    <div className="text-white font-roboto-regular space-y-1 text-sm">
                      <p>México City</p>
                      <p>25 Reforma Avenue, Centro,</p>
                      <p>México City, 06000</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 h-fit">
                  <div className="w-6 h-6 mt-1">
                    <Icon icon="mdi:phone" className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-roboto-black text-white mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+525512345678"
                      className="text-white font-roboto-regular hover:text-primary transition-colors text-sm"
                    >
                      +52 55 1234 5678
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 h-fit">
                  <div className="w-6 h-6 mt-1">
                    <Icon icon="mdi:email" className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-roboto-black text-white mb-2">
                      Mail
                    </h3>
                    <a
                      href="mailto:hello@blu2.com"
                      className="text-white font-roboto-regular hover:text-primary transition-colors text-sm"
                    >
                      hello@blu2.com
                    </a>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="flex items-start gap-4 h-fit">
                  <div className="w-6 h-6 mt-1">
                    <Icon icon="mdi:thumb-up" className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-roboto-black text-white mb-3">
                      Follow Us
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <Icon
                          icon="mdi:linkedin"
                          className="text-white text-sm"
                        />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <Icon
                          icon="mdi:twitter"
                          className="text-white text-sm"
                        />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <Icon
                          icon="mdi:instagram"
                          className="text-white text-sm"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
