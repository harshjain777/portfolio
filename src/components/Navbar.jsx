import { motion } from "framer-motion";
import { TfiHome } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { MdOutlineToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";


const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Navbar = ({ toggle, handleToggle }) => {
  const icons = [<TfiHome />, <BsTelephone/>];
  const paths = ['/', '/contact'];

  return (
    <motion.div 
      className={`flex justify-between  items-center p-3 md:py-5 md:px-20 ${toggle ? 'bg-zinc-950 text-zinc-50' : 'bg-white text-zinc-950'}`}
      variants={navbarVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="flex items-center gap-10">
        {icons.map((icon, i) => (
          <motion.div 
            key={i} 
            variants={iconVariants}
            initial="hidden"
            animate="show"
          >
            <NavLink to={paths[i]} className="text-[5vw] md:text-3xl">
              {icon}
            </NavLink>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={buttonVariants}
        initial="hidden"
        animate="show"
      >
        <motion.button
          whileHover={{ scale: 1.1 }} // Add hover effect
          whileTap={{ scale: 0.9 }} // Add tap effect
          onClick={handleToggle} // Handle toggle function
        >
          {toggle ? <MdToggleOff className="w-6 md:w-10 md:h-auto h-8" /> : <MdOutlineToggleOn className="w-6 md:w-10 md:h-auto h-8" />}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
