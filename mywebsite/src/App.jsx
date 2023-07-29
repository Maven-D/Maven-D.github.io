import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => setIsMobile(window.innerWidth < 425);

  // create an event listener
  useEffect(() => {
    setIsMobile(window.innerWidth < 425);
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="px-10 py-3 bg-straw">
      <Navbar isMobile={isMobile}></Navbar>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
