import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../components/container';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

export const StyledModel = styled.div`
    .model-top {
        display: flex;
        height: 50vh;
        align-items: flex-end;
        justify-content: center;
        .name {
            .model-first {
                margin-right: 72px;
            }
            span {
                display: inline-block;
                position: relative;
                font-weight: 400;
                font-size: 224px;
                font-family: "Maragsa";
            }
        }
    }
    .model-bottom {
        height: 50vh;
        position: relative;
        .image-container-single {
            height: 100%;
            width: 100%;
            .thumbnail-single {
                width: 100%;
                height: 800px;
                margin: 0 auto;
                overflow: hidden;
                position: absolute;
                left: 0;
                right: 0;
                .frame-single {
                    img {
                        position: absolute;
                        width: 100%;
                    }
                }
            }
        }
    }
    .details {
        span {
            display: inline-block;
            position: relative;
            font-weight: 400;
            font-size: 224px;
            font-family: "Maragsa";
        }
    }
`;

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    animate: {
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const lastName = {
    animate: {
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};

const letter = {
    initial: {
        y: 200,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
};

export const Model = ({ imageDetails }) => {

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);
    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll]);

    return (
        <motion.div
            onAnimationComplete={() => setCanScroll(true)}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Container fluid>
                <StyledModel>
                    <div className="model-top">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: .8, duration: 1.8, ...transition }
                            }}
                            className="name"

                        >
                            <motion.span variants={firstName} className="model-first">
                                <motion.span variants={letter}>W</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>w</motion.span>
                            </motion.span>
                            <motion.span variants={lastName} className="model-last">
                                <motion.span variants={letter}>D</motion.span>
                                <motion.span variants={letter}>u</motion.span>
                                <motion.span variants={letter}>u</motion.span>
                                <motion.span variants={letter}>u</motion.span>
                                <motion.span variants={letter}>u</motion.span>
                                <motion.span variants={letter}>d</motion.span>
                                <motion.span variants={letter}>e</motion.span>
                            </motion.span>
                        </motion.div>
                    </div>
                    <div className="model-bottom">
                        <div className="image-container-single">
                            <motion.div
                                className="thumbnail-single"
                                initial={{
                                    y: '-50%',
                                    width: imageDetails.width,
                                    height: imageDetails.height
                                }}
                                animate={{
                                    y: 0,
                                    width: '100%',
                                    height: '50vh',
                                    transition: { delay: .2, ...transition }
                                }}
                            >
                                <div initial='initial' className="frame-single">
                                    <motion.img
                                        src={require("../images/yasmeen.webp")}
                                        alt='an image'
                                        style={{ scale: scale }}
                                        // initial={{ scale: 1 }}
                                        animate={{
                                            y: -700,
                                            transition: { delay: .2, ...transition }
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <Container>
                        <div className="details">
                            <h2 className='title'>
                                The insiration behind the artwork & <br /> what it means.
                        </h2>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia, looked up one of
                                the more obscure Latin words, consectetur, from a Lorem Ipsum
                                passage, and going through the cites of the word in classical
                                literature, discovered the undoubtable source. Lorem Ipsum comes
                                from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                                Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                                BC. This book is a treatise on the theory of ethics, very popular
                                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                                ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        </div>
                    </Container>
                </StyledModel>
            </Container>
        </motion.div>
    );
}
