import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Exprience from "@/components/exprience/Exprience";
// import ProjectCard from "@/components/ProjectCard/ProjectCard";
import PageLayout from "@/components/ui/pageLayout";
import React, { useEffect, useState } from "react";
const Home = () => {
  return (
    <>
      <PageLayout>
        <About />
      </PageLayout>
      {/* <PageLayout>
        <ProjectCard />
      </PageLayout> */}
      <PageLayout>
        <Exprience/>
      </PageLayout>
      <PageLayout>
        <Contact />
      </PageLayout>
    </>
  );
};
export default Home;
