export default function Footer() {
  return (
    <footer className="w-full bg-lightPeach py-8 font-ibm mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-xs text-deepRed">
        Copyright © 2002-{new Date().getFullYear()} Canadian Undergraduate Journal of Cognitive Science All Rights Reserved
      </div>
    </footer>
  );
}
