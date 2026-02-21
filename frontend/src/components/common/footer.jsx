import React from 'react';
import styled from 'styled-components';
import { Rocket, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterGrid>
        <FooterBrand>
          <Logo to="/">
            Tres Noches
          </Logo>
        </FooterBrand>

        <FooterColumn>
          <h4>Navegación</h4>
          <FooterLink to="/">Inicio</FooterLink>
          <FooterLink to="/servicios">Servicios</FooterLink>
          <FooterLink to="/proyectos">Proyectos</FooterLink>
          <FooterLink to="/nosotros">Sobre nosotros</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <h4>Servicios</h4>
          <FooterLink to="#">Desarrollo Web</FooterLink>
          <FooterLink to="#">Diseño UI/UX</FooterLink>
          <FooterLink to="#">E-commerce</FooterLink>
          <FooterLink to="#">Mantenimiento</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <h4>Legal</h4>
          <FooterLink to="#">Privacidad</FooterLink>
          <FooterLink to="#">Términos</FooterLink>
          <FooterLink to="#">Cookies</FooterLink>
        </FooterColumn>
      </FooterGrid>

      <Copyright>
        <p>© {currentYear} Tres Noches. Todos los derechos reservados.</p>
        <p>Diseñado con ❤️ en Argentina</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;


const FooterContainer = styled.footer`
  background: var(--bg-darker);
  border-top: 1px solid var(--glass-border);
  padding: 80px 20px 40px;
  width: 100%;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  
  svg {
    color: var(--primary);
  }
`;

const Description = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 320px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
    transform: translateY(-3px);
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h4 {
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  font-size: 0.9375rem;

  &:hover {
    color: white;
    padding-left: 5px;
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding-top: 40px;
  border-top: 1px solid var(--glass-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.875rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;