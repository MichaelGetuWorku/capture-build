import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div
      onClick={() => setToggle(!toggle)}
      style={{ cursor: 'pointer' }}
      className="question"
      layout
    >
      <motion.h4 layout>
        {title} {toggle ? '-' : '+'}
      </motion.h4>
      {toggle ? children : ''}
      <motion.div className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;

