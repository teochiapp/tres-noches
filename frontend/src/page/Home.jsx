import styled from 'styled-components';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Proyects';
import SeccionPelicula from '../components/home/peliculas/PrimerSeccion';
import SegundaSeccionPelicula from '../components/home/peliculas/SegundaSeccion';
import TerceraSeccionPelicula from '../components/home/peliculas/TerceraSeccion';
import CuartaSeccionPelicula from '../components/home/peliculas/CuartaSeccion';

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
            <TerceraSeccionPelicula />
            <CuartaSeccionPelicula />
        </HomeContainer>
    );
};

export default Home;
