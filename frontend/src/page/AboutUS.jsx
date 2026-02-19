import styled from "styled-components";

// Container principal
const Section = styled.section`
  background-color: var(--bg-darker);
  color: var(--text-primary);
  padding: 6rem 4rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 4rem 2rem;
    min-height: auto;
    gap: 4rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    gap: 3rem;
  }
`;

// Texto principal grande
const Headline = styled.h1`
  font-family: var(--font-main);
  font-size: 5.5vw;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: -0.03em;
  max-width: 90%;
  margin: 0;
  color: #ffffff; /* Blanco puro para contraste máximo como en la imagen */

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 4rem;
    max-width: 100%;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 1;
  }
`;

// Contenedor inferior (About, Textos, Link)
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: auto;
  padding-top: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
`;

// Etiqueta "ABOUT" a la izquierda
const Label = styled.span`
  font-family: var(--font-main);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-secondary);
  letter-spacing: 0.05em;
  align-self: flex-start; /* Se mantiene arriba en el bloque inferior */
`;

// Contenedor de la derecha con los párrafos y el link
const ContentRight = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    max-width: 80%;
    margin-left: auto; /* Alinear a la derecha en tablet si se desea, o resetear */
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

const Paragraph = styled.p`
  font-family: 'Courier New', Courier, monospace; /* Monospace para ese look técnico de la imagen */
  font-size: 0.75rem;
  line-height: 1.6;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ActionLink = styled.a`
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-primary);
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export default function AboutUS() {
    return (
        <Section>
            <Headline>
                Movement exists in every aspect of our life, and is the best way to tell a story.
            </Headline>

            <BottomContainer>
                <Label>About</Label>

                <ContentRight>
                    <Paragraph>
                        At MO/VE, we specialize in transforming innovative ideas into captivating motion pictures. Our team of visionary filmmakers, storytellers, and digital artists collaborates to bring your concepts to life with unparalleled creativity and precision.
                    </Paragraph>
                    <Paragraph>
                        Whether it's crafting a compelling commercial, an inspiring documentary, or a groundbreaking short film, we blend artistry with cutting-edge technology to produce content that resonates deeply with audiences.
                    </Paragraph>

                    <ActionLink href="#">
                        Get in touch
                    </ActionLink>
                </ContentRight>
            </BottomContainer>
        </Section>
    );
}