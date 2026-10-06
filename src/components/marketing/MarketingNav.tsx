"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function NavLogo() {
  return (
    <div dir="ltr">
      <Image src="/lynkologow.png" alt="LYNKO" width={151} height={36} className="h-6 w-auto" priority />
    </div>
  );
}

function NavCta() {
  return (
    <Link
      href="/demo"
      className="relative overflow-hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-[filter] hover:brightness-110"
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-white/0 to-black/10" />
      <span className="relative">כניסה לדמו</span>
    </Link>
  );
}

export function MarketingNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const chipBorder = isScrolled ? "border-primary/30" : "border-border/60";

  return (
    <>
      {/* Mobile/tablet: single floating pill bar */}
      <header className="sticky top-4 z-40 mt-4 flex justify-center px-4 sm:px-6 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className={`flex w-full max-w-xl items-center justify-between gap-4 rounded-full border bg-card/80 px-4 py-2 shadow-card backdrop-blur-md transition-colors ${chipBorder}`}
        >
          <NavLogo />
          <NavCta />
        </motion.div>
      </header>

      {/* Desktop: logo and CTA float independently at opposite corners */}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-40 hidden lg:block">
        <div className="relative mx-auto max-w-6xl px-8">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className={`pointer-events-auto absolute start-8 top-0 flex items-center rounded-full border bg-card/80 px-4 py-2 shadow-card backdrop-blur-md transition-colors ${chipBorder}`}
          >
            <NavLogo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0.7, 0.2, 1] }}
            className="pointer-events-auto absolute end-8 top-0"
          >
            <NavCta />
          </motion.div>
        </div>
      </div>
    </>
  );
}
