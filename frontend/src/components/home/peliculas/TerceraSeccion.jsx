import { useRef } from 'react';
import styled from "styled-components";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TerceraSeccionPelicula() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yVideo = useTransform(scrollYProgress, [0, 1], [-50, 50]);

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
      <VideoBackground autoPlay muted loop playsInline style={{ y: yVideo }}>
        <source src="/content/video-pais-feliz.MP4" type="video/mp4" />
      </VideoBackground>
      <Overlay />

      <motion.div style={{ y: yParallax, zIndex: 1, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        {/* ── TOP ROW ────────────────────────────── */}
        <motion.div {...fadeIn}>


          {/* ── FILM LABEL ─────────────────────────── */}
          <FilmLabel>
            <FilmTitle>UN MUNDO FELIZ: MI PAIS</FilmTitle>
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
                Nuestra próxima película documenta un proyecto pionero:
                el desarrollo del primer barrio cannábico de Latinoamérica.
                Un ecosistema integral de producción, investigación, vivienda
                y comunidad en torno al cannabis medicinal e industrial.
              </Description>
              <Description>
                La película sigue este proceso histórico mientras trabajamos
                con inversores y organismos públicos para hacer realidad esta
                visión transformadora.
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
  display: flex;
  height: 100svh;
  flex-direction: column;
  justify-content: space-between;
  padding: 8rem 3rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 100svh;
  }
`;

const VideoBackground = styled(motion.video)`
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 120%;
  object-fit: cover;
  z-index: 0;

  @media (max-width: 768px) {
    object-position: left;
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
  font-size: clamp(1.4rem, 3vw, 3.5rem);
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
