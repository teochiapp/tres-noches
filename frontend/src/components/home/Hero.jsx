import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import SplitText from "../common/SplitText";

const Hero = () => {
  return (
    <HeroSection id="inicio">
      <BackgroundWrapper>
        <Parallax speed={-10} style={{ height: '120%' }}>
          <HeroImage src="/content/hero-alt-image.webp" alt="Tres Noches Hero" />
        </Parallax>
        <ImageOverlay />
      </BackgroundWrapper>

      <LeftTextContainer>
        <Parallax speed={-2}>
          <LeftText
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Productora <br />Audiovisual<br />
            <Symbol>+</Symbol><br />
            Impacto
          </LeftText>
        </Parallax>
      </LeftTextContainer>

      <RightTextContainer>
        <Parallax speed={2}>
          <RightText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SplitText
              text="EMPEZAMOS DOCUMENTANDO HISTORIAS, TERMINAMOS TRANSFORMANDO TERRITORIOS."
              delay={30}
              duration={1}
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign="left"
            />
          </RightText>
        </Parallax>
      </RightTextContainer>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  background: black;
  color: white;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65%;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100%;
  }
`;



const LeftTextContainer = styled.div`
  position: absolute;
  bottom: 45%; 
  left: 50px;
  z-index: 5;

  @media (max-width: 768px) {
    bottom: auto;
    top: 35vh;
    left: 24px;
  }
`;

const RightTextContainer = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0px;
  max-width: 900px;
  z-index: 5; /* Above background */
  
  @media (max-width: 768px) {
    position: absolute;
    bottom: 40px;
    left: 24px;
    right: 24px;
    max-width: none;
  }
`;

const LeftText = styled(motion.div)`
  font-size: 1.4rem;
  font-weight: 500;
  font-family: var(--font-light);
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.05em;
  text-transform: none;

  @media (max-width: 768px) {
    font-size: 1rem;
    color: white;
  }
`;

const Symbol = styled.span`
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  display: inline-block;
  margin: 5px 0;
`;

const RightText = styled(motion.h1)`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 600;
  line-height: 1.2;
  font-family: var(--font-condensed-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, 
    black 0%, 
    rgba(0, 0, 0, 0.8) 10%,
    transparent 25%, 
    transparent 75%, 
    black 100%
  );
  pointer-events: none;

  @media (max-width: 768px) {
    background: linear-gradient(to bottom, 
      black 0%, 
      rgba(0, 0, 0, 0.9) 25%,
      transparent 50%, 
      transparent 80%, 
      black 100%
    );
  }
`;