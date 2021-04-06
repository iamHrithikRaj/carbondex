import React from "react";
import styled from 'styled-components';
import diagram from '../images/solar101/diagram.png';
// import '../solar101.css';

const Section = styled.div`
background-color:black;
overflow-x:visible;
`;

const Image = styled.img`
    width: 100vw;
    margin-top: 10vh;
`;

const Heading = styled.div`
margin-top:10vh;
display:flex;
flex-direction:row;
color:white;
font-size:50px;
align-items:center;
justify-content:center;
text-align:center;
`;
const Text = styled.div`
margin-top:5vh;
display:flex;
font-weight:700;
flex-direction:row;
align-items:center;
justify-content:center;
font-size:40px;
color:white;
text-align:center;

`;
const List = styled.div`
margin:0 20vw;
display:flex;
flex-direction:column;
justify-content:center;
border:2px solid white;
`;

const Head = styled.div`
display:flex;
color:white;
align-self:flex-start;
`;
const Body = styled.div`
display:flex;
color:white;
`;

const Solar101 = () => {
    return (
        <>
        <Section>
            <Heading>
                How does solar view works?
            </Heading>
            <Image src={diagram} className="diagram" />
            <Text>Your solar installation</Text>
            <List>
                <Head>Solar Panels</Head>
                <Body>Solar panels are made up of photovoltaic (PV) cells, which convert sunlight into direct current (DC) electricity.</Body>
                <Head>Solar Panels</Head>
                <Body>Solar panels are made up of photovoltaic (PV) cells, which convert sunlight into direct current (DC) electricity.</Body>

            </List>
        </Section>  
        </>
    );
}

export default Solar101;