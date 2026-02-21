import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <BigLogoSection>
        TRES <br />NOCHES
      </BigLogoSection>

      <FooterContent>
        <NavColumns>
          <Column>
            <FooterLink to="/" onClick={scrollToTop}>INICIO</FooterLink>
            <FooterLink to="/quienes-somos" onClick={scrollToTop}>QUIENES SOMOS</FooterLink>
            <FooterLink to="/proyectos" onClick={scrollToTop}>PROYECTOS</FooterLink>
          </Column>
          <Column>
            <ExternalLink href="mailto:hola@tresnoches.com">EMAIL</ExternalLink>
            <ExternalLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</ExternalLink>
            <ExternalLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</ExternalLink>
          </Column>
        </NavColumns>
      </FooterContent>

      <BottomBar>
        <Copyright>TRES NOCHES {currentYear} - Todos los derechos reservados ©</Copyright>
        <Copyright>
          Desarrollado por <CreditLink href="https://surcodes.com" target="_blank" rel="noopener noreferrer">SurCodes</CreditLink>
        </Copyright>
        <BackToTop onClick={scrollToTop}>VOLVER ARRIBA</BackToTop>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 100px 4vw 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const BigLogoSection = styled.div`
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

const FooterContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const NavColumns = styled.div`
  display: flex;
  gap: 120px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  font-size: 0.9rem;
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

const BottomBar = styled.div`
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

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const CreditLink = styled.a`
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

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;
