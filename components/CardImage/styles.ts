import styled from 'styled-components';

type DarkProps = {
  darkMode: boolean;
};

export const ImageFrame = styled.div<DarkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(300px + 20px);
  height: calc(500px + 20px);
  margin-bottom: 30px;
  padding: 10px;
  border: ${({ darkMode }) => darkMode ? '2px solid #f5f5dc' : '2px solid black'};
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  opacity: 0.92;

  .image {
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

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