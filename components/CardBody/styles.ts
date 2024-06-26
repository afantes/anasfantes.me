import styled from 'styled-components';
import { motion } from 'framer-motion';

type DarkProps = {
  darkMode: boolean;
};

export const StyledCardBody = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 125px; 
  height: 100%;
  margin-top: -40px; 
  padding: 20px; 

  @media (width: 1368px) {
    flex-direction: row;
    gap: 60px;
    margin-top: 35px;
    padding: 15px;
  }

  @media (width: 1366px) {
    flex-direction: row;
    gap: 60px;
    margin-top: 35px;
    padding: 15px;
  }

  @media (max-width: 1365px) {
    flex-direction: row;
    gap: 60px;
    margin-top: -10px;
    padding: 15px;
  }

  @media (width: 1333px) {
    flex-direction: row;
    gap: 60px;
    margin-top: 35px;
    padding: 15px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    margin-top:50px;
  }
`;

export const TextSection = styled(motion.div) <DarkProps>`
  font-family: 'Poppins', sans-serif !important;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.5px; 
  line-height: 1.8;
  color: ${({ darkMode }) => darkMode ? '#f5f5dc' : '#333'};
  text-align: justify;
  max-width: 450px;
  margin-top: -50px;

  h2 {
    font-family: 'Ubuntu', sans-serif !important;
    background: linear-gradient(to right, #0072ff, #884DFF, #ED1E79);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    margin-bottom: 25px; 
  }

  p {
    max-width: 280px;
    margin: 0 auto 25px;
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 1280px) {
    h2 {
      margin-top: 40px;
      margin-bottom: 20px;
    }

    p {
      margin-top: 2px;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 700px) {
    h2 {
      margin-top: 0px;
      margin-bottom: 0px;
    }

    p {
      margin-top: 20px;
      margin-bottom: 25px;
    }
  }
`;