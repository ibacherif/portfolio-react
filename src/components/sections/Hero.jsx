import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2, Mail, Github, Linkedin, Download, Sparkles } from 'lucide-react';    

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Développeur Full Stack', 'Créateur d\'Applications', 'Passionné de Code', 'Problem Solver'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(isDeleting ? currentTitle.substring(0, displayText.length - 1) : currentTitle.substring(0, displayText.length + 1));
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, titles]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Bienvenue sur mon portfolio</span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            Bonjour, Je suis{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             Développeur Sénior IA Java & C#
            </span>
          </h1>

          <div className="h-12 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              {displayText}<span className="inline-block animate-blink">|</span>
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Je crée des expériences web modernes et innovantes. 
            Passionné par le développement et l'apprentissage continu de nouvelles technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Voir mes projets
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Me contacter
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/votre-username" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:votre@email.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Mail className="w-6 h-6" />
            </a>
            <a href="/cv.pdf" download
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Download className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <button onClick={() => scrollToSection('#about')} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
        <div className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          <ArrowDown className="w-6 h-6" />
        </div>
      </button>
    </section>
  );
}