import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';
import Auth from './Components/Auth/Auth';
import Projectdetails from './Components/Projectdetails/Projectdetails';
import BlogsPage from './Components/BlogsPage/BlogsPage'
// Layout for main pages
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Auth />
      <Hero />
      <About />
      <Services />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
  
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/blogs' element={<BlogsPage />} />
        <Route path='/project/:id' element={<Projectdetails />} />
      </Routes>

  );
};

export default App;
