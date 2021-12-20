import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";
import TextArea from "./components/textarea/TextArea";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <Timeline />
      <Experience />
      <Portfolio />
      <Skills />
      <section id="contact">
        <TextArea />
        <About />
      </section>
      <Footer />
    </>
  );
}

export default App;
