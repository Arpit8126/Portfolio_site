// components/GSAPAnimatedName.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const name = "Abdul Malek Sarkar";

export default function GSAPAnimatedName() {
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      {
        opacity: 0,
        y: 50,
        filter: "blur(4px)",
        scale: 0.8,
        textShadow: "0px 0px 0px #00ffff",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        textShadow: "0px 0px 12px #00ffff",
        duration: 1.2,
        ease: "back.out(1.7)",
        stagger: 0.08,
      }
    );
  }, []);

  return (
    <div className="text-4xl md:text-6xl font-bold text-center mt-20 text-white">
      {name.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) lettersRef.current[i] = el;
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
