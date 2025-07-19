import React from "react";
import { socialLinks } from "@/constants/socialLink";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <div className="hidden sm:block">
        <SocialIcons />
        <EmailFloatingIcon />
      </div>
    </div>
  );
};
export default Navbar;

// === Social Icons ===
function SocialIcons() {
  return (
    <motion.div
      className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col items-center space-y-6 z-50"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4,
          },
        },
      }}
    >
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <motion.div
          key={label}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          <Link
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-[#d3e2f8] group-hover:text-primary transition-all duration-300 relative before:content-[''] before:w-[2px] before:h-32 before:bg-[#94a3b8] 
            before:absolute before:top-[230px] before:left-1/2 before:-translate-x-1/2"
          >
            <Icon className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

// === Email Floating Icon ===
function EmailFloatingIcon() {
  const email = "abdulmalek.swe.585@gmail.com";

  return (
    <motion.div
      className="fixed top-1/2 -right-[73px] -translate-y-1/2 flex flex-col items-center space-y-6 z-50 before:content-[''] before:w-[2px] before:h-64 before:bg-[#94a3b8] 
      before:absolute before:top-[140px] before:left-1/2 before:-translate-x-1/2 before:pointer-events-none"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <a
        href={`https://mail.google.com/mail/?view=cm&to=${email}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send Email"
        className="text-sm group text-[#d3e2f8] rotate-90 hover:text-primary transition-all duration-300 hover:-translate-y-1"
      >
        <span className="transform transition-transform duration-300 group-hover:-translate-y-1">
          {email}
        </span>
      </a>
    </motion.div>
  );
}
