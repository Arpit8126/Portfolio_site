"use client";
import { experiences } from "@/constants/exprience";
import { cn } from "@/utils/cn";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
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
  return (
    <section className="min-h-screen bg-gradient-to-br    px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="relative border-l border-purple-600 pl-6 space-y-12">
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
                "border border-white/20"
              )}
            >
            
              <div className="flex items-center gap-4 mb-4">
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
                  <p className="font-semibold text-lg ">{exp.name}</p>
                  <p className="text-sm opacity-80 text-[#64ffda]">
                    {exp.title}
                  </p>
                </div>
              </div>
              <p className="text-sm opacity-70 mb-2">{exp.date}</p>
              <ul>
                {exp?.description?.split("▹").map((item, idx) => (
                  <li
                    key={idx}
                    className="relative elative before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda]  px-7 mb-2.5 text-lg leading-[1.3] font-normal font-space"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <Line/>
    </section>
  );
}


const Line = ()=>{ 
  const containerRef = useRef();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [containerRef]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"], // এলিমেন্ট শুরু থেকে শেষ পর্যন্ত স্ক্রলে progress বাড়বে
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const bgColor = useTransform(scrollYProgress, [0, 1], ["#e0e0e0", "#00f0ff"]);

  return (
    <div className="py-10">
      <div
        ref={containerRef}
        className="relative  flex flex-col justify-center items-center gap-2"
      >
        {Array.from({ length: 10 }).map((_, idx) => (
          <div className="" key={idx}>
            <div className="bg-white rounded-full h-32 w-32">{idx}</div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]  bg-red-900 "
        >
          <motion.div
            style={{
              height: heightTransform,
              // opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div> 

  )
}