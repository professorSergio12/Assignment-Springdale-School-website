import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Admissions from './components/admission';
import Student from './components/student';
import Gallery from './components/gallery';
import Primary from './components/primary';
import Secondary from './components/secondary';
import SeniorSecondary from './components/senior';

import '../src/css/App.css';

function App() {
  const footerRef = useRef(null);
  const academicsRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      window.scrollTo({
        top: footerRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAcademics = () => {
    if (academicsRef.current) {
      window.scrollTo({
        top: academicsRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <BrowserRouter>
      <NavBar scrollToFooter={scrollToFooter} scrollToAcademics={scrollToAcademics} />
      <Routes>
        <Route path="/" element={<Home academicsRef={academicsRef} />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/student" element={<Student />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/primary" element={<Primary />} />
        <Route path="/secondary" element={<Secondary />} />
        <Route path="/senior-secondary" element={<SeniorSecondary />} />
      </Routes>
      <Footer ref={footerRef} />
    </BrowserRouter>
  );
}

export default App;
