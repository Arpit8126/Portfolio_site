"use client";

import { LottiePlayer } from "lottie-react";
import {
  GitBranch,
  Paintbrush,
  FileCode,
  Server,
  Database,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import Image from "next/image";
import { log } from "@/lib/log";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

export default function Skills() {
  const [hover, setHover] = useState(false);
  const balls = 7;
  const radius = 100;
  return (
    <section className="  ">
      <div
        className="relative w-[300px] h-[300px] border   mx-auto"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={`absolute inset-0 transition-transform duration-1000 ease-linear ${hover?'animate-spin-slower':''}`}>
          {Array.from({ length: balls }).map((_, i) => {
            const angle = (i * 2 * Math.PI) / balls;
            const x = hover ? Math.cos(angle) * radius : 0;
            const y = hover ? Math.sin(angle) * radius : 0;

            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full transition-all duration-700 ease-in-out"
                style={{
                  backgroundColor: `hsl(${(i * 360) / balls}, 80%, 50%)`,
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          My Tech Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="border rounded-xl p-6 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              Frontend
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12">
                  sdf
                  {/* <LottiePlayer
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/packages/lf20_jtbfg2nb.json" // React animation
                  /> */}
                </div>
                <span className="text-lg text-gray-700 font-medium">React</span>
              </div>

              <div className="flex items-center gap-4">
                <FileCode className="text-purple-600 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">
                  Tailwind CSS
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FileCode className="text-blue-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="border rounded-xl p-6 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              Backend
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Server className="text-green-600 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">
                  Node.js
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Database className="text-green-800 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="border rounded-xl p-6 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              Tools
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <GitBranch className="text-orange-600 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Git</span>
              </div>

              <div className="flex items-center gap-4">
                <Paintbrush className="text-pink-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* github technical  */}
   
      <div className="flex justify-center">   <GithubContribute /></div>
    </section>
  );
}

const GithubContribute = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/AbdulMalek-swe")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        log("Skill", "show github info", data);
        setInfo(data);
      });
  }, []);
  return (
    <>
      <GitHubInsights info={info} />{" "}
    </>
  );
};
// components/GitHubInsights.tsx

const GitHubInsights = ({ info }: any) => {
  const contributionsData = {
    labels: ["07", "09", "11", "01", "02", "03", "04", "06"],
    datasets: [
      {
        label: "Contributions",
        data: [5, 12, 33, 18, 4, 9, 11, 1],
        borderColor: "#00BFFF",
        backgroundColor: "#00BFFF99",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const languagesData = {
    labels: ["JavaScript", "TypeScript"],
    datasets: [
      {
        data: [71.5, 28.5],
        backgroundColor: ["#facc15", "#a855f7"],
        borderWidth: 0,
      },
    ],
  };
  const now: any = new Date();
  const createdAt: any = new Date(info?.created_at);
  const diffInMs = now - createdAt;
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  const year = Number(diffInYears.toFixed(2));
  return (
    <div className="p-6 bg-[#0f172a] text-white">
      <h2 className="text-2xl font-semibold mb-4">GitHub Overview</h2>

      <div className="flex gap-4">
        {/* Profile Details Card */}
        <div className="bg-[#1f2937] rounded-2xl shadow-md p-4 flex items-center justify-center">
          <img
            src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=abdulmalek-swe&theme=algolia`}
            alt="GitHub Profile Details"
            className="max-w-full h-auto object-contain"
          />
        </div>
        {/* Repo by Language */}
        <div className="bg-[#1f2937] rounded-2xl shadow-md p-4 flex items-center justify-center">
          <img
            src={`http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=abdulmalek-swe&theme=algolia`}
            alt="Top Languages"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
