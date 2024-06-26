import styled from 'styled-components';

export const StyledButton = styled.button`
  background: linear-gradient(to right, #0072ff, #884DFF, #ED1E99);
  font-family: 'Poppins', sans-serif !important;
  font-size: 16px;
  font-weight: 10;
  color: #EAEAEA;
  display: block;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0.85;

  &:hover, &:focus {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  a {
    color: #EAEAEA;
    text-decoration: none;

    &:hover, &:focus {
      color: #EAEAEA;
    }
  }
  
  @media (max-width: 1280px) {
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 8px 10px;
  }
`;