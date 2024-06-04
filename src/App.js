import React from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import Banner from "./components/Banner";


const App = () => {
  return (
      <>
        <Navbar/>
        <Home/>
        <Features/>
        <About/>
        <Banner/>
        <Footer/>
      </>
  )
}
export default App
