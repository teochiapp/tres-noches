import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = styled.section`
  padding: 120px 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    z-index: -1;
  }
`;

const Badge = styled(motion.span)`
  background: var(--glass);
  border: 1px solid var(--glass-border);
  padding: 8px 16px;
  border-radius: 99px;
  font-size: 0.875rem;
  color: var(--primary);
  margin-bottom: 24px;
  display: inline-block;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  max-width: 900px;
  margin-bottom: 24px;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 40px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 16px;
  justify-content: center;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const PrimaryButton = styled.button`
  background: var(--primary);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: var(--primary-dark);
  }
`;

const SecondaryButton = styled.button`
  background: var(--glass);
  border: 1px solid var(--glass-border);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;

  &:hover {
    background: var(--glass-border);
  }
`;

const Hero = () => {
    return (
        <HeroSection>
            <Badge
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Bienvenido a Tres Noches
            </Badge>

            <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Construyendo el futuro digital de tu marca
            </Title>

            <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Desarrollo web de alto impacto, diseño premium y soluciones integrales
                para potenciar tu presencia en el mundo digital.
            </Subtitle>

            <ButtonGroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <PrimaryButton>
                    Empezar Proyecto <ArrowRight size={20} />
                </PrimaryButton>
                <SecondaryButton>
                    Ver Portafolio
                </SecondaryButton>
            </ButtonGroup>
        </HeroSection>
    );
};

export default Hero;
