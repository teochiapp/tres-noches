import { useRef } from 'react';
import styled from "styled-components";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function CuartaSeccionPelicula() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yImageTop = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yImageBottom = useTransform(scrollYProgress, [0, 1], [40, -40]);

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
      <motion.div style={{ y: yParallax, position: 'relative', zIndex: 2 }}>
        <ContentContainer>
          <Header>
            <motion.div {...fadeIn}>
              <MainTitle>DE UNA PELICULA A UN PAÍS</MainTitle>
              <SubTitle>IMPACTO MI PAÍS </SubTitle>
            </motion.div>
          </Header>
          <TextSection>
            <motion.div {...fadeRight} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Paragraph>
                Nuestra próxima película documenta desde adentro un experimento social único: la fundación de una nueva "nación" que intenta dar respuesta a lo que creemos son las limitaciones estructurales del sistema actual. Sin salirnos de sus reglas, buscamos conformar un colectivo capaz de preguntarse si es posible hacer las cosas de otra manera.
              </Paragraph>
              <Paragraph>
                “Mi país” cuenta con territorio, habitantes, y un propósito en común: volver a la tierra y que cada individuo pueda desarrollar sus capacidades y proyectos.
              </Paragraph>
              <Paragraph>
                Es una experiencia de impacto: una comunidad que integra desarrollo, vivienda, producción, investigación y cultura.
              </Paragraph>
              <ButtonsContainer>
                <Button>SUMATE AL PROYECTO</Button>
                <Button onClick={() => navigate('/proyecto/barrio-canabico')}>MÁS INFORMACIÓN</Button>
              </ButtonsContainer>
            </motion.div>
          </TextSection>
        </ContentContainer>
      </motion.div>
      <motion.div {...fadeUp}>
        <BottomImage
          src="/content/decoration-heads.png"
          alt="Construcción del Sambódromo"
          style={{ y: yImageBottom }}
        />
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
  font-family: var(--font-condensed-black);
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -0.01em;
`;

const SubTitle = styled.h3`
  font-family: var(--font-condensed-thin);
  font-size: clamp(1rem, 2vw, 2.4rem);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #fff;
  opacity: 0.8;
`;

const TextSection = styled.div`
  align-self: flex-end;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 1.5rem;
  padding: 5px 10px;

  @media (max-width: 1024px) {
    align-self: flex-start;
  }
`;

const Paragraph = styled.p`
  font-family: var(--font-black);
  font-size: clamp(0.88rem, 1.5vw, 1.25rem);
  color: #fff;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: clamp(0.82rem, 3.8vw, 1rem);
    line-height: 1.55;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled.button`
  background-color: #333333;
  color: #fff;
  font-family: var(--font-condensed-black);
  font-size: 1.2rem;
  padding: 1.2rem 2.2rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  letter-spacing: 0.02em;

  &:hover {
    background-color: #555555;
  }
`;

const BottomImage = styled(motion.img)`
  width: 100%;
  height: 380px;
  margin: -200px 0 20px;
  object-fit: contain;

    @media (max-width: 768px) {
    height: 250px;
    margin: -80px 0 0px;
  }
`;


const ImageTop = styled(motion.img)`
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
