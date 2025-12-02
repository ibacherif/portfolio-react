import React from 'react';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';  
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
  

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
       <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
      {/* Placeholder pour les autres sections */}
      <section id="about" className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">À propos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Section en construction...</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projets</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Section en construction...</p>
        </div>
      </section>

      <section id="skills" className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Compétences</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Section en construction...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Section en construction...</p>
        </div>
      </section>
    </div>
  );
}