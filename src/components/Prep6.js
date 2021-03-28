import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Row, Col, Form, Container, ListGroup} from "react-bootstrap";
import  {useHistory} from 'react-router-dom';

const Prep6= () => {

    const[category, setCategory] = useState("");
    const [categories, setCategories] = useState([
        {
            id: "",
            category: "",
        }
    ]);

    const [questions, setQuestions] = useState([
        {
            id:"",
            question_text:"",
            recommended_answer :"",
        }
    ])

    const fetchCategory = async () => {
        const response = await fetch(
          `http://127.0.0.1:8000/category`
        );
        const data = await response.json();
        setCategories(data);
      };

      const fetchCategoryQuestions = async () => {
        const response = await fetch(
          `http://127.0.0.1:8000/interview-questions/?category=${category}`
        );
        const data = await response.json();
        console.log(data);
        setQuestions(data);
      };

    useEffect(() => {
        fetchCategory();
    }, [category]);

    useEffect(() => {
        fetchCategoryQuestions();
        console.log(questions)
    }, [category]);

    // const getCateogry = (e) => {
    //     setCategory(e.target.value);
    //     console.log(category);
    // }
//(e) => {setCategory(e.target.value); console.log(category);}

    return ( 
        <>
        <Container>
        <Row style={{ margin: '2rem 0'}}>
                  <Col controlId="category">
                    <Form.Label>Enter Domain</Form.Label>
                    <Form.Control
                        as="select"
                        //value={category}
                        onChange={(e) => {setCategory(e.target.value)}}
                    >
                     {categories.map((cat) => (
                        <option value={cat.id}>{cat.category}</option>
                    ))}
                    
                    </Form.Control>
                  </Col>
            </Row>
        </Container>

            <div>
            <Container style={{paddingTop:"20px"}}>
                <Title>Marketing Interview Questions</Title>
                {questions ? (questions.map(dum=>(
                <ListGroup key={dum.id} as="ul" style={{marginBottom:"10px"}}>
                    <ListGroup.Item as="li" style={{backgroundColor:"#ECF0F1"}}>
                        <QuesAns>Question. <Answer>{dum.question_text}</Answer></QuesAns>
                        
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <QuesAns>Ans. <Answer>{dum.recommended_answer}</Answer></QuesAns>
                        
                    </ListGroup.Item>
                </ListGroup>
                ))): <div>no</div>}
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
`
export default Prep6;

// digital marketing
// web developer
// data scientist
