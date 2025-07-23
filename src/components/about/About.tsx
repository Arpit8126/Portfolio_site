import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BlurFadeEffectWrapper } from "../ui/BlurFadeEffectWrapper";
import { FlipWords } from "../ui/Flipwords";
import { getCurrentAge } from "@/utils/cn";
const About = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-2 md:gap-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 120 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Image
          className="relative rounded-full mx-auto object-cover aspect-square z-10 ring-2 ring-offset-purple ring-offset-2 ring-blue-200"
          src="/images/profile.jpg"
          alt="my-picture"
          height={180}
          width={180}
          priority
        ></Image>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex text-center md:tracking-wider mb-4 text-md md:text-lg lg:text-xl font-semibold"
      >
        Hi!{" "}
        <motion.div
          initial={{ opacity: 1, rotate: 0 }}
          animate={{ opacity: 1, rotate: [0, 20, -10, 10, -5, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
        >
          👋{" "}
        </motion.div>{" "}
        I&apos;m Abdul Malek
      </motion.div>
      <BlurFadeEffectWrapper delay={0.3}>
        <FlipWords
          className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl leading-6"
          words={[
            "Frontend Developer",
            "Full Stack Developer",
            "Laravel Developer",
            "Enthusiastic Learner ",
          ]}
        />
      </BlurFadeEffectWrapper>
      <div className="flex gap-1 justify-center items-center my-4 max-w-screen-md">
        <BlurFadeEffectWrapper delay={0.38}>
          <p className="text-center md:tracking-wider  text-base md:text-md text-zinc-200">
            A {getCurrentAge()}-year-old Software Engineering graduate from{" "}
            <span className="text-[#cbacf9] font-semibold">Bangladesh</span>,
            passionate about frontend development and driven by a creative
            mindset and attention to detail
          </p>
        </BlurFadeEffectWrapper>
      </div>
      {/* <FlipWords /> */}
      <Light />
      <Light left={0} />
    </div>
  );
};

export default About;

const Light = ({ left = 1 }) => {
  return (
    <div
      className={`fixed ${
        left === 1
          ? "-top-12 left-0 -translate-x-1/2 -translate-y-1/2"
          : "-top-10 -right-20"
      } transform `}
    >
      <div
        className={`w-96 h-96 rounded-full  blur-[100px] ${
          left === 1 ? "opacity-40 bg-yellow-300" : "opacity-30 bg-yellow-200"
        }`}
      ></div>
      <div className="w-40 h-40 rounded-full bg-yellow-200 blur-3xl opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl"></div>
    </div>
  );
};
