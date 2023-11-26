import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 15px auto 0px;
  padding: 20px;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    margin: -10px auto 0px;
  }
`;