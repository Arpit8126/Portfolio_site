"use client";
import { experiences } from "@/constants/exprience";
import { cn } from "@/utils/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// lib/data/experience.ts

const Exprience = () => {
  return <>{ExperienceSection()}</>;
};

export default Exprience;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function ExperienceSection() {
  // line code here
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [containerRef]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 100%"], // এলিমেন্ট শুরু থেকে শেষ পর্যন্ত স্ক্রলে progress বাড়বে
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const bgColor = useTransform(scrollYProgress, [0, 1], ["#e0e0e0", "#00f0ff"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  return (
    <section className="min-h-screen bg-gradient-to-br    px-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="text-4xl font-bold text-[#ccd6f6] mb-12 flex items-center gap-4 ">
          <span className="shrink-0"> Where I&lsquo;ve Worked</span>
          <hr className="w-full h-[1px] bg-[#233554] border-none" />
        </div>
        <div ref={containerRef} className="relative   border-purple-600 pl-6  ">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={cn(
                "relative bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white",
                "border border-white/20 my-3"
              )}
            >
              {/* <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_0%,_transparent_70%)] blur-2xl opacity-50 pointer-events-none" /> */}

              {/* Lamp Source */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className=" absolute -left-9 top-1/2 -translate-y-1/2 z-50 w-6 h-6 bg-[#64ffda] rounded-full shadow-[#64ffda] shadow-md"
              />

              {/* Glowing Aura */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute -left-[80px] top-[45%] -translate-y-1/2 w-20 h-20 rounded-full bg-[radial-gradient(circle,_rgba(255,255,0,0.7)_0%,_rgba(255,255,0,0.7)_50%,_transparent_80%)] blur-3xl pointer-events-none"
              />

              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={exp.logo}
                    alt={exp.title}
                    width={40}
                    height={40}
                    className="rounded-full object-contain bg-white"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[22px] text-[#ccd6f6] ">{exp.name}</p>
                  <Link
                    target="_blank"
                    href={exp?.live_link}
                    className="text-xl opacity-80 text-[#64ffda]"
                  >
                    {exp.title}
                  </Link>
                </div>
              </div>
              <p className="text-sm opacity-70 mb-4 text-[#8892b0]">{exp.date}</p>
              <ul>
                {exp?.description?.split("▹").map((item, idx) => (
                  <li
                    key={idx}
                    className="relative elative before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda]  px-7 mb-2.5 text-lg leading-[1.3] font-normal font-space text-[#8892b0]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          {/* exprience line here  */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-0 top-0 overflow-hidden z-[-1] w-[2px] bg-[linear-gradient(to_bottom,transparent_0%,#e5e7eb_50%,transparent_99%)] dark:bg-[linear-gradient(to_bottom,transparent_0%,#525252_50%,transparent_99%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 z-30  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
