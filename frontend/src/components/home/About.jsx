import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Tag = styled.span`
  color: var(--primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
`;

const Text = styled.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
  line-height: 1.7;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4/5;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

const About = () => {
    return (
        <AboutSection id="about">
            <ImageContainer
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Usar un placeholder o generar imagen luego */}
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                    [Imagen de Empresa]
                </div>
            </ImageContainer>

            <Content>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Tag>Nosotros</Tag>
                    <Title>Pasión por la perfección digital</Title>
                    <Text>
                        En Tres Noches, no solo creamos sitios web; construimos experiencias que
                        conectan marcas con personas. Nuestro enfoque combina diseño de vanguardia
                        con una ejecución técnica impecable.
                    </Text>
                    <Text>
                        Creemos en la simplicidad, la velocidad y el impacto visual como pilares
                        fundamentales de cualquier éxito digital.
                    </Text>
                </motion.div>
            </Content>
        </AboutSection>
    );
};

export default About;
