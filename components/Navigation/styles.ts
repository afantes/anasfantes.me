import styled from 'styled-components';

type DarkProps = {
  darkMode: boolean;
};

export const StyledNavigationBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 5px;

  @media (max-width: 1280px) {
    margin: 0px 0 20px;
    padding: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  margin-right: 30px;
  margin-bottom: 8px;

  @media (max-width: 1280px) {
    align-items: center;
    margin-top: 20px;
    margin-right: 30px;
  }

  @media (max-width: 700px) {
    align-items: center;
    margin-right: 8px;
    margin-bottom: 5px;
  }
`;

export const StyledLink = styled.span<DarkProps>`
  font-family: 'Poppins', sans-serif !important;
  font-size: 0.95rem;
  font-weight: bold;
  position: relative;
  text-decoration: none;
  color: ${({ darkMode }) => darkMode ? '#f5f5dc' : '#333'};
  margin-left: 25px;
  padding-bottom: 5px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #aaa;
    opacity: 0.5;
    transition: background-color 0.3s, opacity 0.3s, height 0.3s;
  }

  &:hover {
    bottom: 4px;

    &:after {
      height: 2px;
      background-color: #0072ff;
    }
  }

  &.active:after {
    background-image: linear-gradient(to right, #0072ff, #884DFF, #ED1E79);
    height: 3.5px;
    opacity: 1;
  }
  
  @media (max-width: 1280px) {
    margin-bottom: 10px;
  }

  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    justify-content: center;
    margin: 15px auto 0px;
  }

  @media (max-width: 700px) {
    margin-top: 15px;
    margin-left: 25px;
  }
`;

export const IconLink = styled.a<DarkProps>`
  font-size: 1.5rem;  
  color: ${({ darkMode }) => darkMode ? '#f5f5dc' : '#333'};
  margin-right: 15px;
  
  &.mail-icon {
    font-size: 1.8rem;
  }

  &:hover {
    color: #aaa;
  }
`;

export const ModeIcon = styled.div<DarkProps>`
  font-size: 1.5rem;  
  color: ${({ darkMode }) => darkMode ? '#f5f5dc' : '#333'};
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #aaa;
  }
`;