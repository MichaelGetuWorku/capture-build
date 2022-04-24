import React from 'react';
import { motion } from 'framer-motion';

import Wave from './Wave';
import home1 from '../img/home1.png';

//style
import { About, Description, Image, Hide } from '../styles';

//pageAnimation
import { titleAnim, fade, photoAnimation } from '../animation';
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
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
          <motion.p variants={fade}>
            Contact us for any new projects, We have professionals for your
            every needs.
          </motion.p>
          <motion.button variants={fade}>Contact us</motion.button>
        </div>
      </Description>

      <Image>
        <motion.img
          variants={photoAnimation}
          // initial="hidden"
          // animate="show"
          src={home1}
          alt=""
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
