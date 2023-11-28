import styled from 'styled-components';

type DarkProps = {
  darkMode: boolean;
};

export const StyledCloseIcon = styled.div<DarkProps>`
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ darkMode }) => darkMode ? "#ccc" : "#eee"};
  font-size: 20px;
  color: #000;
  width: 28px;
  height: 28px;
  border: ${({ darkMode }) => darkMode ? '1px solid #F5F5F5' : '1px solid #0A192F'}; 
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e2e2e2;
    color: #555;
    transform: translateY(1px);
  }

  @media (max-width: 1280px) {
    top: 12px;
    left: 17px; 

  }
  
  @media (max-width: 700px) {
    top: 12px;
    left: 15px;
  }
`;