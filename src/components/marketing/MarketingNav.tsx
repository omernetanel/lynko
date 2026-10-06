"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function NavLogo({ className = "h-6" }: { className?: string }) {
  return (
    <div dir="ltr">
      <Image src="/lynkologow.png" alt="LYNKO" width={151} height={36} className={`w-auto ${className}`} priority />
    </div>
  );
}

// Flat fill, no absolute-positioned gradient-overlay span: that technique
// (still used on the larger hero CtaLink) didn't clip to rounded-full in
// this browser's rendering — it painted a visible rectangle past the
// pill's corners instead of respecting overflow-hidden (confirmed by
// removing just that span, with every other class unchanged).
function NavCta() {
  return (
    <Link
      href="/demo"
      className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-[filter] hover:brightness-110"
    >
      כניסה לדמו
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
      {/* Mobile/tablet: single floating pill bar — logo and CTA share one
          frosted surface since there's no room to separate them. */}
      <header className="sticky top-4 z-40 mt-4 flex justify-center px-4 sm:px-6 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className={`isolate flex w-full max-w-xl items-center justify-between gap-4 rounded-full border bg-card/80 px-4 py-2 shadow-card backdrop-blur-md transition-colors ${chipBorder}`}
        >
          <NavLogo />
          <NavCta />
        </motion.div>
      </header>

      {/* Desktop: bare logo (no card/border behind it) and the CTA pill sit
          at opposite ends of a shared sticky row, vertically centered —
          sticky (not fixed) so it still reserves its own space in the page
          flow instead of floating on top of whatever scrolls underneath.
          `w-full` is required here: this header is itself a flex item of
          the page's flex-col root, and an auto-margin cross-axis flex item
          doesn't stretch to its max-width the way a plain block div does —
          without it, the row collapsed to fit its own content instead of
          spanning to max-w-6xl, so logo and CTA ended up side by side
          instead of at opposite edges. */}
      <header className="sticky top-4 z-40 mt-4 hidden w-full items-center justify-between px-8 lg:mx-auto lg:flex lg:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <NavLogo className="h-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <NavCta />
        </motion.div>
      </header>
    </>
  );
}
