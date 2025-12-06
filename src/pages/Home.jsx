import React from "react";

// Components
import SolarSystem from "./components/SolarSystem";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FunFacts from "./components/FunFacts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      {/* 🔭 Full-screen Solar System Background */}
      <div className="fixed inset-0 -z-10">
        <SolarSystem />
      </div>

      {/* 🌙 Overlay to improve readability */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm -z-5"></div>

      {/* 🌐 Main Website Content */}
      <Header />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* Journey / Timeline */}
      <section id="journey" className="py-20">
        <Journey />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <Testimonials />
      </section>

      {/* Blog / Articles */}
      <section id="blog" className="py-20">
        <Blog />
      </section>

      {/* Fun Facts / Hobbies */}
      <section id="funfacts" className="py-20">
        <FunFacts />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
