import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center; // Centre horizontalement
  align-items: center; // Centre verticalement
  flex-wrap: wrap; // Permet un enroulement
  max-width: 2000px;
  margin: 12px auto 0px;
  padding: 20px;

  @media (width: 2560px) {
    margin: 40px auto 0px;
  }

  @media (width: 1920px) {
    margin: 40px auto 0px;
  }

  @media (width: 1680px) {
    margin: 40px auto 0px;
  }

  @media (width: 1600px) {
    margin: 5px -80px 0px;
  }

  @media (width: 1500px) {
    width: 1500px;
    margin: 25px -185px 0px;
  }

  @media (width: 1536px) {
    width: 1300px;
    margin: -5px -65px 0px;
  }

  @media (width: 1463px) {
    margin: 50px auto 0px;
  }

  @media (width: 1440px) {
    margin: 40px -80px 0px;
  }

  @media (width: 1428px) {
    margin: 40px auto 0px;
  }

  @media (width: 1368px) {
    width: 1500px;
    margin: 10px -165px 0px;
  }

  @media (min-width: 1366px) {
    max-width: 3000px;
  }

  @media (max-width: 700px) {
    margin: -10px auto 0px;
  }
`;