import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TooltipProps } from "@/types/tooltip";

const Tooltip = ({ children, content, position = "top" }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const arrowClasses: Record<string, string> = {
    top: `
      absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full
      w-0 h-0
      border-l-8 border-l-transparent
      border-r-8 border-r-transparent
      border-t-8 border-t-black
    `,
    bottom: `
      absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full
      w-0 h-0
      border-l-8 border-l-transparent
      border-r-8 border-r-transparent
      border-b-8 border-b-black
    `,
    left: `
      absolute right-0 top-1/2 -translate-y-1/2 translate-x-full
      w-0 h-0
      border-t-8 border-t-transparent
      border-b-8 border-b-transparent
      border-l-8 border-l-black
    `,
    right: `
      absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full
      w-0 h-0
      border-t-8 border-t-transparent
      border-b-8 border-b-transparent
      border-r-8 border-r-black
    `,
  };
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children} 
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: position === "top" ? -10 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === "top" ? -10 : 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 px-3 py-2 text-sm text-white bg-black rounded-md whitespace-nowrap shadow-md  text-nowrap
              ${
                position === "top"
                  ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
                  : position === "bottom"
                  ? "top-full mt-2 left-1/2 -translate-x-1/2"
                  : position === "left"
                  ? "right-full mr-2 top-1/2 -translate-y-1/2"
                  : "left-full ml-2 top-1/2 -translate-y-1/2"
              }`}
          >
            {content}
            {/* Arrow */}
            <div className={arrowClasses[position]} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
