import styled from 'styled-components';

type DarkProps = {
  darkMode: boolean;
};

export const ImageFrame = styled.div<DarkProps>`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  padding: 15px;
  margin-bottom: 40px;
  border: ${({ darkMode }) => darkMode ? '0.9px solid #F5F5F5' : '0.9px solid #161B22'};
  opacity: 0.93;

  @media (max-width: 1280px) {
    margin-top: 70px;
  }

  @media (max-width: 700px) {
    margin-top: 10px;
  }

  @media (max-width: 350px) {
    border: none;
  }
`;