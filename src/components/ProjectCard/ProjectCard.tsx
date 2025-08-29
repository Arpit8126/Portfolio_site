import { projectList } from "@/constants/project";
import React from "react";
import CustomCursor from "../common/LigitingCursor";
import Card from "../ui/Card";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 px-32">
        {/* <CustomCursor/> */}
        {projectList.map((project, idx) => (
          <Card key={idx} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="https://github.com/AbdulMalek-swe?tab=repositories"
          target="_blank"
          className="px-5 py-3 mt-5   text-primary border rounded-[4px] 
    transition-all duration-500 ease-in-out
    hover:-translate-x-1 hover:-translate-y-1 
    hover:shadow-[6px_6px_0px_0px_#64ffda]"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
