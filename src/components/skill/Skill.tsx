"use client";
 
import { LottiePlayer } from "lottie-react";
import {
  GitBranch,
  Paintbrush,
  FileCode,
  Server,
  Database,
} from "lucide-react";

export default function Skills() {
  return (
    <section className="   ">
     
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">My Tech Stack</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="border rounded-xl p-6 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              Frontend
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12">sdf
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
                <span className="text-lg text-gray-700 font-medium">Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-4">
                <FileCode className="text-blue-500 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">TypeScript</span>
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
                <span className="text-lg text-gray-700 font-medium">Node.js</span>
              </div>

              <div className="flex items-center gap-4">
                <Database className="text-green-800 w-6 h-6" />
                <span className="text-lg text-gray-700 font-medium">MongoDB</span>
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
      <GithubContribute/>
    </section>
  );
}

const GithubContribute = () =>{
  return(
    <>Here my github information </>
  )
}