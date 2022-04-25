import React from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';

//component
import Toggle from './Toggle';
//styles
import { About } from '../styles';
import { scrollReveal } from '../animation';

import { useScroll } from './useScroll';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amen.</p>
            <p>
              Lorem ipsum dolor sit, amen consenter adipisicing elite. Laudanum,
              pisa?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amen.</p>
            <p>
              Lorem ipsum dolor sit, amen consenter adipisicing elite. Laudanum,
              pisa?
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment">
          <div className="answer">
            <p>Lorem ipsum dolor sit amen.</p>
            <p>
              Lorem ipsum dolor sit, amen consenter adipisicing elite. Laudanum,
              pisa?
            </p>
          </div>
        </Toggle>
        <Toggle title="What do I get">
          <div className="answer">
            <p>Lorem ipsum dolor sit amen.</p>
            <p>
              Lorem ipsum dolor sit, amen consenter adipisicing elite. Laudanum,
              pisa?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
