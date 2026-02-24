import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import SplitText from "../common/SplitText";

const Hero = () => {

  return (
    <HeroSection id="inicio">
      <ContentSection>
        <Parallax speed={-5} style={{ alignSelf: 'flex-start' }}>
          <LeftText
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Productora Audiovisual<br />
            <Symbol>+</Symbol><br />
            Impacto
          </LeftText>
        </Parallax>
        <Parallax speed={5} style={{ alignSelf: 'flex-start' }}>
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
      </ContentSection>
      <ImageSection>
        <Parallax speed={-10} style={{ width: '100%', height: '115%', marginTop: '-5%' }}>
          <HeroImage
            src="/content/hero-image.webp"
            alt="Carnival Expression"
          />
        </Parallax>
        <ImageOverlay />
      </ImageSection>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  background: black;
  color: white;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2.5fr;
  align-items: flex-start;
  height: auto;
  min-height: 35vh;
  padding: 200px 50px 0;
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 120px 24px 32px;
    gap: 32px;
  }
`;

const LeftText = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.4;
  color: #888;
  letter-spacing: 0.05em;
  text-transform: none;

    @media (max-width: 768px) {
    padding: 10px 0 20px 0;
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
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: left;
  max-width: 1200px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ImageSection = styled(motion.div)`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  height: 80vh;

  @media (max-width: 768px) {
    height: 45vh;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.1);
  display: block;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, black 0%, transparent 15%, transparent 85%, black 100%);
  pointer-events: none;
`;