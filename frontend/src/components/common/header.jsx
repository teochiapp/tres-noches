import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.$scrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(12px)' : 'none'};
  border-bottom: 1px solid ${props => props.$scrolled ? 'var(--glass-border)' : 'transparent'};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9375rem;

  &:hover {
    color: white;
  }
`;

const ContactButton = styled.button`
  background: var(--accent-gradient);
  color: white;
  padding: 10px 24px;
  border-radius: 99px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--bg-darker);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  z-index: 999;
`;

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Proyectos', path: '/proyectos' },
    ];

    return (
        <>
            <HeaderContainer $scrolled={scrolled}>
                <Nav>
                    <Logo to="/">
                        <Rocket size={24} />
                        Tres Noches
                    </Logo>

                    <NavLinks>
                        {navItems.map(item => (
                            <NavLink key={item.name} to={item.path}>{item.name}</NavLink>
                        ))}
                        <ContactButton>Contacto</ContactButton>
                    </NavLinks>

                    <MobileMenuBtn onClick={() => setIsMenuOpen(true)}>
                        <Menu size={24} />
                    </MobileMenuBtn>
                </Nav>
            </HeaderContainer>

            <AnimatePresence>
                {isMenuOpen && (
                    <MobileOverlay
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <MobileMenuBtn
                            style={{ position: 'absolute', top: '24px', right: '24px' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={32} />
                        </MobileMenuBtn>

                        {navItems.map(item => (
                            <NavLink
                                style={{ fontSize: '1.5rem' }}
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <ContactButton style={{ fontSize: '1.25rem' }}>Contacto</ContactButton>
                    </MobileOverlay>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
