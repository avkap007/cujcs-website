import React from "react";
import AboutSection from "../components/AboutSection";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 pl-6 md:pl-16 max-w-7xl mx-auto">
        <h1 className="font-mori font-semibold text-h1 leading-none tracking-tight text-left mb-8">
          CANADIAN<br />UNDERGRADUATE JOURNAL<br />OF <span className="font-mori font-bold">COGNITIVE SCIENCE</span>
        </h1>
        {/* Floating Card */}
        <div className="flex flex-col md:flex-row items-start bg-white border border-gray-200 rounded-xl overflow-hidden p-6 md:p-6 md:pr-12 w-fit">
          <img
            src="/images/stockimages/cujcs_23_cover.png"
            alt="2023 Edition Cover"
            className="object-cover w-[77.825px] h-[120px] rounded-t-xl md:rounded-t-none md:rounded-l-xl border-r md:border-r border-gray-200"
          />
          <div className="flex flex-col md:ml-6 w-full">
            <h5 className="text-sm font-ibm font-normal tracking-widest text-gray-500 uppercase">Latest Publication</h5>
            <a href="#" className="mt-6 text-lg font-mori font-semibold text-gray-900 hover:underline text-left block">Read the 2023 Edition <span aria-hidden>↗</span></a>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <div>
        <AboutSection />
      </div>
    </>
  );
};

export default Home;
