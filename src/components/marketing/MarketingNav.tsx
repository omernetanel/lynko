"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function MarketingNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-40 mt-4 flex justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        className={`flex w-full max-w-xl items-center justify-between gap-4 rounded-full border bg-card/80 px-4 py-2 shadow-card backdrop-blur-md transition-colors ${
          isScrolled ? "border-primary/30" : "border-border/60"
        }`}
      >
        <div dir="ltr">
          <Image src="/lynkologow.png" alt="LYNKO" width={151} height={36} className="h-6 w-auto" priority />
        </div>
        <Link
          href="/demo"
          className="relative overflow-hidden rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-sm transition-[filter] hover:brightness-110"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-white/0 to-black/10" />
          <span className="relative">כניסה לדמו</span>
        </Link>
      </motion.div>
    </header>
  );
}
