import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Herosection2 = () => {
    const icons = [<FaLinkedinIn/>, <FaGithub/>, <SiLeetcode/>];
    const links = [
        'https://www.linkedin.com/in/harsh-jain-767192271/',
        'https://github.com/Nanashi752',
        'https://leetcode.com/u/harshjain777/'
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 2, // Delay before the children animations start
                staggerChildren: 0.3, // Time between each child's animation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className='w-[100%] mt-20 flex justify-between px-20 py-48 border-t-[1px] border-zinc-500'>
            <div className=""></div>
            <motion.div
                className="flex gap-10 text-3xl"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {
                    icons.map((IconComponent, index) => (
                        <motion.a
                            key={index}
                            href={links[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                        >
                            {IconComponent}
                        </motion.a>
                    ))
                }
            </motion.div>
        </div>
    );
}

export default Herosection2;
