import styled from 'styled-components';

type DarkProps = {
    darkMode: boolean;
};

export const StyledParagraph = styled.p<DarkProps>`
    font-family: 'Poppins', sans-serif !important;
    font-size: 1.2rem;
    text-align: center;
    color: ${({ darkMode }) => darkMode ? "#f5f5dc" : "#333"};
    margin-top: 8px;
`;

export const StyledLink = styled.a`
    background: linear-gradient(to right, #0072ff, #884DFF, #ED1E79);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-weight: 600;
`;