import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/container';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressiveImage from "react-progressive-image";

const StyledHome = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .image-container {
        position: relative;
        .thumbnail {
            overflow: hidden;
            position: relative;
            .frame {
                img {
                    width: 100%;
                }
            }
        }
        .information {
            position: absolute;
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 15px;
            text-transform: uppercase;
            opacity: 0.7;
        }
    }
`;

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export const Home = ({ imageDetails }) => {
    return (
        <Container>
            <StyledHome>
                <div className="image-container">
                    <div
                        className="thumbnail"
                        style={{
                            width: imageDetails.width,
                            height: imageDetails.height,
                        }}
                    >
                        <div className="frame">
                            <Link to={'/model'} onClick={() => document.querySelector("body").classList.add("no-scroll")}>
                                <ProgressiveImage
                                    src={require("../images/yasmeen.webp")}
                                    placeholder={require("../images/compressed-image.jpg")}>
                                    {(src) => (
                                        <motion.img
                                            src={src}
                                            alt='Yasmeen Tariq'
                                            whileHover={{ scale: 1.1 }}
                                            transition={transition}
                                        />
                                    )}
                                </ProgressiveImage>
                            </Link>
                        </div>
                    </div>
                    <motion.div className="information" exit={{ opacity: 0 }} transition={transition}>
                        <div className="title">Model</div>
                        <div className="location">29-08-2000</div>
                    </motion.div>
                </div>
            </StyledHome>
        </Container>
    );
}
