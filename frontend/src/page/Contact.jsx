import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <PageContainer>
            <HeroSection>
                <h1>Contacto</h1>
            </HeroSection>
        </PageContainer>
    );
};

export default Contact;

const PageContainer = styled.div`
  background-color: var(--bg-dark);
  min-height: 100vh;
  color: white;
`;

const HeroSection = styled.section`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: linear-gradient(to bottom, transparent, var(--bg-dark)), url('/path-to-image.jpg') no-repeat center/cover;
`;