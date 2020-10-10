import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const StyledHeader = styled.div`
    z-index: 10;
    margin-top: 40px;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-around;    
    > div {
        a {
            color: black;
            font-size: 24px;
        }    
    }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <motion.div 
                whileHover={{cursor: 'pointer'}}
            >
                <Link to={'/'}>Home</Link>
            </motion.div>
            <motion.div 
                whileHover={{cursor: 'pointer'}}
            >
                <Link to={'/two'}>Two</Link>
            </motion.div>
            <motion.div 
                whileHover={{cursor: 'pointer'}}
            >
                <Link to={'/three'}>Three</Link>
            </motion.div>
        </StyledHeader>
    );
}
