import styled from "styled-components";
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" }
};




export default function AboutUS() {
  return (
    <Section id="quienes-somos">
      <Parallax speed={-5}>
        <motion.div {...fadeIn}>
          <Headline>
            SOMOS UNA PRODUCTORA QUE TRANSFORMA NARRATIVAS EN PROYECTOS DE IMPACTO TERRITORIAL.
          </Headline>
        </motion.div>
      </Parallax>

      <BottomContainer>
        <Label></Label>

        {/* Usamos un wrapper personalizado para manejar el ancho del Parallax en flexbox */}
        <ParallaxRightWrapper as={Parallax} speed={5}>
          <motion.div {...fadeIn}>
            <ContentRight style={{ maxWidth: '100%' }}>
              <Paragraph>
                Cada película que hacemos abre la puerta a proyectos más grandes. Documentales que se convierten en infraestructura cultural.
              </Paragraph>
              <Paragraph>
                Narrativas que movilizan a toda una comunidad. Historias que construyen futuro. Producimos contenido, experiencias y cambio real.
              </Paragraph>

              <ActionLink href="#">
                Hacemos que las cosas pasen.
              </ActionLink>
            </ContentRight>
          </motion.div>
        </ParallaxRightWrapper>
      </BottomContainer>
    </Section>
  );
}


// Container principal
const Section = styled.section`
  background-color: var(--bg-darker);
  color: var(--text-primary);
  padding: 200px 30px;
  width: 100%;
  gap: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 4rem 2rem;
    min-height: auto;
    gap: 4rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    gap: 3rem;
  }
`;

// Texto principal grande
const Headline = styled.h1`
  font-family: var(--font-bold);
  font-size: 5rem;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 80px;
  letter-spacing: 0px;
  max-width: 65%;
  margin: 0;
  color: #ffffff; /* Blanco puro para contraste máximo como en la imagen */

 
  @media (max-width: 1440px) {
    font-size: 80px;
    max-width: 100%;
  }
  @media (max-width: 1024px) {
    font-size: 4rem;
    max-width: 100%;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 1;
  }
`;

// Contenedor inferior (About, Textos, Link)
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: auto;
  padding-top: 4rem;
  padding-right: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding-right: 0;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

// Etiqueta "ABOUT" a la izquierda
const Label = styled.span`
  font-family: var(--font-main);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-secondary);
  letter-spacing: 0.05em;
  align-self: flex-start; /* Se mantiene arriba en el bloque inferior */
`;

// Contenedor de la derecha con los párrafos y el link
const ContentRight = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    max-width: 80%;
    margin-left: auto; /* Alinear a la derecha en tablet si se desea, o resetear */
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

const Paragraph = styled.p`
  font-family: 'Courier New', Courier, monospace; /* Monospace para ese look técnico de la imagen */
  font-size: 18px;
  line-height: 1.2em;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ActionLink = styled.a`
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-primary);
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

// Wrapper para el contenido derecho para asegurar que el Parallax no rompa el layout
const ParallaxRightWrapper = styled.div`
    width: 60%;

    
    @media (max-width: 1024px) {
        width: 100%;
    }
`;
