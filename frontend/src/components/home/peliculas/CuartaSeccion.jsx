import { useRef } from 'react';
import styled from "styled-components";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CuartaSeccionPelicula() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const fadeRight = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <Section ref={containerRef}>
      <motion.div style={{ y: yParallax }}>
        <ContentContainer>
          <ImageTop src="/content/decoration-single-heads.png" alt="Construcción del Sambódromo" />
          <Header>
            <motion.div {...fadeIn}>
              <MainTitle>DE UNA PELICULA A UN PAÍS</MainTitle>
              <SubTitle>EL BARRIO CANÁBICO</SubTitle>
            </motion.div>
          </Header>
          <TextSection>
            <motion.div {...fadeRight}>
              <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quo cumque exercitationem porro itaque est? Error alias consequatur officiis, ducimus quasi ipsam excepturi saepe sapiente id dolore ab, iste ipsa accusamus corrupti amet at.
              </Paragraph>
              <ButtonsContainer>
                <Button>SUMATE AL PROYECTO</Button>
                <Button>MÁS INFORMACIÓN</Button>
              </ButtonsContainer>
            </motion.div>
          </TextSection>
        </ContentContainer>
      </motion.div>
      <motion.div {...fadeUp}>
        <BottomImage src="/content/decoration-heads.png" alt="Construcción del Sambódromo" />
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  background-color: var(--bg-dark, #000);
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100svh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const ContentContainer = styled.div`
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 2560px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    gap: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const MainTitle = styled.h2`
  font-family: var(--font-bold);
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -0.01em;
`;

const SubTitle = styled.h3`
  font-family: var(--font-alt);
  font-size: clamp(1.2rem, 2.5vw, 2.2rem);
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
`;

const TextSection = styled.div`
  align-self: flex-end;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    align-self: flex-start;
  }
`;

const Paragraph = styled.p`
  font-family: var(--font-alt);
  font-size: clamp(1rem, 1.5vw, 21px);
  font-weight: 700;
  color: #fff;
  line-height: 1.4;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled.button`
  background-color: #333333;
  color: #fff;
  font-family: var(--font-alt);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1.2rem 2.2rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  letter-spacing: 0.02em;

  &:hover {
    background-color: #555555;
  }
`;

const BottomImage = styled.img`
  width: 100%;
  height: 380px;
  margin: -120px 0 20px;
  object-fit: contain;

    @media (max-width: 768px) {
    height: 250px;
    margin: -80px 0 0px;
  }
`;


const ImageTop = styled.img`
  position: absolute;
  top: clamp(-80px, -8vw, -120px);
  right: clamp(-20px, -4vw, -40px);
  width: auto;
  rotate: -20deg;
  height: clamp(120px, 25vw, 400px);
  object-fit: contain;
  pointer-events: none;

  @media (max-width: 768px) {
    height: clamp(120px, 20vw, 150px);
    top: -50px;
    right: -10px;
  }
`;
