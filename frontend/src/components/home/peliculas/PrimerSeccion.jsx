import { Link } from 'react-router-dom';
import { useRef } from 'react';
import styled from "styled-components";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SeccionPelicula() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yBg = useTransform(scrollYProgress, [0, 1], [-100, 100]);

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

  return (
    <Section ref={containerRef}>
      <BackgroundImage style={{ y: yBg }} />
      <Overlay />

      <motion.div style={{ y: yParallax, zIndex: 1, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        {/* ── TOP ROW ────────────────────────────── */}
        <motion.div {...fadeIn}>


          {/* ── FILM LABEL ─────────────────────────── */}
          <FilmLabel as={Link} to="/proyecto/tres-noches-al-ano">
            <FilmTitle>TRES NOCHES AL AÑO</FilmTitle>
            <FilmSub>LARGOMETRAJE DOCUMENTAL</FilmSub>
          </FilmLabel>
        </motion.div>

        {/* ── BOTTOM ROW ─────────────────────────── */}
        <BottomRow>
          <motion.div {...fadeIn}>
            <BottomLeft>
              <ProjectSmall>EL CORSÓDROMO</ProjectSmall>
              <ProjectBig>LA FIESTA</ProjectBig>
            </BottomLeft>
          </motion.div>
          <motion.div {...fadeRight}>
            <BottomRight>
              <Description>
                En la provincia de Misiones, durante tres noches al año, los brillos y las plumas danzan al compás de la Escola do Samba en el clímax de una celebración que exige el trabajo arduo y apasionado de cientos de personas dedicadas al diseño, la música, los trajes y la organización durante los 362 días restantes.
              </Description>
              <Description>
                <span>Tres Noches al Año</span> sigue múltiples historias individuales para retratar la pasión desbordante detrás de cada comparsa: la que desafía obstáculos económicos, culturales y religiosos con una convicción simple y poderosa —que la alegría, el disfrute y la risa pertenecen a todos.
              </Description>
            </BottomRight>
          </motion.div>
        </BottomRow>
      </motion.div>
    </Section >
  );
}

/* ─── Styled Components ─────────────────────────────────────────── */

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8rem 3rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 100svh;
  }
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 140%;
  background-image: url('/content/hero-image.webp');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  z-index: 0;

  @media (max-width: 768px) {
    background-position: 80% center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.45) 50%,
    rgba(0, 0, 0, 0.72) 100%
  );
  z-index: 0;
`;


/* ── FILM LABEL ────────────────────────────── */

const FilmLabel = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 1.5rem;
  text-decoration: none;
  display: block;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const FilmTitle = styled.p`
  font-family: var(--font-condensed-black);
  font-size: clamp(1.4rem, 3vw, 4rem);
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.95);
`;

const FilmSub = styled.p`
  font-family: var(--font-narrow);
  font-size: clamp(1rem, 2vw, 2.2rem);
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-top: 0.2rem;
  text-shadow: 0 2px 12px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.9);
`;

/* ── BOTTOM ────────────────────────────────── */

const BottomRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const ProjectSmall = styled.p`
  font-family: var(--font-bold);
  font-size: clamp(2.1rem, 5vw, 2.5rem);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-shadow: 0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,1);
`;

const ProjectBig = styled.h2`
  font-family: var(--font-bold);
  font-size: clamp(2.2rem, 5vw, 4rem);
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,1);
`;

const BottomRight = styled.div`
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 100px;

  @media (max-width: 1600px) {
    max-width: 800px;
  }
  @media (max-width: 1440px) {
    max-width: 700px;
    padding-right: 50px;
  }
  @media (max-width: 1150px) {
    max-width: 500px;
    padding-right: 0px;
  }
`;

const Description = styled.p`
  font-family: var(--font-black);
  font-size: clamp(1rem, 1.8vw, 1.35rem);
  color: var(--primary);
  line-height: 1.55;
  letter-spacing: 0.01em;
  text-shadow: 0 1px 10px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.9);

  span {
    font-style: italic;
  }
`;
