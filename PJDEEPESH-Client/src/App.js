
import React from 'react';
import NavbarHome from './components/Navbar';
import Skills from './components/Skills';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarHome />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
