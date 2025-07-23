import { projectType } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ project }: { project: projectType }) => {
  return (
    <Link
      href={project?.live_link}
      target="_blank"
      className="flex flex-col bg-[#112240] rounded-2xl px-8 py-7 overflow-hidden group"
    >
      {/* Image */}
      <motion.div className="relative z-10">
        <Image
          alt={project?.title}
          src={project?.logo}
          height={1000}
          width={1000}
          className="relative object-cover aspect-square rounded-2xl"
        />
      </motion.div>

      {/* Animated content box */}
      <motion.div
        className="relative z-20 -mt-10 bg-[#112240] p-4 rounded-2xl shadow-lg"
        initial={{ y: 0 }}
        whileHover={{ y: -50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="text-white font-semibold">{project?.title}</div>
        <div className="text-gray-300 text-sm mt-1 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ">
          {project?.description}
        </div>

        {/* GitHub link appears with upward animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-3"
        >
          <Link
            href={project?.github_link}
            target="_blank"
            className="text-blue-400 underline"
          >
            GitHub
          </Link>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Card;
