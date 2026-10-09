"use client";

import { useState } from "react";
import Hyperspeed from "./Hyperspeed";

// Matches --color-primary / --color-background / --color-border in
// theme.css; read from the live computed values (client-side only) so
// this stays in sync if those tokens ever change.
const FALLBACK = {
  primary: "#6b30a6",
  background: "#0a0a0b",
  border: "#28282b",
};

function readColor(token: keyof typeof FALLBACK, cssVar: string) {
  if (typeof document === "undefined") return FALLBACK[token];
  const value = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  return value || FALLBACK[token];
}

function readColors() {
  return {
    primary: readColor("primary", "--color-primary"),
    background: readColor("background", "--color-background"),
    border: readColor("border", "--color-border"),
  };
}

export function AmbientBackground() {
  const [colors] = useState(readColors);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-70">
      <Hyperspeed
        curve="winding"
        curvature={0.6}
        speed={0.5}
        fov={90}
        lanes={2}
        roadWidth={9}
        medianWidth={1.5}
        density={22}
        trailLength={0.9}
        lightSize={0.9}
        poles={10}
        dust={40}
        glow={0.4}
        reflections={0.3}
        roadOpacity={0.05}
        roadColor={colors.background}
        lineColor={colors.border}
        tailColors={[colors.primary, "#8b4fc7", "#4a4a80"]}
        headColors={["#9085e9", colors.primary, "#4a4a80"]}
        poleColors={[colors.primary]}
        theme="dark"
        interactive={false}
      />
    </div>
  );
}
