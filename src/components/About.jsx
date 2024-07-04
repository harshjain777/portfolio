import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center py-20 justify-center gap-5"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="w-full rounded-t-3xl tracking-wide text-[12vw] md:text-8xl uppercase text-zinc-100 flex items-center px-20 font-thin py-3 bg-yellow-400">
        about me
      </div>
      <div className="w-[80%] py-10 text-center text-lg text-balance text-light mb-10">
        <ul className="text-xl text-left flex flex-col gap-2 space-y-2">
          <li className="inline-block bg-yellow-100 text-black rounded-lg px-2">
            Passionate Full-Stack Developer specializing in JavaScript, React,
            and Node.js
          </li>
          <li className="inline-block">
            Bachelor's degree in Computer Science from XYZ University
          </li>
          <li className="inline-block bg-yellow-100 text-black rounded-lg px-2">
            Over 5 years of experience in web development
          </li>
          <li className="inline-block">
            Led projects such as E-commerce platforms, Social Media
            Applications, and Real-time Chat Applications
          </li>
          <li className="inline-block bg-yellow-100 text-black rounded-lg px-2">
            Improved user engagement and increased revenue through successful
            project management
          </li>
          <li className="inline-block">
            Expertise in front-end development, back-end development, and
            database management
          </li>
          <li className="inline-block bg-yellow-100 text-black rounded-lg px-2">
            Proficient with tools like Git, Docker, and AWS
          </li>
          <li className="inline-block">
            Hobbies include hiking, photography, and playing the guitar
          </li>
        </ul>
        <p className="mt-5 text-gray-400">
          Feel free to explore my portfolio to see more of my work, and don't
          hesitate to reach out if you have any questions or opportunities.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
