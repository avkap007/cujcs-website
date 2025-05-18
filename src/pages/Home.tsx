import React, { useState } from "react";

const Home: React.FC = () => {
  const [pastOpen, setPastOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center">
        <h1 className="text-8xl font-bold text-white mb-4">
          Canadian Undergraduate Journal
        </h1>
        <h1 className="text-8xl font-bold text-white underline">
          of Cognitive Science
        </h1>
      

      <div className="flex justify-center gap-11 py-10">
        <button
          onClick={() => window.open("https://journals.lib.sfu.ca/index.php/cujcs/issue/view/412", "_blank")}
          className="bg-deepRed text-white py-3 px-6 rounded-lg"
        >
          VIEW LATEST PUBLICATION
        </button>

        <button
          onClick={() => window.open("https://journals.lib.sfu.ca/index.php/cujcs/about/submissions", "_blank")}
          className="bg-deepRed text-white py-3 px-6 rounded-lg"
        >
          PUBLISH WITH US!
        </button>
      </div>
    </div>
    </> 
  
  );
};

export default Home;
