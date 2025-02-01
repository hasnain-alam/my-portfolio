import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;