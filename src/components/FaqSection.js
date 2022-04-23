import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amen.</p>
          <p>
            Lorem ipsum dolor sit, amen consenter adipisicing elite. Laudanum,
            pisa?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amen.</p>
          <p>
            Lorem ipsum dolor sit, amen consenter adipisicing elite. Laudanum,
            pisa?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amen.</p>
          <p>
            Lorem ipsum dolor sit, amen consenter adipisicing elite. Laudanum,
            pisa?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What do I get</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amen.</p>
          <p>
            Lorem ipsum dolor sit, amen consenter adipisicing elite. Laudanum,
            pisa?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
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
