import React from "react";
import { motion } from "framer-motion";
import Tooltip from "../ui/tooltip/Tooltip";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between each child animation
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-5 md:gap-6"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="px-10 sm:px-16 md:px-36 lg:px-72 text-center space-y-2.5"
        variants={containerVariants}
      >
        <Tooltip content="Get In Touch" position="bottom">
          <motion.h1
            className="text-[#ccd6f6] text-3xl sm:text-4xl md:text-5xl font-semibold"
            variants={itemVariants}
          >
            Crafting Scalable, Elegant{" "}
            <span className="text-[#cbacf9]">Web Solutions</span> That Make a
            Difference.
          </motion.h1>
        </Tooltip>
        <motion.p className="text-xl text-white" variants={itemVariants}>
          I&apos;m not actively seeking opportunities, but always open to
          meaningful conversations—feel free to reach out anytime.
        </motion.p>
      </motion.div>

      <Tooltip content="Reach out anytime">
        <motion.a
          href="mailto:your.email@example.com"
          className="glow-on-hover relative px-6 py-3 text-white bg-[#111] rounded-lg z-10 inline-block text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s get in touch
        </motion.a>
      </Tooltip>
    </motion.div>
  );
};

export default Contact;
