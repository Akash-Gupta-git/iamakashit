import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hero from './components/ Hero';
import Projects from "./pages/Projects";
import ProjectCard from './components/ProjectCard';
import Experience from "./pages/Experience";
import Contact from "./components/Contact";
import Header from "./components/ Header";
import About from './components/About';
import Footer from './components/Footer';
import * as framer from 'framer-motion';
import AnimatedSection from './components/AnimatedSection';
const MotionDiv = framer.motion.div;
import { useState } from 'react';
import './App.css';
import Skills from './components/Skills';

import Cursor from './components/Cursor';

function App() {
  const [darkMode, setDarkMode] = useState(false);

 

  return (
    <>
      <Cursor />
      <Router>
        <div className={`pt-5 ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          {/* ✅ Pass darkMode + setter */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <section id="hero">
              <Hero />
            </section>

            <AnimatedSection>
              <section id="about">
                <About />
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="skills">
                <Skills />
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="projects">
                <Projects />
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="experience">
                <Experience />
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section id="contact">
                <Contact />
              </section>
            </AnimatedSection>
              
                <Footer />
          </div>
        </Router>

      </>
  );
}

export default App;
