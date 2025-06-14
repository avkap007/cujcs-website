export default function Footer() {
  return (
    <footer className="w-full justify-start items-start bg-[#A70039] py-8 font-ibm text-white mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
        <img
          src="/images/logos/logo_color_website.png"
          alt="Logo"
          className="h-12 w-auto"/>
        <span className="text-white text-xl font-bold">
          Canadian Undergraduate Journal of Cognitive Science
        </span>
      </div>
        <hr className="my-6 border-white opacity-50" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="text-xl font-bold mb-2">All Collectives</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-white hover:underline">JOURNALS</a></li>
              <li><a href="#" className="text-white hover:underline">ART</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Get Published</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-white hover:underline">OVERVIEW</a></li>
              <li><a href="#" className="text-white hover:underline">2025 THEMES</a></li>
              <li><a href="#" className="text-white hover:underline">SUBMISSION CHECKLISTS</a></li>
              <li><a href="#" className="text-white hover:underline">WHAT HAPPENS NEXT?</a></li>
            </ul>
          </div>

          <div>
            <h3 className=" text-xl font-bold mb-2">About</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-white hover:underline">ABOUT CUJCS</a></li>
              <li><a href="#" className="text-white hover:underline">LEADERSHIP</a></li>
              <li><a href="#" className="text-white hover:underline">CUJCS POLICIES</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-white hover:underline">CONTACT FORM</a></li>
              <li><a href="#" className="text-white hover:underline">EDITORIAL EMAIL</a></li>
              <li><a href="#" className="text-white hover:underline">LINKEDIN</a></li>
              <li><a href="#" className="text-white hover:underline">INSTAGRAM</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <hr className="my-6 border-white opacity-50" />
          <div className="text-center text-xs text-white"> </div>
          Copyright © 2002–{new Date().getFullYear()} Canadian Undergraduate Journal of Cognitive Science, all rights reserved.
        </div>
      </div>
    </footer>
  );
}
