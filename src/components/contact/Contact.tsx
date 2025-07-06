import React from "react";
import { motion } from "framer-motion";
import Tooltip from "../ui/tooltip/Tooltip";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 md:gap-6 "
      id="contact"
    >
      <div className="px-10 sm:px-16 md:px-36 lg:px-72 text-center space-y-2.5">
        <Tooltip content="Get In Touch" position="bottom">
          <h1 className="text-[#ccd6f6] text-5xl font-semibold">
            Get In Touch
          </h1>
        </Tooltip>{" "}
        <p className="text-xl ">
          While I&apos;m not actively seeking new opportunities at the moment,
          I&apos;m always open to meaningful conversations. If you have a
          question, a collaboration idea, or simply want to say hello — feel
          free to reach out. I&apos;ll do my best to respond promptly
        </p>
      </div>
      <Tooltip content="Reach out anytime">
        <motion.a
          href="mailto:your.email@example.com"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="glow-on-hover relative px-6 py-3 text-white bg-[#111] rounded-lg z-10 inline-block text-center"
        >
          Let&apos;s get in touch
        </motion.a>
      </Tooltip>
    </div>
  );
};

export default Contact;
