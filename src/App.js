import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


export default function App() {
  return (
  <main>
    <Header />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </main>
  );
}

