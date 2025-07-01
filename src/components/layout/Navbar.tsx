import React from "react";
import { socialLinks } from "@/constants/socialLink";
import Link from "next/link";
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      {SocialIcons()} {EmailFloatingIcon()}
    </div>
  );
};

export default Navbar;
// components/SocialIcons.tsx

function SocialIcons() {
  return (
    <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col items-center space-y-6 z-50  ">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-[#d3e2f8] group-hover:text-primary transition-all duration-300 relative before:content-[''] before:w-[2px] before:h-32 before:bg-[#94a3b8] 
          before:absolute before:top-[230px] before:left-1/2 before:-translate-x-1/2"
        >
          <Icon className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
        </Link>
      ))}

      {/* Vertical line */}
    </div>
  );
}

function EmailFloatingIcon() {
  const email = "abdulmalek.swe.585@gmail.com";
  return (
    <div
      className="fixed top-1/2 -right-[73px] -translate-y-1/2 flex flex-col items-center space-y-6 z-50 
      before:content-[''] before:w-[2px] before:h-64 before:bg-[#94a3b8] 
      before:absolute before:top-[140px] before:left-1/2 before:-translate-x-1/2 before:pointer-events-none"
    >
      <a
        href="https://mail.google.com/mail/?view=cm&to=abdulmalek.swe.585@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send Email"
        className="text-sm group text-[#d3e2f8] rotate-90 hover:text-primary transition-all duration-300 hover:-translate-y-1"
      >
        <span className="transform transition-transform duration-300 group-hover:-translate-y-1">
          {email}
        </span>
      </a>
    </div>
  );
}
