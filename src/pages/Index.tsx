
import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
