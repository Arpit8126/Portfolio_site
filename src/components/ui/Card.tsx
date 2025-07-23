import { projectType } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ project }: { project: projectType }) => {
  return (
    <div className="relative flex flex-col items-center justify-center   bg-gray-700 text-white overflow-hidden  p-3  rounded-xl">
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
      {/* image show  */}
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
        className="relative z-10 max-w-xl text-center space-y-6"
      >
        <div className="flex items-center">
          {project?.stack_image?.map((item, idx) => (
            <div
              key={idx}
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
          ))}
        </div>

        <h1 className="text-lg md:text-xl font-semibold text-nowrap">
          {project?.title}
        </h1>
        <p className="text-sm text-gray-300">{project?.description}</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          View on GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default Card;
