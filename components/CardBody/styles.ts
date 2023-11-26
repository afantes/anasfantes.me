import styled from 'styled-components';

type DarkProps = {
  darkMode: boolean;
};

export const StyledCardBody = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 125px; 
  height: 100%;
  margin-top: -20px; 
  padding: 20px; 

  @media (max-width: 1280px) {
    flex-direction: row;
    gap: 60px;
    margin-top: -50px;
    padding: 15px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }
`;

export const TextSection = styled.div<DarkProps>`
  font-family: 'Poppins', sans-serif !important;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.5px; 
  line-height: 1.8;
  color: ${({ darkMode }) => darkMode ? '#f5f5dc' : '#333'};
  text-align: justify;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
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
    margin: auto;
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
      margin-top: 95px;
      margin-bottom: 15px;
    }

    p {
      margin-top: 20px;
      margin-bottom: 25px;
    }
  }
`;