import React, { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
const App = () => {
  const [toggle, setToggle] = useState(() => {
    // Retrieve toggle state from localStorage or use false if not available
    const savedToggle = localStorage.getItem("toggle");
    return savedToggle ? JSON.parse(savedToggle) : false;
  });

  const handleToggle = () => {
    setToggle((prevToggle) => {
      const newToggle = !prevToggle;
      // Save new toggle state to localStorage
      localStorage.setItem("toggle", JSON.stringify(newToggle));
      return newToggle;
    });
  };
  return (
    <div className=''>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home toggle={toggle} handleToggle={handleToggle}/> } ></Route>
        <Route path='/contact' element= { <Contact toggle={toggle} handleToggle={handleToggle}/> } ></Route>
        <Route path='*' element = { <Error/> }  />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
