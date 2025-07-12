import React from 'react';

// Import all your components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimations from './components/BackgroundAnimations';
import ParticleBackground from './components/ParticleBackground'; // <-- IMPORT THE NEW COMPONENT

function App() {
  // The old useEffect for particles has been removed.

  return (
    <>
      <ParticleBackground />
      <BackgroundAnimations />
      <Header />
      
      {/* Main content now only holds the primary sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* THE FIX: The footer is now a top-level element, a sibling to <main> */}
      <Footer />
    </>
  );
}

export default App;