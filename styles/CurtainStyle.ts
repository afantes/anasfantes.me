import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTopCurtain = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    z-index: 10;
`;

export const StyledBottomCurtain = styled(motion.div)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    z-index: 10;
`;