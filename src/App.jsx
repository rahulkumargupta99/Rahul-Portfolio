import React from 'react'
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
// import PortFolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import Project from './Project';
function App  ()  {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
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
