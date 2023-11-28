import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center; // Centre horizontalement
  align-items: center; // Centre verticalement
  flex-wrap: wrap; // Permet un enroulement
  max-width: 2000px;
  margin: 12px auto 0px;
  padding: 20px;

  @media (min-width: 1366px) {
    max-width: 3000px;
  }

  @media (max-width: 700px) {
    margin: -10px auto 0px;
  }
`;