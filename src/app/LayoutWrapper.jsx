"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppThemeProvider from "@/app/ThemeProvider";

export default function LayoutWrapper({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppThemeProvider>
        <Navbar scrolled={scrolled} />
        {children}
        <Footer />
      </AppThemeProvider>
    </>
  );
}
