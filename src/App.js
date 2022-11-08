import React, { useSate } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [pageCurrent, pageSet] = useSate('About')

  const pageSelect = () => {
    if (pageCurrent === 'About') {
      return <About />
    }
    if (pageCurrent === 'Contact') {
      return <Contact />
    }
    if (pageCurrent === 'Portfolio') {
      return <Portfolio />
    }
  }

  const pageChange = (page) => pageSet(page);

  return (
    <>
    <header>
      <Header pageCurrent={pageCurrent} pageChange={pageChange}/>
    </header>

    <main>
      {pageSelect()}
    </main>

    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default App;
