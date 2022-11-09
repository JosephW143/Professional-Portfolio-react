import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';


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

