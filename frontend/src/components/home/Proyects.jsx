import { useRef } from 'react';
import styled from "styled-components";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useFetchProjects } from '../../hooks/useFetchProjects';

// Fallback static data
const staticCategories = [
  {
    title: "PELÍCULAS",
    items: [
      { titulo: "TRES NOCHES AL AÑO", slug: "tres-noches-al-ano" },
      { titulo: "UN MUNDO PERFECTO: MI PAÍS", slug: "un-mundo-mejor-mi-pais" }
    ],
  },
  {
    title: "IMPACTO",
    items: [
      { titulo: "EL CORSÓDROMO", slug: "el-corsodromo" },
      { titulo: "UN BARRIO CANÁBICO", slug: "un-barrio-canabico" }
    ],
  },
  {
    title: "EVENTOS",
    items: [
      { titulo: "LA FIESTA", slug: "la-fiesta" }
    ],
  },
];


const fadeRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Services() {
  const containerRef = useRef(null);
  const { categories, loading, error } = useFetchProjects();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Use dynamic categories if available, otherwise fallback to static
  const displayCategories = categories.length > 0 ? categories : staticCategories;

  return (
    <Section ref={containerRef} id="proyectos">
      <Label>Proyectos</Label>

      <Content style={{ y: yParallax }}>
        <motion.div {...fadeRight}>
          {displayCategories.map((cat) => (
            <CategoryBlock key={cat.title}>
              <CategoryTitle>{cat.title}</CategoryTitle>
              <ItemList>
                {cat.items.map((item) => (
                  <Item key={item.slug || (typeof item === 'string' ? item : item.titulo)}>
                    <ProjectLink to={item.slug ? `/proyecto/${item.slug}` : '#'}>
                      {item.titulo || item}
                    </ProjectLink>
                  </Item>
                ))}
              </ItemList>
            </CategoryBlock>
          ))}
        </motion.div>
      </Content>

    </Section>
  );
}

/* ─── Styled Components ─────────────────────────────────────────── */

const Section = styled.section`
    background-color: #000;
    min-height: 100vh;
    padding: 3rem 4rem 6rem;
    position: relative;
    display: flex;
    

  @media (max-width: 1440px) {
    padding: 2.5rem 1.5rem 4rem;
  }
  @media (max-width: 768px) {
    min-height: 80vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  @media (max-width: 425px) {
    min-height: 50vh;
  }
`;
const Label = styled.span`
  font-family: var(--font-alt);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.55);
  text-transform: none;
  margin-bottom: 3rem;
  display: block;

  @media (max-width: 768px) {
   
  font-size: 1.5rem;
  }
`;

const Content = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: 680px;
    margin: 0 auto;
    width: 100%;
    align-self: center;
    align-items: flex-start;
    justify-content: center;
    padding-left: 110px;
  @media (max-width: 768px) {
    padding-left: 0;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 235px;

  }
`;

const CategoryBlock = styled.div`
  padding-bottom: 0.5rem;
`;

const CategoryTitle = styled.h2`
  font-family: var(--font-bold);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  color: #fff;
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.li`
  padding: 0.15rem 0;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  font-family: var(--font-main);
  font-size: clamp(1.2rem, 1.8vw, 2.5rem);
  font-weight: 400;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.25s ease, letter-spacing 0.25s ease;
  display: block;

  &:hover {
    color: #fff;
    letter-spacing: 0.18em;
  }
`;
