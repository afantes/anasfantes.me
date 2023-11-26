import styled from 'styled-components';

type DarkProps = {
  darkMode: boolean;
};

export const StyledCard = styled.div<DarkProps>`
  background-image: ${({ darkMode }) => darkMode ? 'url(/bg02-dark.jpg)' : 'url(/bg02.jpg)'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; 
  width: 90%;
  height: 90%;
  margin: 5% auto;
  padding: 2rem;
  border: ${({ darkMode }) => darkMode ? '' : '1px solid rgba(255, 255, 255, 0.5)'};
  border-radius: 40px;
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.5),
    0 15px 25px rgba(0, 0, 0, 0.4),
    inset 0 1px 3px rgba(255, 255, 255, 0.3);

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