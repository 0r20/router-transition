import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Container } from '../components/container';
import Picture from '../images/picture.jpg';

const StyledThree = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .three-container {
        &:hover {
            cursor: pointer;
        }
        height: 70vh;
        overflow: hidden;
        position: relative;
        img {
            height: 100%;
        }
    }
    .three-text {
        position: absolute;
        color: #455060;
        font-size: 8rem;
        &:hover {
            cursor: pointer;
        }
    }
    .three-price {
        position: absolute;
        color: #455060;
        font-size: 1.3rem;
        font-weight: 400;
        bottom: 5rem;
    }
`;

const CoverOne = styled(motion.div)`
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 100%;
    background-color: #1a1a1a;
    z-index: -1;
`;

const CoverTwo = styled(motion.div)`
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 100%;
    background-color: #2c3139;
    z-index: -1;
`;


const transition = { duration: 1, ease: [0.46, 0.13, 0.23, 0.96] };

export const Three = () => {

    const [hover, setHover] = useState(false);

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            style={{position: 'relative'}}
        >
            <CoverOne 
                initial={{
                    height: '0%',
                }}
                animate={{
                    height: '100%',
                    transition: {
                        delay: .3, ...transition    
                    },
                }}
                exit={{
                    height: '0%' ,
                    transition: {
                        delay: 1, ...transition    
                    } 
                }}
            />
            <CoverTwo 
                initial={{
                    height: '0%',
                }}
                animate={{
                    height: '100%',
                    transition: {
                        delay: 1, ...transition    
                    },
                }}
                exit={{
                    height: '0%',
                    transition: {
                        delay: .3, ...transition    
                    } 
                }}
            />
            <Container>
                <StyledThree>
                    <div 
                        className="three-container"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <motion.img 
                            src={Picture} 
                            alt="picture__alt__three" 
                            initial={{scale: 1}}
                            animate={{scale: hover ? 1.1 : 1}}
                            transition={{duration: 2}}
                        />
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{opacity: hover ? 1 : 0}} 
                        transition={{duration: 1, ...transition}}
                        className="three-text"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >MOTION</motion.div>
                    <motion.div 
                        className="three-price"
                        initial={{ opacity: 0 }} 
                        animate={{opacity: hover ? 1 : 0}} 
                        transition={{duration: 1, ...transition}}
                    >
                        90$ 
                    </motion.div>
                </StyledThree>
            </Container>
        </motion.div>
    )
}
