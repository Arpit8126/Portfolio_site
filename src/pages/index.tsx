"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

export default function MultiLangNameAnimation() {
  const textRefs = useRef<HTMLSpanElement[]>([]);
  const [langIndex, setLangIndex] = useState(0);
const langs =  useMemo(()=> [
    "Hello  Malek",
    "হ্যালো মালেক",
    "你好  马利克",
    "नमस्ते मालेक",
  ],[])
   

  useEffect(() => {
    if (!textRefs.current.length) return;
    // Clear previous timeline if any
    gsap.killTweensOf(textRefs.current);
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setLangIndex((prev) => (prev + 1) % langs.length);
        }, 1500);
      },
    });

    langs[langIndex].split("").forEach((_, i) => {
      tl.fromTo(
        textRefs.current[i],
        { opacity: 0, y: 20, scale: 0.8, filter: "blur(4px)" , textShadow: "0px 0px 0px #00ffff", },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power3.out",
            textShadow: "0px 0px 12px #00ffff",
         
        },
        i * 0.05
      );
    });
  }, [langIndex, langs]);

  return (
    <div className="flex items-center justify-center h-screen bg-black px-4">
      <div className="text-center font-bold text-white text-4xl uppercase flex flex-wrap justify-center gap-1 select-none">
        {langs[langIndex].split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) textRefs.current[i] = el;
            }}
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}
