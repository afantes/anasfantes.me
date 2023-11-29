import styled from 'styled-components';
import { motion } from 'framer-motion';

type DarkProps = {
  darkMode: boolean;
};

export const StyledCard = styled(motion.div) <DarkProps>`
  background-color: ${({ darkMode }) => darkMode ? '#0f1a2a' : '#F5F5F5'};
  position: relative; 
  width: 90%;
  height: 90%;
  margin: 5% auto;
  padding: 2rem;
  border: ${({ darkMode }) => darkMode ? '1px solid #F5F5F5' : '1.2px solid #0f1a2a'};
  border-radius: 40px;

  @media (min-width: 1500px) {
    width: 80%;
    height: 75%;
  }

  @media (max-width: 1366px) {
    width: 95%;
    height: 77%;
  }

  @media (max-width: 1280px) {
    width: 95%;
    height: 98%;
  }
  
  @media (max-width: 700px) {
    width: 95%;
    height: 90%;
  }
`;