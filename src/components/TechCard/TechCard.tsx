import { techStack } from "@/constants/techStack";
import { FileCode } from "lucide-react";
import React, { useState } from "react";
import Tooltip from "../ui/tooltip/Tooltip";

const TechCard = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Frontend */}
        {techStack.map((stack, i) => (
          <div key={i}>
            <TechChildCard stack={stack} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;

const TechChildCard = ({ stack }) => {
  const [hover, setHover] = useState(false);
  const balls = 7;
  const radius = 100;

  return (
    <div
      className="relative w-[300px] h-[300px] mx-auto overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Default Circle Card */}
      <div
        className={`absolute inset-0 border rounded-xl shadow flex items-center justify-center transition-all duration-700 ${
          !hover ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-linear ${
            hover ? "animate-spin-slower" : ""
          }`}
        >
          {stack.children.map((tech, i) => {
            const angle = (i * 2 * Math.PI) / balls;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full transition-all duration-700 ease-in-out flex items-center justify-center"
                style={{
                  backgroundColor: `hsl(${(i * 360) / balls}, 80%, 50%)`,
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <Tooltip content={tech.name}>{tech.icon}</Tooltip>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hover Details Card */}
      <div
        className={`absolute inset-0 border rounded-xl p-6 shadow   transition-all duration-700 ${
          !hover
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
          {stack?.name}
        </h3>

        <div className="space-y-4">
          {stack.children.map(
            (tech: { name: string; icon: React.ReactNode }, idx: any) => (
              <div className="flex items-center gap-3" key={idx}>
                {/* <FileCode className="text-purple-600 w-6 h-6" /> */}
                {tech.icon}
                <span className="text-lg text-gray-700 font-medium">
                  {tech.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
