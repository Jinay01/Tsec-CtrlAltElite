import React, { useState,useEffect } from "react";
import styled from "styled-components";


import { Container, ListGroup } from "react-bootstrap";


const CategoryQuestions = ({category}) => {

    const [question, setQuestion] = useState([{
        id : "",
        category : "",
        question_text : "",
        recommended_answer : ""  
    }])

    useEffect(() => {
        fetchCategory();
        console.log(question);
      }, []);

    const fetchCategory = async () => {
        const response = await fetch(
          `http://127.0.0.1:8000/interview-questions/?category=${category}`
        );
        const data = await response.json();
        console.log(123)
        setQuestion(data);
      };

    return (
        <>
        <div>
            <Container style={{paddingTop:"20px"}}>
                <Title>Marketing Interview Questions</Title>
                {question.map(dum=>(
                <ListGroup key={dum.id} as="ul" style={{marginBottom:"10px"}}>
                    <ListGroup.Item as="li" style={{backgroundColor:"rgb(240, 255, 255)"}}>
                        <QuesAns>Question. <Answer>{dum.question_text}</Answer></QuesAns>
                        
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <QuesAns>Ans. <Answer>{dum.recommended_answer}</Answer></QuesAns>
                        
                    </ListGroup.Item>
                </ListGroup>
                ))}
            </Container>
            </div> 
        </>
      );
}

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
    font-weight: 600;
`
 
export default CategoryQuestions;