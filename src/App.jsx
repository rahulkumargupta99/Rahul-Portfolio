import React from 'react'
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import PortFolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import Project from "./Project";
import { Toaster } from 'react-hot-toast';
function App  ()  {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <PortFolio/>
    <Project/>
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
    </>
  )
}

export default App;
