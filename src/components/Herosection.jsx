import { motion } from "framer-motion";
import harsh from '../assets/harsh.jpeg';
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7, // Slow down the stagger effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.5, // Slow down the individual item animation
    },
  },
};

const Herosection = ({ toggle }) => {
  return (
    <motion.div
      className={`w-full h-[30rem] text-center md:text-left flex-col md:flex-row flex justify-around items-center transition-colors duration-700 `}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="px-2" variants={itemVariants}>
        <img 
          src={harsh} 
          alt="" 
          className={`md:w-96 w-60 bg-gradient-to-b from-yellow-400 to-yellow-900 rounded-full lg:w-120 md:h-auto lg:h-auto shadow-lg `} 
        /> {/* Set width for medium and large screens */}
        <div className="w- bg-gradient-to-b from-yellow-400 to-yellow-900 text-transparent bg-clip-text text-center uppercase md:text-3xl  rounded mt-3">
        programmer | developer
      </div>
      </motion.div>

      <motion.div className='p-3 text-[6vw] md:text-4xl tracking-tight uppercase' variants={itemVariants}>
        <h2>hello!</h2>
        <h3 className='md:text-8xl text-[10vw] tracking-tighter mt-0 md:mt-3'>
          i`m <motion.span
            className='bg-gradient-to-r from-yellow-400 to-yellow-900 bg-clip-text text-transparent rounded px-1'
            variants={itemVariants}
          >
            harsh
          </motion.span>
        </h3>
        
      </motion.div>

      

    </motion.div>
  );
}

export default Herosection;
