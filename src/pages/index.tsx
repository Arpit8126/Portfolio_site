"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const name = "Abdul Malek Sarkar ";

export default function GSAPAnimatedName() {
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalLetters = name.length;
    const radius = 120;               // radius in pixels
    const angleStep = (2 * Math.PI) / totalLetters; // in radians

    // 1) Compute final (x, y) on the circle and store on each <span>
    lettersRef.current.forEach((el, i) => {
      // Angle (start at top = -π/2)
      const angle = i * angleStep - Math.PI / 2;
      const finalX = Math.cos(angle) * radius;
      const finalY = Math.sin(angle) * radius;

      el.dataset.finalX = finalX.toString();
      el.dataset.finalY = finalY.toString();
    });

    // 2) Create a timeline to animate each letter from center → (finalX, finalY)
    const tl = gsap.timeline();

    lettersRef.current.forEach((el, i) => {
      const fx = parseFloat(el.dataset.finalX!);
      const fy = parseFloat(el.dataset.finalY!);

      tl.fromTo(
        el,
        {
          opacity: 0,
          x: 0,
          y: 0,
          scale: 0,
          rotation: 360,
          filter: "blur(4px)",
          textShadow: "0px 0px 0px #00ffff",
        },
        {
          opacity: 1,
          x: fx,
          y: fy,
          scale: 1,
          rotation: 0,
          filter: "blur(0px)",
          textShadow: "0px 0px 12px #00ffff",
          duration: 1,
          ease: "power3.out",
        },
        i * 0.15 // stagger by 0.15s
      );
    });

    // 3) After all letters are placed, spin the container infinitely (very slowly)
    tl.to(
      containerRef.current,
      {
        rotation: 360,
        transformOrigin: "center center",
        ease: "none",
        duration: 20,    // one full rotation over 20 seconds
        repeat: -1,      // infinite repeats
      },
      "+=0.5"           // wait 0.5s after last letter finishes
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div
        ref={containerRef}
        className="
          relative 
          w-[300px] 
          h-[300px]
        "
      >
        {name.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) lettersRef.current[i] = el;
            }}
            className="
            uppercase
              absolute 
              top-1/2 
              left-1/2 
              w-8 
              h-8 
              flex 
              items-center 
              justify-center 
              rounded-full 
              bg-transparent 
              text-white 
              font-bold 
              transform 
              -translate-x-1/2 
              -translate-y-1/2
            "
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}
