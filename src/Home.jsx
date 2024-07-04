import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Education from "./components/Education";
import Herosection2 from "./components/Herosection2";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
const Home = ({toggle,handleToggle}) => {
  
  return (
    <div className={` w-full ${toggle ? 'bg-zinc-950 text-zinc-50' : 'bg-white text-zinc-950'}`}>
      <Navbar toggle={toggle} handleToggle={handleToggle} />
      <Herosection toggle={toggle}/>
      <Herosection2/>
      <About/>
      <Education/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default Home;
