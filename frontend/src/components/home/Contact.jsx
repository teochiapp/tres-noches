import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yBg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, (err) => {
        console.error('FAILED...', err);
        setIsSubmitting(false);
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeRight = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <Section id="contacto" ref={containerRef}>
      <BgParallax style={{ y: yBg }} />
      <Container>
        <motion.div style={{ y: yParallax }}>
          <Layout>
            {/* Left Column - Información */}
            <InfoColumn
              as={motion.div}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                initial: { opacity: 0 },
                whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div variants={fadeRight}>
                <MainTitle>
                  CREEMOS<br />ALIANZAS
                </MainTitle>
                <SubTitle>TRASCIENDE LA PANTALLA</SubTitle>
              </motion.div>

              <motion.div variants={fadeRight}>
                <Paragraph>
                  Buscamos visionarios, inversores y colaboradores que crean
                  en el poder transformador de la cultura. Sé parte de la construcción
                  del primer corsódromo y de proyectos que dejan huella.
                </Paragraph>
              </motion.div>

              <ContactDetails>
                <motion.div variants={fadeRight}>
                  <ContactItem>
                    <IconWrapper><Mail size={24} /></IconWrapper>
                    <ItemContent>
                      <ItemLabel>Email</ItemLabel>
                      <ItemText>cine@tresnoches.com.ar</ItemText>
                    </ItemContent>
                  </ContactItem>
                </motion.div>

                <motion.div variants={fadeRight}>
                  <ContactItem>
                    <IconWrapper><Phone size={24} /></IconWrapper>
                    <ItemContent>
                      <ItemLabel>Teléfono</ItemLabel>
                      <ItemText>+54 9 11 6999 3829</ItemText>
                    </ItemContent>
                  </ContactItem>
                </motion.div>

                <motion.div variants={fadeRight}>
                  <ContactItem>
                    <IconWrapper><MapPin size={24} /></IconWrapper>
                    <ItemContent>
                      <ItemLabel>Locación</ItemLabel>
                      <ItemText>San Telmo, Buenos Aires, Argentina</ItemText>
                    </ItemContent>
                  </ContactItem>
                </motion.div>
              </ContactDetails>
            </InfoColumn>

            {/* Right Column - Formulario */}
            <FormColumn as={motion.div} {...fadeIn}>
              <FormWrapper>
                <FormTitle>ENVIANOS UN MENSAJE</FormTitle>

                <StyledForm onSubmit={handleSubmit}>
                  <InputGroup>
                    <Input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                    <InputLabel className={formState.name ? 'active' : ''}>Nombre Completo</InputLabel>
                    <InputLine />
                  </InputGroup>

                  <InputGroup>
                    <Input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                    <InputLabel className={formState.email ? 'active' : ''}>Correo Electrónico</InputLabel>
                    <InputLine />
                  </InputGroup>

                  <InputGroup>
                    <Input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                    />
                    <InputLabel className={formState.subject ? 'active' : ''}>Asunto / Organización</InputLabel>
                    <InputLine />
                  </InputGroup>

                  <InputGroup className="textarea-group">
                    <TextArea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                    <InputLabel className={formState.message ? 'active' : ''}>Mensaje</InputLabel>
                    <InputLine />
                  </InputGroup>

                  <SubmitButton type="submit" disabled={isSubmitting}>
                    <ButtonText>
                      {isSubmitting ? 'ENVIANDO...' : isSuccess ? '¡ENVIADO CON ÉXITO!' : 'ENVIAR MENSAJE'}
                    </ButtonText>
                    <ArrowRight size={20} />
                    <ButtonHoverEffect />
                  </SubmitButton>
                </StyledForm>
              </FormWrapper>
            </FormColumn>
          </Layout>
        </motion.div>
      </Container>
    </Section>
  );
}

/* ─── Styled Components ─────────────────────────────────────────── */

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const BgParallax = styled(motion.div)`
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(0, 0, 0, 0) 70%
  );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 4rem;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 5rem 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainTitle = styled.h2`
  font-family: var(--font-bold);
  font-size: clamp(3.5rem, 6vw, 6rem);
  font-weight: 900;
  color: #fff;
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.h3`
  font-family: var(--font-main);
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-family: var(--font-alt);
  font-size: clamp(1.1rem, 1.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 90%;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: default;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  transition: all 0.4s ease;

  ${ContactItem}:hover & {
    background-color: var(--primary);
    color: #fff;
    border-color: var(--primary);
    transform: scale(1.1);
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ItemLabel = styled.span`
  font-family: var(--font-main);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.4);
`;

const ItemText = styled.span`
  font-family: var(--font-alt);
  font-size: 1.2rem;
  color: #fff;
  font-weight: 500;
`;

const FormColumn = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 4rem 3.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
`;

const FormTitle = styled.h4`
  font-family: var(--font-semibold);
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;

  &.textarea-group {
    margin-top: 1rem;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  left: 0;
  top: 1rem;
  font-family: var(--font-alt);
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.4);
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    top: -1.2rem;
    font-size: 0.85rem;
    color: var(--primary);
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  padding: 1rem 0;
  font-family: var(--font-alt);
  font-size: 1.1rem;
  color: #fff;

  &:focus {
    outline: none;
  }

  &:focus + ${InputLabel} {
    top: -1.2rem;
    font-size: 0.85rem;
    color: var(--primary);
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  padding: 1rem 0;
  font-family: var(--font-alt);
  font-size: 1.1rem;
  color: #fff;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
  }

  &:focus + ${InputLabel} {
    top: -1.2rem;
    font-size: 0.85rem;
    color: var(--primary);
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;

const InputLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--primary);
    transition: width 0.4s ease;
  }

  ${Input}:focus ~ &::after,
  ${TextArea}:focus ~ &::after {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 2rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-family: var(--font-semibold);
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  margin-top: 1rem;
  overflow: hidden;
  transition: border-color 0.3s ease;

  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: var(--primary);
    svg {
      transform: translateX(5px);
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 1;
`;

const ButtonHoverEffect = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary);
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;

  ${SubmitButton}:hover & {
    left: 0;
  }
`;
