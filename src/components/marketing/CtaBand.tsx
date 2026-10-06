"use client";

import { motion } from "framer-motion";
import { CtaLink } from "./CtaLink";
import { fadeUp } from "@/lib/motion-variants";

export function CtaBand() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="flex flex-col items-start gap-6 rounded-2xl border border-border/60 bg-card/80 px-6 py-10 shadow-card backdrop-blur-md sm:px-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl lg:max-w-[30ch]">
          מוכנים לראות איך זה עובד?
        </h2>
        <div className="flex flex-col items-start gap-3">
          <CtaLink>נסו את הדמו החי</CtaLink>
          <p className="max-w-[34ch] text-sm text-muted-foreground">
            זה עדיין דמו חי בפיתוח פעיל - ותוכלו לגעת בו עכשיו, בלי לחכות להשקה.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
