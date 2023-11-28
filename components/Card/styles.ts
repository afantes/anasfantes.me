import styled from 'styled-components';

type DarkProps = {
  darkMode: boolean;
};

export const StyledCard = styled.div<DarkProps>`
  background-color: ${({ darkMode }) => darkMode ? '#161B22' : '#F5F5F5'};
  position: relative; 
  width: 90%;
  height: 90%;
  margin: 5% auto;
  padding: 2rem;
  border: ${({ darkMode }) => darkMode ? '1px solid #F5F5F5' : '1.2px solid #161B22'};
  border-radius: 40px;

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