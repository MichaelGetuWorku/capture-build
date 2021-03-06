import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

//pageAnimation
import { pageAnimation, titleAnim } from '../animation';

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Call us at +111-111-111</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Around hear 200m</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 0.75rem;
  }
`;

const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
  margin-right: 1rem;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2: {
    margin: 2rem;
  }
`;
export default ContactUs;
