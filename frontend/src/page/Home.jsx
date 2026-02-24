import styled from 'styled-components';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import SeccionPelicula from '../components/home/SeccionPelicula';
import SegundaSeccionPelicula from '../components/home/SegundaSeccionPelicula';
import Contact from '../components/home/Contact';

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
            <SeccionPelicula />
            <SegundaSeccionPelicula />
            <Contact />
        </HomeContainer>
    );
};

export default Home;
