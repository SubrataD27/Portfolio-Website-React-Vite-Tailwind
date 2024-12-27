import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CloudPreloader from './components/shared/CloudPreloader';
import './styles/animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CloudPreloader />
      <div className={`min-h-screen bg-black text-white transition-opacity duration-500 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        <Header />
        <main className="overflow-hidden">
          <Hero />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;