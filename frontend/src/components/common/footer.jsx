import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <FooterContainer
      id="contacto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Parallax speed={-15}>
        <BigLogoSection
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          TRES <br />NOCHES
        </BigLogoSection>
      </Parallax>

      <Parallax speed={5}>
        <FooterContent
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <NavColumns>
            <Column>
              <FooterLink to="#inicio" onClick={(e) => handleNavClick(e, '#inicio')}>INICIO</FooterLink>
              <FooterLink to="#quienes-somos" onClick={(e) => handleNavClick(e, '#quienes-somos')}>QUIENES SOMOS</FooterLink>
              <FooterLink to="#proyectos" onClick={(e) => handleNavClick(e, '#proyectos')}>PROYECTOS</FooterLink>
            </Column>
            <Column>
              <ExternalLink href="mailto:hola@tresnoches.com">EMAIL</ExternalLink>
              <ExternalLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</ExternalLink>
              <ExternalLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</ExternalLink>
            </Column>
          </NavColumns>
        </FooterContent>
      </Parallax>

      <BottomBar
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Copyright>TRES NOCHES {currentYear} - Todos los derechos reservados ©</Copyright>
        <Copyright>
          Desarrollado por <CreditLink href="https://surcodes.com" target="_blank" rel="noopener noreferrer">SurCodes <ArrowUpRight size={14} /></CreditLink>
        </Copyright>
        <BackToTop onClick={(e) => handleNavClick(e, '#inicio')}>VOLVER ARRIBA</BackToTop>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(motion.footer)`
  background: #000;
  color: #fff;
  padding: 100px 4vw 40px;
  width: 100%;
  min-heigth:100vh;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

const BigLogoSection = styled(motion.div)`
  font-family: var(--font-bold);
  font-size: clamp(8rem, 20vw, 18rem);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  margin-bottom: 80px;
  width: 100%;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    font-size: clamp(4rem, 15vw, 8rem);
    margin-bottom: 40px;
  }
`;

const FooterContent = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const NavColumns = styled.div`
  display: flex;
  gap: 20px;
  width: 70%;

  @media (max-width: 768px) {
    gap: 40px;
    width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const FooterLink = styled(Link)`
  font-family: var(--font-alt);
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  padding: 2px 0;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ExternalLink = styled.a`
  font-family: var(--font-alt);
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  padding: 2px 0;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const BottomBar = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
`;

const Copyright = styled.span`
  font-family: var(--font-alt);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.5;
  flex: 1;

  &:nth-child(2) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    text-align: center !important;
  }
`;

const CreditLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

const BackToTop = styled.button`
  font-family: var(--font-alt);
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  opacity: 1;
  transition: opacity 0.3s ease;
  flex: 1;
  text-align: right;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    text-align: center;
  }
`;
