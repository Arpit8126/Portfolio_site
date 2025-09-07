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
import TechCard from "../TechCard/TechCard";

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
 
  return (
    <section className="  ">
      

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-600"
>
          My Tech Stack
        </h2>
        <TechCard />
      </div>
      {/* github technical  */}
      <div className="flex justify-center">
        <GithubContribute />
      </div>
    </section>
  );
}

const GithubContribute = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/Arpit8126")
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
            src={`https://github-readme-stats.vercel.app/api?username=Arpit8126&show_icons=true&theme=radical`}
            alt="GitHub Profile Details"
            className="w-[800px] h-[800px] object-contain"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        {/* Repo by Language */}
        <div className="bg-[#1f2937] rounded-2xl shadow-md p-4 flex items-center justify-center">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Arpit8126&layout=compact&theme=radical`}
            alt="Top Languages"
            className="w-[800px] h-[800px] object-contain"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};
