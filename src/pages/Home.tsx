import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <section
      className="w-full bg-[url('/images/placeholder-illustration.svg')] bg-no-repeat bg-contain bg-left-bottom bg-white"
      style={{ backgroundImage: "url('/images/placeholder-illustration.svg')" }} // optional inline fallback
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[60vh] px-6 py-16 gap-8">
        {/* Right column: text content only, full width */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-deepRed mb-4">CUJCS Website</h1>
          <p className="text-lg text-brightOrange mb-2">Tailwind CSS is working!</p>

          <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
            <span className="bg-brightOrange text-white px-3 py-1 rounded">brightOrange</span>
            <span className="bg-pink text-white px-3 py-1 rounded">pink</span>
            <span className="bg-deepRed text-white px-3 py-1 rounded">deepRed</span>
            <span className="bg-lightPeach text-deepRed px-3 py-1 rounded border border-deepRed">lightPeach</span>
            <span className="bg-mutedPurpleGray text-deepRed px-3 py-1 rounded border border-deepRed">mutedPurpleGray</span>
          </div>

          <p className="mt-8 text-gray-600 text-sm">
            Edit <code>src/pages/Home.tsx</code> to get started.
          </p>
        </div>        
      </div>
      <div>
        <AboutSection />
      </div>
    </section>
  );
}
