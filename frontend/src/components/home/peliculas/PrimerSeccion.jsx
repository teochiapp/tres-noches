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
      <Overlay />

      <motion.div style={{ y: yParallax, zIndex: 1, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        {/* ── TOP ROW ────────────────────────────── */}
        <motion.div {...fadeIn}>


          {/* ── FILM LABEL ─────────────────────────── */}
          <FilmLabel>
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
                Gran parte de la comunidad de algunas ciudades de Misiones como
                Concepción de la Sierra, San Javier y San Ignacio, se moviliza
                durante todo el año para disfrutar de las tres noches del Carnaval.
              </Description>
              <Description>
                Plumas, música, baile y alegría reflejan el esfuerzo, la
                perseverancia y, sobre todo, la inigualable pasión de los
                integrantes de las comparsas.
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
  background-image: url('/content/hero-image.webp');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8rem 3rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 100svh;
    background-position: 80% center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.55) 50%,
    rgba(0, 0, 0, 0.72) 100%
  );
  z-index: 0;
`;


/* ── FILM LABEL ────────────────────────────── */

const FilmLabel = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 1.5rem;
`;

const FilmTitle = styled.p`
  font-family: var(--font-alt);
  font-size: clamp(1.4rem, 3vw, 4rem);
  font-weight: 900;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
`;

const FilmSub = styled.p`
  font-family: var(--font-main);
  font-size: clamp(1rem, 2vw, 2rem);
  font-weight: 400;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 0.2rem;
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
  font-family: var(--font-alt);
  font-size: clamp(2.1rem, 5vw, 2.5rem);
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const ProjectBig = styled.h2`
  font-family: var(--font-bold);
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -0.01em;
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
  font-family: var(--font-alt);
  font-size: clamp(1rem, 1.8vw, 1.35rem);
  font-weight: 700;
  color: var(--primary);
  line-height: 1.55;
  letter-spacing: 0.01em;
`;
