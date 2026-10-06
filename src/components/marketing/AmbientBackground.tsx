"use client";

import { useState } from "react";
import { GhostFibers } from "./GhostFibers";

// Matches --color-primary in theme.css; read from the live computed value
// (client-side only) so this stays in sync if the token ever changes.
const FALLBACK_PRIMARY = "#6b30a6";

function readPrimaryColor() {
  if (typeof document === "undefined") return FALLBACK_PRIMARY;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();
  return value || FALLBACK_PRIMARY;
}

export function AmbientBackground() {
  const [primary] = useState(readPrimaryColor);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <GhostFibers
        lineColor={primary}
        glowColor={primary}
        scale={2.2}
        layers={4}
        speed={0.18}
        brightness={1.4}
        glowIntensity={1.2}
        vignette={0.85}
        grain={0.04}
        fps={30}
      />
    </div>
  );
}
