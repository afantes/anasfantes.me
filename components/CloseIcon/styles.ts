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
  background-color: ${({ darkMode }) => darkMode ? "#a6a6a6" : "#eee"};
  font-size: 20px;
  color: #000;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  box-shadow: inset 0 2.5px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #e2e2e2;
    color: #555;
    transform: translateY(1px);
    box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.3);
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