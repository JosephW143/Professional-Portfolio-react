import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from "./components/About";
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


export default function App() {
  return (
  <main className="font-mono overflow-x-hidden">
    <div className="fixed w-full h-full -z-30 bg-gray-900"></div>
    <div className="fixed inset-0 overflow-hidden -z-20 flex justify-center items-center">
      <div className="relative w-0 h-0">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 -left-32 -top-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-32 -top-24 w-[320px] h-[320px] md:w-[520px] md:h-[520px] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 -left-48 top-16 w-[280px] h-[280px] md:w-[480px] md:h-[480px] bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-48 top-8 w-[310px] h-[310px] md:w-[510px] md:h-[510px] bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 -left-16 top-48 w-[290px] h-[290px] md:w-[490px] md:h-[490px] bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-24 top-32 w-[330px] h-[330px] md:w-[530px] md:h-[530px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </div>
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </main>
  );
}

