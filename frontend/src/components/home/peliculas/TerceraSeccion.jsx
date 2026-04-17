import { Link } from 'react-router-dom';
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
          <FilmLabel as={Link} to="/proyecto/un-mundo-mejor-mi-pais">
            <FilmTitle>UN MUNDO PERFECTO: MI PAIS</FilmTitle>
            <FilmSub>LARGOMETRAJE DOCUMENTAL</FilmSub>
          </FilmLabel>
        </motion.div>

        {/* ── BOTTOM ROW ─────────────────────────── */}
        <BottomRow>
          <motion.div {...fadeIn}>
            <BottomLeft>
              <ProjectBig>UN MUNDO PERFECTO</ProjectBig>
            </BottomLeft>
          </motion.div>
          <motion.div {...fadeRight}>
            <BottomRight>
              <Description>
                Algo se está moviendo. Existe una incomodidad que ya no es fácil ignorar. No es solo el costo de vida, el tránsito, el exceso de información, ni el ruido. Es algo más profundo y más difícil de nombrar: la sensación de que el espacio se terminó. Que ya no entramos. Que el modelo que heredamos —crecer, producir, consumir, acumular— llegó a un límite que empieza a sentirse en el cuerpo, en la agenda, en la cuenta bancaria, en el aire.
              </Description>
              <Description>
                Y en ese contexto, aparece un deseo que parecía olvidado: volver a la tierra.
              </Description>
              <Description>
                Un grupo de personas reales que, con sus contradicciones, sus locuras y su creatividad, fundan un nuevo país —Mi País— con la ilusión de ofrecer una visión diferente del mundo en que vivimos.
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
  text-decoration: none;
  display: block;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const FilmTitle = styled.p`
  font-family: var(--font-condensed-black);
  font-size: clamp(1.4rem, 3vw, 3.5rem);
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.95);
`;

const FilmSub = styled.p`
  font-family: var(--font-narrow);
    font-size: clamp(1rem, 2vw, 2.2rem);
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 0.2rem;
  text-shadow: 0 2px 12px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.9);
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


const ProjectBig = styled.h2`
  font-family: var(--font-bold);
  font-size: clamp(2.2rem, 5vw, 3.5rem);
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
  gap: 0.75rem;
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
  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
  }
`;

const Description = styled.p`
  font-family: var(--font-bold);
  font-size: clamp(0.88rem, 1.5vw, 1.25rem);
  color: var(--primary);
  line-height: 1.6;
  letter-spacing: 0.01em;
  text-shadow: 0 1px 10px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.9);

  @media (max-width: 768px) {
    font-size: clamp(0.82rem, 3.8vw, 1rem);
    line-height: 1.55;
  }
`;
