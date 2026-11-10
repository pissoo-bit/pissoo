"use client";
import { useEffect, useRef, useState } from "react";

// Pissoo logo set served from /brand/ (see the brand archive). If a file is missing, a drawn dolphin mark with the name is shown instead.
const SRC = {
  horizontal: "/brand/logo-horizontal.png", // mark + name side by side: header
  stacked: "/brand/logo-stacked.png", // mark above the name: footer
  mark: "/brand/logo-mark.png", // shield mark only
};

export default function Logo({ variant = "horizontal", className, height, alt = "Pissoo House" }) {
  const ref = useRef(null);
  const [bad, setBad] = useState(false);
  useEffect(() => {
    const im = ref.current;
    if (im && im.complete && im.naturalWidth === 0) setBad(true);
  }, []);
  if (bad) {
    const markOnly = variant === "mark";
    return (
      <svg className={"logo-fb " + (className || "")} viewBox={markOnly ? "0 0 100 64" : "0 0 230 64"} height={height || 48} role="img" aria-label={alt}>
        <g transform="translate(6 8) scale(.9)" stroke="#224a6e" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M4 30L-4 20Q0 30-4 42Z" fill="#e07a2f" />
          <path d="M4 30C12 12 36 8 56 18C64 22 72 24 80 24C74 32 66 32 60 36C44 46 18 46 4 30Z" fill="#224a6e" />
          <path d="M14 30C28 40 48 40 60 34C50 30 28 30 14 30Z" fill="#fffaf0" strokeWidth=".8" />
          <path d="M30 14L38 0L46 16Z" fill="#224a6e" />
        </g>
        {!markOnly && <text x="96" y="30" fontSize="24" fill="#224a6e" style={{ fontFamily: "var(--font-display),var(--font),sans-serif" }}>خونه پیسو</text>}
        {!markOnly && <text x="98" y="52" fontSize="15" fill="#e07a2f" style={{ fontFamily: "var(--font),sans-serif", fontWeight: 700 }}>Pissoo House</text>}
      </svg>
    );
  }
  return <img ref={ref} className={className} src={SRC[variant] || SRC.horizontal} alt={alt} height={height} onError={() => setBad(true)} />;
}
