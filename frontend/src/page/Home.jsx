import React from 'react';
import styled from 'styled-components';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Corsodromo from '../components/home/Corsodromo';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;


const Home = () => {
    return (
        <HomeContainer>
            <Hero />
            <About />
            <Services />
            <Corsodromo />
        </HomeContainer>
    );
};

export default Home;
