import React from 'react';
import './css/style.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;