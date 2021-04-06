import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import home from '../images/home.svg'
import sun from '../images/sun.svg';
import town from '../images/town.svg';



const Section = styled.section`
height:100vh;
display: flex;
justify-content:center;
align-items:center;
background:#131313;
overflow-y:hidden;
`;


const Container = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
height:100vh;
padding: 3rem calc((100vw - 1300px) /2);
overflow-y:hidden;

@media screen and (max-width:768px){
    grid-template-columns:1fr;
}
`;

const Columnleft = styled.div`
display:flex;
color:#fff;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding: 5rem 2rem;

h1{
    margin-bottom:  0.5rem;
    font-size: 2rem;
}

p{
    margin: 2rem 0rem;
    font-size:4rem;
    line-height:1.1;
}
`;
const Button = styled(motion.button)`
padding: 1rem;
font-size:1rem;
border:2px solid #fff;
border-radius: 4px;
outline:none;
cursor:pointer;
background-color:pink;
color:#000;
`;

const Image = styled(motion.img)`
position: absolute;

`;

const Columnright = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:0px;
position:relative;

${Image}:nth-child(1){
    height:20%;
    width:20%;
    top:40px;
    left:10px;
}

${Image}:nth-child(2){
    top:200px;
    right:0px;
    // height:100%;
    width:850px;
}
`;

const Hero = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <Section>
            <Container>
                <Columnleft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >Welcome to Solar View</motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >Journey to save our planet</motion.p>
                    <Button
                        whileHover={{ scale: 1.05 ,background:'transparent',color:'pink'}}
                        whileTap={{ scale: 0.95, backgroundColor: '#67F6E7', border: 'none', color: 'pink' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}

                    >Get Started</Button>
                </Columnleft>
                <Columnright>
                    <Image src={sun} alt='sun' whileTap={{ scale: 0.9 }} drag={true} dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} />
                    <Image src={town} alt='town' whileTap={{ scale: 0.9 }} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0, transition: { duration: 1 } }} />
                </Columnright>
            </Container>
        </Section>
    );
};

export default Hero;