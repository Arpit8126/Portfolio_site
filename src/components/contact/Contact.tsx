import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex justify-center">
    
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="glow-on-hover relative px-6 py-3 text-white bg-[#111] rounded-lg z-10"
      >
      Let{"'"}s get in touch
      </motion.button>
    </div>
  );
};

export default Contact;
