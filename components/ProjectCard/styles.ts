import styled from 'styled-components';

type DarkProps = {
  darkMode: boolean;
};

export const CardContainer = styled.div<DarkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${({ darkMode }) => darkMode ? "url('/bg03-dark.jpg')" : "url('/bg03.jpg')"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: left;
  width: 350px;
  height: auto;
  margin: 20px;
  padding: 20px;
  border: ${({ darkMode }) => darkMode ? "2px solid #f5f5dc" : "2px solid black"};
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
  
  @media (max-width: 1366px) {
    width: 30%;
    margin: 10px;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin: 10px 0;
  }
`;


export const ProjectTitle = styled.h3`
  background: linear-gradient(to right, #0072ff, #ED1E99);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-family: 'Ubuntu', sans-serif !important;
  font-weight: 900;
  margin: 0 0 5px 0;

  @media (max-width: 1366px) {
    margin: 0 0 2px 0;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  @media (max-width: 700px) {
    font-size: 16px;
    margin: 0 0 2px 0;
  }
`;

export const ProjectDescription = styled.p<DarkProps>`
  font-family: 'Poppins', sans-serif !important; 
  font-size: 15px; 
  font-weight: normal; 
  letter-spacing: 0.5px;
  line-height: 1.5; 
  color: ${({ darkMode }) => darkMode ? "#f5f5dc" : "#333"};
  margin-bottom: 18px;

  @media (max-width: 1366px) {
    max-width: 250px;
    font-size: 10px;
  }

  @media (max-width: 1000px) {
    font-size: 8px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const IconContainer = styled.div<DarkProps>`
  display: flex;
  gap: 17px;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  opacity: 0.8;

  svg {
    fill: ${({ darkMode }) => darkMode ? "#f5f5dc" : "#000"};
  }

  .white-svg {
    filter: invert(100%);
  }
`;