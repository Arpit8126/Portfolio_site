import React, { useEffect, useState } from "react";

const Loading = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait for initial animations to finish (1s draw + 1s revealText)
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500); // You can adjust the delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex justify-center h-screen items-center transition-all duration-1000 ${
        fadeOut ? "opacity-0 scale-90" : ""
      }`}
    >
      <div className="w-48 h-48 flex items-center justify-center bg-[#0a192f]">
        <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-teal-300 fill-none">
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            className="hexagon-line"
          />
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fontSize="30"
            fill="#64ffda"
            fontFamily="sans-serif"
            className="hexagon-text"
          >
            Arpit
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
