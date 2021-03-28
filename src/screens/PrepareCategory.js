import React, { useState,useEffect } from "react";

import styled from "styled-components";

import {Link} from "react-router-dom"


import {Container, ListGroup } from "react-bootstrap";



const PrepareCateogry = ({match}) => {

    const [category, setCategory] = useState([{
            id:"",
            question_text:"",
            recommended_answer :"",
            category : ""
    }])


    useEffect(() => {
        fetchCategory();
        console.log(match.params.category);
      }, []);

    
    const fetchCategory = async () => {
        const response = await fetch(
          `http://127.0.0.1:8000/interview-questions/?category=${match.params.category}`
        );
        const data = await response.json();
        setCategory(data);
        console.log(data);
      };


    return ( 
        <>
        <div>
            <Container style={{paddingTop:"120px"}}>
                <Title>Interview Questions</Title>
                {category.map(dum=>(
                <ListGroup key={dum.id} as="ul" style={{marginBottom:"10px"}}>
                    <ListGroup.Item as="li" style={{backgroundColor:"rgb(240, 255, 255)"}}>
                        <QuesAns>Question. <Answer>{dum.question_text}</Answer></QuesAns>
                        
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <QuesAns>Ans. <Answer>{dum.recommended_answer}</Answer></QuesAns>
                        
                    </ListGroup.Item>
                </ListGroup>
                ))}

                <Button>
                    <Link to="/interview">
                        Start Step by Step interview Preparation
                    </Link>
                </Button>
            </Container>
            

        </div>
        </>
     );
}

const Button = styled.button`
    margin-top:20px;
    padding:10px;
    border: 1x solid;
    border-image-source:  linear-gradient(180deg, #FF0541 0%, #FF8A00 100%);
    border-image-slice: 1;
    border-radius: 5px;
    background-color: white;
    font-size:1.3rem;
    margin-bottom: 20px;

`

 
const Title = styled.p`
    font-size:2rem;
    text-align: center;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-image: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1;
    width:fit-content;

`

const QuesAns = styled.p`
    font-size: 1rem;
    font-weight: 300;
`

const Answer = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
`

export default PrepareCateogry;