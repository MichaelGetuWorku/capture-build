import React from 'react';
import { motion } from 'framer-motion';

import home1 from '../img/home1.png';

//style
import { About, Description, Image, Hide } from '../styles';

const AboutSection = () => {
  //framer motion variable
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: 'easeOut',
        staggerChildren: 1,
        when:'afterChildren'
      },
    },
  };

  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>

        <div>
          <p>
            Contact us for any new projects, We have professionals for your
            every needs.
          </p>
          <button>Contact us</button>
        </div>
      </Description>

      <Image>
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

export default AboutSection;
