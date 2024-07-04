import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj5 from '../assets/proj5.jpeg';

const Projects = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className='flex flex-col items-center gap-5 justify-center py-20 w-full'>
      <h1 className='text-7xl font-thin uppercase mb-10' controls={controls}>projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-5'>
        <ProjectCard image={proj1} controls={controls} link="https://github.com/Nanashi752/thinkwebhub" />
        <ProjectCard image={proj2} controls={controls} link="https://github.com/Nanashi752/currencyExchange" />
        <ProjectCard image={proj3} controls={controls} link="https://github.com/Nanashi752/passwords" />
        <ProjectCard image={proj5} controls={controls} link="https://github.com/Nanashi752/pokemon" />
        <div ref={ref}></div>
      </div>
    </div>
  );
}

const ProjectCard = ({ image, controls, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div 
        className="w-full h-60 sm:h-80 md:h-96 rounded-xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        initial='hidden'
        animate={controls}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.9 }
        }}
      ></motion.div>
    </a>
  );
}

export default Projects;
