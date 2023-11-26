import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: white;
    z-index: 10;
`;

export const StyledTitle = styled.div`
    transform: translateY(-70%);
`;

export const StyledProgressBar = styled(motion.div)`
    background-color: white;
    width: 50%;
    height: 4px;
    margin-top: 20px;
    transform: translateY(-35px);
`;