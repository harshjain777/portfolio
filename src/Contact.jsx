import React from 'react'
import Navbar from './components/Navbar'
import Herosection2 from './components/Herosection2'
import Footer from './components/Footer'
import ContactHeader from './components/ContactHeader'

const Contact = ({toggle,handleToggle}) => {
  return (
    <div className={` w-full ${toggle ? 'bg-zinc-950 text-zinc-50' : 'bg-white text-zinc-950'}`}>
      <Navbar toggle={toggle} handleToggle={handleToggle} />
      <ContactHeader toggle={toggle} handleToggle={handleToggle}/>
    </div>
  )
}

export default Contact
