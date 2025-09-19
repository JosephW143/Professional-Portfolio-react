import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from "./components/About";
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import blob from "./svg/blob.svg";


export default function App() {
  return (
  <main className="font-mono overflow-x-hidden"
    style={{
        backgroundImage: `url(${blob})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    }}>
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </main>
  );
}

