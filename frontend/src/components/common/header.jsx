import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const logoFontSize = useTransform(
    smoothScrollY,
    [0, 250],
    isMobile ? ['4rem', '2.5rem'] : ['5.6rem', '3rem']
  );
  const logoTop = useTransform(
    smoothScrollY,
    [0, 250], 
    isMobile ? ['0px', '-5px'] : ['10px', '-10px']
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Quienes Somos', path: '/quienes-somos' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <Nav>
          <Logo
            to="/"
            style={{ fontSize: logoFontSize, top: logoTop }}
            initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.4, ease: "backOut" }
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            Tres <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >Noches</motion.span>
          </Logo>

          <NavLinks>
            {navItems.map(item => (
              <NavLink key={item.name} to={item.path}>{item.name}</NavLink>
            ))}
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
          </MobileOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
  background: transparent;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: 50px;
`;

const Logo = styled(motion(Link))`
  position: absolute;
  left: 0;
  top: -10px;
  display: flex;
  flex-direction: column;
  font-weight: 900;
  line-height: 0.8;
  color: white;
  text-transform: uppercase;
  letter-spacing: -1px;
  z-index: 10;
  
  span {
    padding-left: 0.8em;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    top: -5px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: var(--primary);

  &:hover {
    color: white;
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
