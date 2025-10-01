//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-8 text-center">
//       <h1 className="text-5xl font-bold text-pink-600 mb-4">CUJCS + Tailwind is LIVE 🎉</h1>
//       <p className="text-lg text-gray-700">Let’s build something beautiful together ✨</p>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Submissions from "./pages/Submissions";
import Editions from "./pages/Editions";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import GetPublished from "./pages/GetPublished.tsx"; 

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/editions" element={<Editions />} />
          <Route path="/art" element={<Art />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-published" element={<GetPublished />} />
        </Routes>
      </Layout>
    </Router>
  );
}
