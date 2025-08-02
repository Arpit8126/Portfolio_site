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
    <section className="   ">
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
      <GithubContribute />
    </section>
  );
}

const GithubContribute = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/AbdulMalek-swe")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    <div className="min-h-screen bg-[#0b1120] text-white p-6 grid md:grid-cols-2 gap-6">
      {/* Left Side */}
      <div className="bg-[#111827] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-cyan-400 mb-4">
          Abdul Malek Sarkar
        </h2>
        {/* <img
          src={`https://ghchart.rshah.org/${info.login}`}
          alt="GitHub Contributions"
          style={{ width: "100%", maxWidth: "600px" }}
        /> */}
        <ul className="space-y-2 text-sm text-gray-300 mb-6">
          <li className="flex items-center gap-2">
            <FaGithub className="text-green-400" />
            46 Contributions in 2025
          </li>
          <li className="flex items-center gap-2">
            <AiOutlineProject className="text-orange-400" />
            {info?.public_repos} Public Repos
          </li>
          <li className="flex items-center gap-2">
            <BsClockHistory className="text-blue-400" />
            Joined GitHub {year} years ago
          </li>
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-500" /> {info?.location}
          </li>
        </ul>

        <div>
          <Line
            data={contributionsData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { color: "#fff" },
                },
                x: {
                  ticks: { color: "#fff" },
                },
              },
            }}
          />
          <p className="text-sm text-gray-400 mt-2">
            contributions in the last year
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-[#111827] p-6 rounded-xl shadow-md flex flex-col items-center">
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">
          Top Languages by Repo
        </h3>
        <div className="w-64">
          <Doughnut data={languagesData} />
        </div>
        <div className="mt-6 text-sm text-gray-300 space-y-1">
          <p className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full"></span>
            JavaScript <span className="ml-auto">71.5%</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-purple-500 rounded-full"></span>
            TypeScript <span className="ml-auto">28.5%</span>
          </p>
        </div>
      </div>
    </div>
  );
};
