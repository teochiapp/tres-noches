import styled from "styled-components";

export default function Corsodromo() {
    return (
        <Section>
            <Overlay />

            {/* ── TOP ROW ────────────────────────────── */}
            <TopRow>
                <MainTitle>
                    <span>TRES</span>
                    <span>NOCHES</span>
                </MainTitle>
            </TopRow>

            {/* ── FILM LABEL ─────────────────────────── */}
            <FilmLabel>
                <FilmTitle>TRES NOCHES AL AÑO</FilmTitle>
                <FilmSub>LARGOMETRAJE DOCUMENTAL</FilmSub>
            </FilmLabel>

            {/* ── BOTTOM ROW ─────────────────────────── */}
            <BottomRow>
                <BottomLeft>
                    <ProjectSmall>EL CORSÓDROMO</ProjectSmall>
                    <ProjectBig>LA FIESTA</ProjectBig>
                </BottomLeft>

                <BottomRight>
                    <Description>
                        Gran parte de la comunidad de algunas ciudades de Misiones como
                        Concepción de la Sierra, San Javier y San Ignacio, se moviliza
                        durante todo el año para disfrutar de las tres noches del Carnaval.
                    </Description>
                    <Description>
                        Plumas, música, baile y alegría reflejan el esfuerzo, la
                        perseverancia y, sobre todo, la inigualable pasión de los
                        integrantes de las comparsas.
                    </Description>
                </BottomRight>
            </BottomRow>
        </Section>
    );
}

/* ─── Styled Components ─────────────────────────────────────────── */

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url('/content/hero-image.webp');
  background-size: cover;
  background-position: center , top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 3rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 100svh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.55) 50%,
    rgba(0, 0, 0, 0.72) 100%
  );
  z-index: 0;
`;

/* ── TOP ───────────────────────────────────── */

const TopRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const MainTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: var(--font-bold);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  color: #fff;
  line-height: 0.88;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.span`
  font-family: var(--font-alt);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: var(--primary);
  }
`;

/* ── FILM LABEL ────────────────────────────── */

const FilmLabel = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 1.5rem;
`;

const FilmTitle = styled.p`
  font-family: var(--font-alt);
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 900;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
`;

const FilmSub = styled.p`
  font-family: var(--font-main);
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 400;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 0.2rem;
`;

/* ── BOTTOM ────────────────────────────────── */

const BottomRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const ProjectSmall = styled.p`
  font-family: var(--font-alt);
  font-size: clamp(2.1rem, 5vw, 2.5rem);
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const ProjectBig = styled.h2`
  font-family: var(--font-bold);
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -0.01em;
`;

const BottomRight = styled.div`
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 100px;

  @media (max-width: 1600px) {
    max-width: 800px;
  }
  @media (max-width: 1440px) {
    max-width: 700px;
    padding-right: 50px;
  }
  @media (max-width: 1150px) {
    max-width: 500px;
    padding-right: 0px;
  }
`;

const Description = styled.p`
  font-family: var(--font-alt);
  font-size: clamp(1rem, 1.8vw, 1.35rem);
  font-weight: 700;
  color: var(--primary);
  line-height: 1.55;
  letter-spacing: 0.01em;
`;
