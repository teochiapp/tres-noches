import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const ParallaxContainer = styled.section`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--bg-dark);
  margin: 100px 0;
`;

const BackgroundText = styled.div`
  position: absolute;
  font-size: clamp(8rem, 20vw, 15rem);
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  white-space: nowrap;
  user-select: none;
  z-index: 1;
`;

const ContentCard = styled(motion.div)`
  background: var(--glass);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  padding: 60px;
  border-radius: 32px;
  z-index: 2;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`;

const ParallaxImage = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  background: var(--accent-gradient);
  opacity: 0.2;
  filter: blur(60px);
  border-radius: 50%;
  z-index: 1;
`;

const ParallaxSection = () => {
    return (
        <ParallaxContainer>
            <Parallax speed={-20}>
                <BackgroundText>INNOVACIÓN</BackgroundText>
            </Parallax>

            <Parallax speed={10}>
                <ParallaxImage style={{ top: '10%', left: '10%' }} />
            </Parallax>

            <Parallax speed={15}>
                <ParallaxImage style={{ bottom: '10%', right: '10%', background: 'var(--primary)' }} />
            </Parallax>

            <ContentCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Efecto Parallax</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Utilizamos tecnologías de vanguardia para crear experiencias inmersivas.
                    El movimiento sutil de los elementos genera una sensación de profundidad
                    que cautiva a tus usuarios.
                </p>
            </ContentCard>

            <Parallax speed={20}>
                <BackgroundText style={{ bottom: '0', right: '-10%', color: 'var(--primary)', opacity: 0.05 }}>
                    DIGITAL
                </BackgroundText>
            </Parallax>
        </ParallaxContainer>
    );
};

export default ParallaxSection;
