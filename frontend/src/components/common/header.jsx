import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const logoFontSize = useTransform(
    smoothScrollY,
    [0, 250],
    isMobile ?
      (window.innerWidth <= 768 ? ['3.5rem', '2rem'] : ['4.5rem', '2.5rem']) :
      ['5.6rem', '3rem']
  );
  const logoTop = useTransform(
    smoothScrollY,
    [0, 250],
    isMobile ?
      (window.innerWidth <= 768 ? ['0px', '-2px'] : ['5px', '-5px']) :
      ['10px', '-10px']
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
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
            <CloseBtn
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </CloseBtn>

            {navItems.map(item => (
              <NavLink
                style={{ fontSize: '1.8rem', padding: '10px' }}
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
  height: 60px;
`;

const Logo = styled(motion(Link))`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  font-family: var(--font-semibold);
  font-weight: 900;
  line-height: 0.8;
  color: white;
  text-transform: uppercase;
  letter-spacing: -2px;
  z-index: 10;
  
  span {
    padding-left: 0.8em;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: var(--primary);
  letter-spacing: 1px;
  position: relative;
  padding: 5px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  color: white;
  padding: 10px;
  z-index: 1001;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  color: white;
  padding: 10px;
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  z-index: 2000;
`;
