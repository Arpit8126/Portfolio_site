import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import PageLayout from "@/components/ui/pageLayout";
import React, { useEffect, useState } from "react";
const Home = () => {
  return (
    <>
      <PageLayout>
        <About />
      </PageLayout>

      <PageLayout>
        <Contact /> 
      </PageLayout>
    </>
  );
};
export default Home;
