import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-32 h-32 flex items-center justify-center bg-[#0a192f]">
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 stroke-teal-300 fill-none"
        >
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            className="hexagon-line"
          />
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fontSize="36"
            fill="#64ffda"
            fontFamily="sans-serif"
            className="hexagon-text"
          >
            M
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
