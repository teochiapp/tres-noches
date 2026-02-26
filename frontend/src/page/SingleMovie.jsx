import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';

const projectsData = {
    "corsodromo": {
        title: "EL CORSÓDROMO",
        subtitle: "CONSTRUCCIÓN DEL SAMBÓDROMO",
        description: "Estamos construyendo el espacio que esa tradición del carnaval merece. En alianza con inversores privados, el municipio y la provincia, estamos desarrollando el primer corsódromo de Concepción de las Sierras. Un proyecto que generará; empleo, turismo, identidad y futuro.",
        longDescription: "Buscamos inversores y colaboradores que crean en el poder transformador de la cultura. Con la participación de la comunidad y un diseño arquitectónico innovador, este espacio será el corazón de las festividades locales y un centro de atracción turística de primer nivel. Un hito estructural que potenciará el desarrollo regional y marcará un antes y un después en nuestra forma de celebrar.",
        heroImage: "/content/corsodromo.webp",
        gallery: [
            "/content/corsodromo.webp",
        ],
        accentColor: "#EF511D"
    },
    "barrio-canabico": {
        title: "EL BARRIO CANÁBICO",
        subtitle: "DE UNA PELICULA A UN PAÍS",
        description: "Una iniciativa disruptiva e innovadora que nace a partir de una película y busca transformar la realidad de toda una comunidad mediante la implementación pionera de conceptos sustentables.",
        longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cumque exercitationem porro itaque est? Error alias consequatur officiis, ducimus quasi ipsam excepturi saepe sapiente id dolore ab, iste ipsa accusamus corrupti amet at. Este proyecto busca no solo impactar culturalmente sino también establecer un nuevo modelo productivo y social.",
        heroImage: "/content/decoration-single-heads.png", // Usando las imagenes que ya tienen
        gallery: [
            "/content/decoration-heads.png",

        ],
        accentColor: "#ec4899"
    },
    "default": {
        title: "TRES NOCHES AL AÑO",
        subtitle: "CONOCE MÁS SOBRE LA PELÍCULA",
        description: "Un viaje profundo a las tradiciones y la cultura de nuestra región, retratado de manera íntima y espectacular.",
        longDescription: "Esta película captura la esencia del carnaval y la vida de quienes lo hacen posible. Un trabajo documental y de ficción que te sumergirá en las historias más cautivantes de nuestros protagonistas. Cada escena está pensada para transmitir el calor, la pasión y el color de nuestra gente.",
        heroImage: "/content/hero.jpg",
        gallery: [
            "/content/hero.jpg",
        ],
        accentColor: "rgba(255, 255, 255, 0.8)"
    }
};

export default function SingleMovie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const containerRef = useRef(null);

    const project = projectsData[id] || projectsData["default"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const fadeUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        },
        viewport: { once: true }
    };

    return (
        <PageContainer ref={containerRef}>

            {/* Botón de volver flotante */}
            <BackButton onClick={() => navigate(-1)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                VOLVER
            </BackButton>

            {/* Hero Section */}
            <HeroSection>
                <HeroImageWrapper style={{ y: heroY, opacity: heroOpacity }}>
                    <HeroImage src={project.heroImage} alt={project.title} />
                    <HeroOverlay />
                </HeroImageWrapper>

                <HeroContent
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    <SubTitle>{project.subtitle}</SubTitle>
                    <MainTitle>{project.title}</MainTitle>
                </HeroContent>
            </HeroSection>

            {/* Info Section */}
            <ContentSection>
                <ProjectInfo {...fadeUp}>
                    <Label>Sobre el Proyecto</Label>
                    <IntroText>{project.description}</IntroText>
                    <DescriptionText>{project.longDescription}</DescriptionText>
                </ProjectInfo>

                <StatsSection
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    <StatBox variants={fadeUp}>
                        <StatNum>2026</StatNum>
                        <StatLabel>AÑO DE LANZAMIENTO</StatLabel>
                    </StatBox>
                    <StatBox variants={fadeUp}>
                        <StatNum>DOC</StatNum>
                        <StatLabel>FORMATO</StatLabel>
                    </StatBox>
                    <StatBox variants={fadeUp}>
                        <StatNum>ARG</StatNum>
                        <StatLabel>ORIGEN</StatLabel>
                    </StatBox>
                </StatsSection>
            </ContentSection>

            {/* Gallery Section */}
            <GallerySection>
                {project.gallery.map((img, index) => {
                    const isLast = index === project.gallery.length - 1;
                    return (
                        <GalleryImageWrapper
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                            $isLast={isLast}
                        >
                            <GalleryImage src={img} alt={`${project.title} gallery ${index}`} />
                            {isLast && (
                                <>
                                    <GalleryOverlay />
                                    <CtaContent>
                                        <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <CtaTitle>SÉ PARTE DE LA HISTORIA</CtaTitle>
                                            <CtaButton>
                                                SUMATE AL PROYECTO
                                            </CtaButton>
                                        </motion.div>
                                    </CtaContent>
                                </>
                            )}
                        </GalleryImageWrapper>
                    );
                })}
            </GallerySection>
        </PageContainer>
    );
}

// ============== ESTILOS ============== //

const PageContainer = styled.main`
  background-color: var(--bg-dark, #000);
  min-height: 100vh;
  color: #fff;
  overflow: hidden;
  position: relative;
`;

const BackButton = styled.button`
  position: fixed;
  top: 120px;
  left: 3%;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: var(--font-bold);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    top: 90px;
    padding: 8px 15px;
    font-size: 0.8rem;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const HeroSection = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 4rem 10%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 80vh;
    padding: 3rem 5%;
  }
`;

const HeroImageWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: 0;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(40%) contrast(110%);
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  padding-bottom: 5vh;
`;

const SubTitle = styled.h3`
  font-family: var(--font-thin);
  font-size: clamp(1rem, 2vw, 1.8rem);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary, #EF511D);
  margin-bottom: 1rem;
`;

const MainTitle = styled.h1`
  font-family: var(--font-bold);
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin: 0;
`;

const ContentSection = styled.section`
  padding: 8rem 10%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  
  @media (max-width: 1024px) {
    gap: 4rem;
    padding: 4rem 5%;
  }
`;

const ProjectInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Label = styled.span`
  font-family: var(--font-alt);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
  display: block;
`;

const IntroText = styled.p`
  font-family: var(--font-main);
  font-size: clamp(1.5rem, 2.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
`;

const DescriptionText = styled.p`
  font-family: var(--font-thin);
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  max-width: 90%;
`;

const StatsSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6rem;
  justify-content: flex-start;
  
  @media (max-width: 1024px) {
    gap: 4rem;
  }
`;

const StatBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StatNum = styled.span`
  font-family: var(--font-bold);
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1;
  color: #fff;
`;

const StatLabel = styled.span`
  font-family: var(--font-main);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
`;

const GallerySection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const GalleryImageWrapper = styled(motion.div)`
  width: 100%;
  height: ${props => props.$isLast ? '60vh' : '40vh'};
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: ${props => props.$isLast ? '40vh' : '40vh'};
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Capa oscura para que el texto sea legible */
  z-index: 1;
`;

const CtaContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5%;
`;

const CtaTitle = styled.h2`
  font-family: var(--font-bold);
  font-size: clamp(2rem, 5vw, 4rem);
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  color: #fff;
`;

const CtaButton = styled.button`
  background-color: #333333;
  color: #fff;
  font-family: var(--font-main);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1.2rem 2.2rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  letter-spacing: 0.02em;

  &:hover {
    background-color: #555555;
  }
`;
