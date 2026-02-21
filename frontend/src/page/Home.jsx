import React from 'react';
import styled from 'styled-components';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import ParallaxSection from '../components/home/ParallaxSection';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Home = () => {
    return (
        <HomeContainer>
            <Header />
            <Hero />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <About />
            </motion.div>
            <ParallaxSection />
            <Footer />
        </HomeContainer>
    );
};

export default Home;
