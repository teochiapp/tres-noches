import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-color: var(--bg-dark);
  color: var(--text-primary);
  text-align: center;
  padding: 20px;
  overflow: hidden;
  position: relative;
`;

const GlitchText = styled(motion.h1)`
  font-size: 15vw;
  font-family: var(--font-condensed-black);
  margin: 0;
  color: var(--primary);
  line-height: 1;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 30vw;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-family: var(--font-bold);
  margin-top: -10px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;


const HomeButton = styled(motion(Link))`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1.2rem 2.5rem;
  background-color: var(--primary);
  color: white;
  border-radius: 50px;
  font-family: var(--font-semibold);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(239, 81, 29, 0.25);
  z-index: 1;

  &:hover {
    background-color: #ff6a3a;
    box-shadow: 0 15px 35px rgba(239, 81, 29, 0.4);
  }
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, rgba(239, 81, 29, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
`;

const NotFound = () => {
    return (
        <Container>
            <BackgroundShape
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 30, -30, 0],
                    y: [0, -20, 20, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <GlitchText
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.1
                }}
            >
                404
            </GlitchText>

            <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Escena No Encontrada
            </Subtitle>

            <HomeButton
                to="/"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                <Home size={20} />
                Volver al Inicio
            </HomeButton>
        </Container>
    );
};

export default NotFound;
