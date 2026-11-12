"use client";
import { useEffect, useRef, useState } from "react";

// Pissoo logo variants (files live directly in public/)
export const LOGO = {
  horizontal: "/logo-horizontal.png",
  stacked: "/logo-stacked.png",
  mark: "/sign.png",
  word: "/wordmark.png",
};

// variant: horizontal | stacked | mark | word. With `compact`, phones get the dolphin-and-tower mark only.
// If a file is missing, a drawn fallback (dolphin plus the name) is shown instead of a broken image.
export default function Logo({ variant = "horizontal", className, height, alt = "Pissoo House", compact }) {
  const ref = useRef(null);
  const [bad, setBad] = useState(false);
  useEffect(() => {
    const im = ref.current;
    if (im && im.complete && im.naturalWidth === 0) setBad(true);
  }, []);
  if (bad) {
    return (
      <svg className={"logo-fb " + (className || "")} viewBox="0 0 230 64" height={height || 48} role="img" aria-label={alt}>
        <g transform="translate(6 8) scale(.9)" stroke="#224a6e" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M4 30L-4 20Q0 30-4 42Z" fill="#e07a2f" />
          <path d="M4 30C12 12 36 8 56 18C64 22 72 24 80 24C74 32 66 32 60 36C44 46 18 46 4 30Z" fill="#224a6e" />
          <path d="M14 30C28 40 48 40 60 34C50 30 28 30 14 30Z" fill="#fffaf0" strokeWidth=".8" />
          <path d="M30 14L38 0L46 16Z" fill="#224a6e" />
        </g>
        <text x="96" y="30" fontSize="24" fill="#224a6e" style={{ fontFamily: "var(--font-display),var(--font),sans-serif" }}>خونه پیسو</text>
        <text x="98" y="52" fontSize="15" fill="#e07a2f" style={{ fontFamily: "var(--font),sans-serif", fontWeight: 700 }}>Pissoo House</text>
      </svg>
    );
  }
  const img = <img ref={ref} className={className} src={LOGO[variant]} alt={alt} height={height} onError={() => setBad(true)} />;
  if (!compact) return img;
  return (
    <picture>
      <source media="(max-width:520px)" srcSet={LOGO.mark} />
      {img}
    </picture>
  );
}
