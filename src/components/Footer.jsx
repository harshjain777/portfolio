import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import harshlogo from '../assets/harshlogo.png';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <div className='py-20 border-t-[1px] border-zinc-400 w-full flex flex-row justify-between items-center px-10 '>
      <motion.div 
        className="links flex flex-col items-center gap-5 text-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitterX/></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
        <a href="mailto:example@gmail.com"><BiLogoGmail/></a>
        <a href="https://www.instagram.com/haarshh_7/" target="_blank" rel="noopener noreferrer"><SlSocialInstagram/></a>
      </motion.div>

      <motion.div 
        className="w-full md:w-[80%] flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-900 bg-clip-text uppercase text-transparent rounded text-[12vw] px-1">harsh</div>
      </motion.div>
    </div>
  );
}

export default Footer;
