import React,{useState, useEffect} from "react";
import styled from "styled-components";


import { Container, ListGroup } from "react-bootstrap";



const CompanyQuestions = () => {

    const [questions, setQuestions] = useState([
        {
            id:"",
            company:"",
            question:"",
            answer :"",
        }
    ])

    const fetchCategoryQuestions = async () => {
        const response = await fetch(
          `http://127.0.0.1:8000/company-question`
        );
        const data = await response.json();
        setQuestions(data);
        console.log(data)
      };

      useEffect(() => {
        fetchCategoryQuestions();
    }, [])


    return ( 
        <>
            <div>
            <Container style={{paddingTop:"120px"}}>
                <Title>Top Companies Interview Questions</Title>
                {questions.map(dum=>(
                <ListGroup key={dum.id} as="ul" style={{marginBottom:"10px"}}>
                    <ListGroup.Item as="li">
                        <Answer>{dum.company}</Answer>
                        
                    </ListGroup.Item>
                    <ListGroup.Item as="li" style={{backgroundColor:"rgb(240, 255, 255)"}}>
                        <QuesAns>Question. <Answer>{dum.question}</Answer></QuesAns>
                        
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <QuesAns>Ans. <Answer>{dum.answer}</Answer></QuesAns>
                        
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
    font-weight: 400;
`
 
export default CompanyQuestions;