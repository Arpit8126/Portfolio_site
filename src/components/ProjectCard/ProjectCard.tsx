import { projectList } from "@/constants/project";
import React from "react";
import CustomCursor from "../common/LigitingCursor";
import Card from "../ui/Card";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-4 gap-2 px-32">
      {/* <CustomCursor/> */}
      {projectList.map((project, idx) => (
        <Card key={idx} project={project}/>
      ))}
    </div>
  );
};

export default ProjectCard;
