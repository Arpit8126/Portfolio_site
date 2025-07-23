import { projectType } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ project }: { project: projectType }) => {
  return (
    <Link href={project?.live_link} target="_blank" className="flex flex-col gap-3">
      <div>
        <Image alt={project?.title} src={project?.logo}  height={1000} width={1000} className="relative object-cover aspect-square"/>
      </div>
      <div>
        {project?.title}
      </div>
      <div className="line-clamp-3">{project?.description}</div>
      <Link href={project?.github_link} target="_blank">githu</Link>
    </Link>
  );
};

export default Card;
