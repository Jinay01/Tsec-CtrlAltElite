import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Prep1 = () => {
    return ( 
        <div>
            <Heading>Introduction to Interviewing</Heading> 
            <Body>
            <Row style={{padding: '20px 20px'}}>
                <Col>
                    <div style={{ marginRight: '50px', fontSize: '1.2rem'}}>In this video, Tammy Kabell gives you a very effective technique and other job interviewing tips for opening up an interview in a way that captures the imagination of the interviewer, like a hiring manager or recruitment, and makes them want to learn more about you because you're actually talking about THEM.<br />Watch this video to get started on how to prepare and give great interviews.</div>
                </Col>
                <Col>
                    <ReactPlayer controls url='https://youtu.be/JZ6jONXx8HE' width='500px' height='330px'/>
                </Col>
            </Row>
            </Body>
        </div>
     );
}
 
export default Prep1;

const Heading = styled.h3 `
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 50px;
`

const Body = styled.div`
    background-color: #ECF0F1;
    padding:20px;
    margin:30px 0;
    border-radius: 5px;
`