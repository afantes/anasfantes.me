import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  background-image: url('/bg01.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  
  width: 100%;
  min-height: 100vh;

  @media (min-width: 1280px) {
    height: 100vh;
  }
`;