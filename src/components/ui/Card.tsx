import { projectType } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Tooltip from "./tooltip/Tooltip";

const Card = ({ project }: { project: projectType }) => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-700 text-white overflow-hidden p-3 rounded-xl">
      {/* Gradient blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute -left-[104px] top-1/3 -translate-y-1/2 w-40 h-40 rounded-full bg-purple-600 blur-2xl"
      />
      {/* image show */}
      <div className="relative bg-green-900 px-3 py-3 border-2 rounded-xl">
        <Image
          alt={project?.title}
          src={project?.logo}
          className="relative aspect-square rounded-xl"
          width={1000}
          height={1000}
        />
      </div>
      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-xl text-center space-y-6 pt-4"
      >
        <div className="flex items-center">
          {project?.stack_image?.map((item, idx) => (
            <Tooltip
              key={idx}
              content={item.split("/")[item.split("/")?.length - 1].split(".")[0]}
              position="right"
            >
              <div
                className={`border-2 border-white rounded-full w-10 h-10 flex items-center justify-center p-1 ${
                  idx !== 0 ? "-ml-1.5" : ""
                }`}
              >
                <Image
                  alt={item}
                  src={item}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </Tooltip>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-nowrap">
  Project
</h1>

<p className="text-2xl md:text-3xl text-gray-300 font-semibold">
  Coming Soon...
</p>

<a
  href="https://github.com/Arpit8126" // Replace with your GitHub user link here
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition text-xl md:text-2xl font-semibold"
>
  Coming Soon...
</a>

      </motion.div>
    </div>
  );
};

export default Card;
