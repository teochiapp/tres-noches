import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../api/config';

export default function SingleMovie() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        // Buscar por Slug usando filtros de Strapi
        const response = await axios.get(`${API_URL}/api/proyectos?filters[Slug][$eq]=${slug}&populate=*`);
        const results = response.data.data;
        if (!results || results.length === 0) {
          setError(new Error('Proyecto no encontrado'));
          setLoading(false);
          return;
        }
        setProject(results[0]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching project details:", err);
        setError(err);
        setLoading(false);
      }
    };

    if (slug) {
      fetchProject();
    }
    window.scrollTo(0, 0);
  }, [slug]);

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

  if (loading) return <StatusMessage>Cargando proyecto...</StatusMessage>;
  if (error || !project) return <StatusMessage>Error al cargar el proyecto.</StatusMessage>;

  // Helpers to extract data based on Strapi structure
  const attrs = project.attributes || project;
  const title = attrs.Titulo || "Sin título";
  const subtitle = attrs.Subtitulo || "";
  const fecha = attrs.Fecha || "Próximamente";
  const displaySlug = attrs.Slug || slug;

  // Support for both rich text blocks (v4/v5) and plain text
  const description = typeof attrs.Descripcion === 'string'
    ? attrs.Descripcion
    : Array.isArray(attrs.Descripcion)
      ? attrs.Descripcion.map(block => block.children?.map(child => child.text).join('')).join('\n\n')
      : "Sin descripción disponible.";

  // Support for both v4 (.data.attributes.url) and v5 (.url) media structures
  const portData = attrs.Portada?.data?.attributes || attrs.Portada;
  const heroMediaUrl = portData?.url ? (portData.url.startsWith('http') ? portData.url : `${API_URL}${portData.url}`) : "/content/hero-image.webp";
  const isVideo = portData?.mime?.startsWith('video/') || (portData?.url && portData.url.match(/\.(mp4|webm|ogg)$/i)) || false;

  // Extract category to conditionally render sections
  const catV5 = attrs.categoria && typeof attrs.categoria === 'object' && !Array.isArray(attrs.categoria) && attrs.categoria.Nombre
    ? attrs.categoria
    : null;
  const catV4 = attrs.categoria?.data?.attributes ?? null;
  const catName = (catV5?.Nombre || catV4?.Nombre || 'OTROS').toUpperCase();
  const isImpacto = catName === 'IMPACTO';

  return (
    <PageContainer ref={containerRef}>
      <BackButton onClick={() => navigate(-1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        VOLVER
      </BackButton>

      <HeroSection>
        <HeroImageWrapper style={{ y: heroY, opacity: heroOpacity }}>
          {isVideo ? (
            <HeroVideo autoPlay muted loop playsInline>
              <source src={heroMediaUrl} type={portData?.mime || "video/mp4"} />
            </HeroVideo>
          ) : (
            <HeroImage src={heroMediaUrl} alt={title} />
          )}
          <HeroOverlay />
        </HeroImageWrapper>

        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <SubTitle>{subtitle}</SubTitle>
          <MainTitle>{title}</MainTitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ProjectInfo {...fadeUp}>
          <Label>Sobre el Proyecto</Label>
          <IntroText>{subtitle}</IntroText>
          <DescriptionText>{description}</DescriptionText>
        </ProjectInfo>

        <StatsSection
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <StatBox variants={fadeUp}>
            <StatNum>{fecha}</StatNum>
            <StatLabel>FECHA / AÑO</StatLabel>
          </StatBox>
          <StatBox variants={fadeUp}>
            <StatNum>ARG</StatNum>
            <StatLabel>ORIGEN</StatLabel>
          </StatBox>
        </StatsSection>
      </ContentSection>

      {isImpacto && (
        <GallerySection>
          {/* For now, just show the hero image as part of the gallery if no other gallery items exist */}
          <GalleryImageWrapper
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            $isLast={true}
          >
            {isVideo ? (
              <GalleryVideo autoPlay muted loop playsInline>
                <source src={heroMediaUrl} type={portData?.mime || "video/mp4"} />
              </GalleryVideo>
            ) : (
              <GalleryImage src={heroMediaUrl} alt={title} />
            )}
            <GalleryOverlay />
            <CtaContent>
              <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CtaTitle>SÉ PARTE DE LA HISTORIA</CtaTitle>
                <CtaButton onClick={() => navigate('/#contacto')}>
                  SUMATE AL PROYECTO
                </CtaButton>
              </motion.div>
            </CtaContent>
          </GalleryImageWrapper>
        </GallerySection>
      )}
    </PageContainer>
  );
}

const StatusMessage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    font-family: var(--font-main);
`;

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
  height: 100%;
  z-index: 0;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(40%) contrast(110%);
`;

const HeroVideo = styled.video`
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
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9), 0 1px 4px rgba(0, 0, 0, 1);
`;

const MainTitle = styled.h1`
  font-family: var(--font-bold);
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin: 0;
  text-shadow: 0 2px 30px rgba(0, 0, 0, 0.9), 0 1px 8px rgba(0, 0, 0, 1);
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
  font-size: clamp(1.7rem, 2.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
`;

const DescriptionText = styled.p`
  font-family: var(--font-thin);
  font-size: clamp(1.4rem, 1.5vw, 2rem);
  font-weight: 600;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  max-width: 90%;
  white-space: pre-wrap;
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

const GalleryVideo = styled.video`
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
