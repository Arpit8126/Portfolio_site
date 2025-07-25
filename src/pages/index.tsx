import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Exprience from "@/components/exprience/Exprience";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Skills from "@/components/skill/Skill";
import Cursor from "@/components/ui/Cursor";
import PageLayout from "@/components/ui/pageLayout";
import React, { useEffect, useState } from "react";
const Home = () => {
  return (
    <>
      <Cursor /> 
      <PageLayout>
        <About />
      </PageLayout>
      <PageLayout>
        <Skills />
      </PageLayout>
      <PageLayout>
        <Exprience />
      </PageLayout>
      <PageLayout>
        <ProjectCard />
      </PageLayout>
      <PageLayout>
        <Contact />
      </PageLayout>
    </>
  );
};
export default Home;
