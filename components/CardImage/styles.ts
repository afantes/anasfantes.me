import styled from 'styled-components';
import { motion } from 'framer-motion';

type DarkProps = {
  darkMode: boolean;
};

export const ImageFrame = styled(motion.div) <DarkProps>`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  padding: 15px;
  margin-bottom: 35px;
  border: ${({ darkMode }) => darkMode ? '0.2px solid #F5F5F5' : '0.2px solid #0f1a2a'};
  opacity: 0.93;

  @media (max-width: 1280px) {
    margin-top: 20px;
  }

  @media (max-width: 700px) {
    margin-top: 10px;
  }

  @media (max-width: 350px) {
    border: none;
  }
`;