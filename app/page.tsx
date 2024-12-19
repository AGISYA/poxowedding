"use client";

import Booking from "@/components/organisems/booking";
import ChatSection from "@/components/organisems/chat";
import DokumentasiPrewedding from "@/components/organisems/dokumentasi-prewedding";
import Footer from "@/components/organisems/footer";
import Garansi from "@/components/organisems/garansi";
import Hero from "@/components/organisems/hero";
import PhotoboothWedding from "@/components/organisems/Photobooth-wedding";
import WeddingPrices from "@/components/organisems/wedding-prices";
import WeddingPackage from "@/components/organisems/weddingpackage";
import WhyFoxo from "@/components/organisems/whyfoxo";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false); // Mengatur background navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mengatur menu mobile
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting); // Navbar transparan jika Hero terlihat
      },
      { threshold: 0.1 } // Trigger saat 10% Hero terlihat
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all ${
          isScrolled ? "bg-amber-800 " : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 mx-24">
            {["Home", "Photos", "Videos", "Booking", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-white hover:text-blue-500 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
              className="text-white"
            >
              {isMenuOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden p-4 transition-all ${
              isScrolled ? "bg-amber-800 opacity-50" : "bg-transparent"
            } text-white`}
          >
            <ul>
              {["Home", "Photos", "Videos", "Booking", "Contact"].map(
                (item) => (
                  <li key={item} className="my-2">
                    <Link
                      href="#"
                      className="block text-white hover:text-blue-500 transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section with ref */}
      <div ref={heroRef}>
        <Hero />
      </div>

      {/* Other Sections */}
      <ChatSection />
      <DokumentasiPrewedding />
      <PhotoboothWedding />
      <WhyFoxo />
      <Garansi />
      <WeddingPrices />
      <WeddingPackage />
      <Booking />
      <Footer />
    </div>
  );
}
