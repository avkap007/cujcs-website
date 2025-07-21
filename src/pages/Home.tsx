import React from "react";
import Card from "../components/Cards";
import AboutSection from "../components/AboutSection";

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-center">
        <Card />
      </div>
      <div>
        <AboutSection />
      </div>
    </>
  );
};

export default Home;
