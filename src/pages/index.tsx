import Contact from "@/components/contact/Contact";
import PageLayout from "@/components/ui/pageLayout";
import React from "react";
const Home = () => {
  return (
    <PageLayout>
      <Contact />
      <div className="flex justify-center">
        <div>
          <div className="hex">
            <div className="hex inner">
              <div className="hex inner2">
                <img src="/images/wave.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
<div class="hex-container">
  <div class="hex-inner"></div>
</div>

      {/* <div className="relative w-screen h-screen bg-gray-900 overflow-hidden animate-spin">
    
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 rounded-full bg-yellow-400 blur-[100px] opacity-40"></div>
        <div className="w-40 h-40 rounded-full bg-yellow-200 blur-3xl opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl"></div>
      </div>

      <h1 className="text-white text-center mt-10 text-3xl font-bold">
        Glowing Light Example
      </h1>
    </div> */}
    </PageLayout>
  );
};
export default Home;
