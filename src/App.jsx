import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Components
import SolarSystem from "./components/SolarSystem";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Stats from "./components/Stats";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import SocialProof from "./components/SocialProof";
import Blog from "./components/Blog";
import FunFacts from "./components/FunFacts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import SocialLinks from "./components/SocialLinks";


// Case Study Pages
import CaseStudy1 from "./pages/CaseStudy1";
import CaseStudy2 from "./pages/CaseStudy2";
import CaseStudy3 from "./pages/CaseStudy3";

export default function App() {
  return (
    <Router>
      <div className="relative">
        {/* Solar System background */}
        <div className="fixed inset-0 -z-10">
          <SolarSystem />
        </div>
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-5"></div>

        {/* Header + Dark Mode */}
        <Header />
        <DarkModeToggle />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero"><Hero /></section>
                <section id="about" className="py-20"><About /></section>
                <section id="skills" className="py-20"><Skills /></section>
                <section id="projects" className="py-20"><Projects /></section>
                <section id="stats" className="py-20"><Stats /></section>
                <section id="achievements" className="py-20"><Achievements /></section>
                <section id="journey" className="py-20"><Journey /></section>
                <section id="testimonials" className="py-20"><Testimonials /></section>
                <section id="socialproof" className="py-20"><SocialProof /></section>
                <section id="blog" className="py-20"><Blog /></section>
                <section id="funfacts" className="py-20"><FunFacts /></section>
                <section id="contact" className="py-20"><Contact /></section>
                <SocialLinks />
                <Footer />
              </>
            }
          />

          {/* Case Studies */}
          <Route path="/casestudy/1" element={<CaseStudy1 />} />
          <Route path="/casestudy/2" element={<CaseStudy2 />} />
          <Route path="/casestudy/3" element={<CaseStudy3 />} />
        </Routes>
      </div>
    </Router>
  );
}
