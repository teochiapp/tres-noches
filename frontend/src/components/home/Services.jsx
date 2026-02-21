import styled from "styled-components";

const categories = [
    {
        title: "PELÍCULAS",
        items: ["TRES NOCHES AL AÑO", "UN MUNDO MEJOR: MI PAÍS"],
    },
    {
        title: "IMPACTO",
        items: ["EL CORSÓDROMO", "UN BARRIO CANÁBICO"],
    },
    {
        title: "EVENTOS",
        items: ["LA FIESTA"],
    },
];

export default function Services() {
    return (
        <Section>

            <Content>
                {categories.map((cat) => (
                    <CategoryBlock key={cat.title}>
                        <CategoryTitle>{cat.title}</CategoryTitle>
                        <ItemList>
                            {cat.items.map((item) => (
                                <Item key={item}>{item}</Item>
                            ))}
                        </ItemList>
                    </CategoryBlock>
                ))}
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
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem 4rem;
  }
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 680px;
  margin: 0 auto;
  width: 100%;
  align-self: center;

  @media (max-width: 768px) {
    max-width: 100%;
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
  gap: 0.15rem;
`;

const Item = styled.li`
  font-family: var(--font-main);
  font-size: clamp(0.75rem, 1.4vw, 0.92rem);
  font-weight: 400;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  cursor: default;
  transition: color 0.25s ease, letter-spacing 0.25s ease;
  padding: 0.15rem 0;

  &:hover {
    color: #fff;
    letter-spacing: 0.18em;
  }
`;
