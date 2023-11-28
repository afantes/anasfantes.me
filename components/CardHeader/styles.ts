import styled from 'styled-components';

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-section {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .navigation-bar {
    margin-top: -15px;
    margin-right: 20px;
  }
  
  @media (max-width: 1280px) {
    .navigation-bar {
      margin-top: -35px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    .navigation-bar {
      margin-top: 15px;
    }
  }
`;