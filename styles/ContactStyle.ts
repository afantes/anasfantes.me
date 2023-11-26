import styled from 'styled-components';

type DarkProps = {
  darkMode: boolean;
};

export const StyledForm = styled.form<DarkProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-image: ${({ darkMode }) => darkMode ? "url('/bg04-dark.jpg')" : "url('/bg04.jpg')"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.4);
  width: 75%;
  height: 75%;
  margin: 40px auto;
  padding: 20px;
  border-radius: 20px;
  
  @media (max-width: 1366px) {
    width: 90%;
    height: 70%;
    margin: 55px auto;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 70%;
    margin: 25px auto;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 899px) {
    flex-direction: column;
  }
`;

export const HalfWidthInput = styled.input<DarkProps>`
  flex: 1;  
  background-color: ${({ darkMode }) => darkMode ? "#f0f0f0" : "white"};
  font-family: 'Ubuntu', sans-serif !important;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.5px; 
  line-height: 1.5;
  text-align: left;
  color: ${({ darkMode }) => darkMode ? "#000" : "#333"};
  padding: 15px 20px;
  border: 0.95px solid #884DFF;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;

  &:hover {
    border: 0.5px solid #0072ff;
    box-shadow: inset 0 0 8px rgba(0, 114, 255, 0.3);
  }

  &:focus {
    background-color: #f9f9f9;
    outline: none;
    box-shadow: 0 0 0 0.5px white, 0 0 0 1px rgba(0, 114, 255, 0.4), 0 0 0 2px rgba(136, 77, 255, 0.7), 0 0 0 3px rgba(237, 30, 121, 0.7);
  }

  &::placeholder {
    color: ${({ darkMode }) => darkMode ? "#a9a9a9" : "#aaa"};;
  }

  &:focus::placeholder {
    transition: opacity 0.4s ease;
    opacity: 0;
  }
  
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const StyledTextArea = styled.textarea<DarkProps>`
  background-color: ${({ darkMode }) => darkMode ? "#f0f0f0" : "white"};  
  font-family: 'Ubuntu', sans-serif !important;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 1px; 
  line-height: 1.5; 
  text-align: left;
  color: ${({ darkMode }) => darkMode ? "#000" : "#333"};
  resize: none;
  width: 100%;
  height: 300px;
  padding: 15px 20px;
  border: 0.95px solid #884DFF;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;

  &:hover {
    border: 0.5px solid #0072ff;
    box-shadow: inset 0 0 8px rgba(0, 114, 255, 0.3);
  }

  &:focus {
    background-color: #f9f9f9;
    outline: none;
    box-shadow: 0 0 0 0.5px white, 0 0 0 1px rgba(0, 114, 255, 0.4), 0 0 0 2px rgba(136, 77, 255, 0.7), 0 0 0 3px rgba(237, 30, 121, 0.7);
  }

  &::placeholder {
    color: ${({ darkMode }) => darkMode ? "#a9a9a9" : "#aaa"};;
  }

  &:focus::placeholder {
    transition: opacity 0.4s ease;
    opacity: 0;
  }

  @media (max-width: 1366px) {
    height: 500px;
  }

  @media (max-width: 1280px) {
    height: 300px;
  }

  @media (max-width: 700px) {
    height: 450px;
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(to right, #0072ff, #884DFF, #ED1E99);
  font-family: 'Poppins', sans-serif !important;
  font-size: 17px;
  font-weight: 500;
  color: #EAEAEA;
  display: block;
  width: 20%;
  margin: 5px auto;
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 
              inset 0 2px 0 rgba(255, 255, 255, 0.5);
  cursor: pointer;
  opacity: 0.75;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover, &:focus {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3),
                inset 0 2px 0 rgba(255, 255, 255, 0.5);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2),
                inset 0 2px 0 rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 70%;
  }
`;