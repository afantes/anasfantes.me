import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledContainer = styled(motion.div)`
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Title = styled.h2`
  font-family: 'Ubuntu', sans-serif !important;
  font-size: 2.2em;
  font-weight: 400;
  text-align: center;
  color: #333;
  margin: 20px 0px 0px;
  
  @media (max-width: 1280px) {
    font-size: 2.5em;
    margin: 20px 0px 5px;
  }
  
  @media (max-width: 700px) {
    font-size: 2.2em;
    margin: 15px 0px 2px;
  }
`;