import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Container } from '../components/container';
import Picture from '../images/picture.jpg';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';

const StyledTwo = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .two-container {
        height: 70vh;
        overflow: hidden;
        position: relative;
        img {
            height: 100%;
        }
    }
    .two-text {
        position: absolute;
        h1 {
            font-size: 8rem;
        }
        > a {
            color: #455060;
        }
    }
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export const Two = () => {

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Container>
                <StyledTwo onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    <Link to={'./three'}>
                        <animated.div className="two-container" style={{ transform: props.xy.interpolate(trans1) }}>
                            <img src={Picture} alt="picture__alt" />
                        </animated.div>
                    </Link>
                    <animated.div className="two-text" style={{ transform: props.xy.interpolate(trans2) }}>
                        <Link to={'./three'}>
                            <motion.h1 exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition}>IMAGE</motion.h1>
                        </Link>
                    </animated.div>
                </StyledTwo>
            </Container>
        </motion.div>
    );
}
