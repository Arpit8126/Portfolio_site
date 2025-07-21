"use client";
import { experiences } from "@/constants/exprience";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
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
              <div className="absolute -left-3 top-4 w-5 h-5 rounded-full bg-purple-500 shadow-md"></div>
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
    </section>
  );
}
