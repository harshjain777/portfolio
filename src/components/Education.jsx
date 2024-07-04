import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className='flex flex-col items-center justify-center gap-5'
      initial='hidden'
      animate={controls}
      variants={containerVariants}
    >
      <div className='w-full rounded-t-3xl tracking-wide text-[12vw] md:text-8xl uppercase justify-between text-zinc-100 flex items-center px-20 font-thin py-3 bg-yellow-400'>
        <div className=""></div>
        <div className="">education</div>
      </div>
      <div className='w-[80%] py-10 text-center text-lg text-balance text-light mb-10'>
        <ul className='text-xl text-left space-y-4'>
          <motion.li variants={itemVariants}>
            <strong>Bachelor of Science in Computer Science</strong><br />
            XYZ University, City, State<br />
            Graduated: May 2020<br />
            <div className="text-yellow-600"><em>Achievements:</em> Dean's List, Cum Laude, President of Coding Club</div>
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong>Master of Science in Software Engineering</strong><br />
            ABC University, City, State<br />
            Expected Graduation: May 2022<br />
            <div className="text-yellow-600"><em>Achievements:</em> Published Research on AI, TA for Software Engineering Course</div>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Education;
