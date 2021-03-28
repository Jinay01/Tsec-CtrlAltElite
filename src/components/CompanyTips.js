import React,{useState, useEffect} from "react";

import styled from "styled-components";

import logo from "../images/logo.jfif";

import {Link} from "react-router-dom";

import {Card, Button, Row, Col, Container} from "react-bootstrap";


const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.9rem;
    border-style: solid;
    border-width: 0 0 2px 0;
    padding-bottom:5px;
    margin-bottom:20px;
    width:fit-content;
    border-image: linear-gradient(180deg, #FF0541 0%, #FF8A00 100%) 1;
`

const Image = styled.img`
    width: 155px;
    height: 150px;
    &:hover {
        width: 157px;
        height: 153px;
        box-shadow:-1px 2px 5px 0px rgba(0,0,0,0.20);
    }
`



const CompanyTips = () => {

    const [company, setCompany] = useState([
        {
            id : "",
            name:"",
            image :"",
        }
    ])

    useEffect(() => {
        fetchCompany();
      }, []);

    
    const fetchCompany = async () => {
        const response = await fetch(
          `http://127.0.0.1:8000/company`
        );
        const data = await response.json();
        setCompany(data);
      };

    return ( 
        <>
            <Container>
                
                <Title>Company Tips</Title>
                
                <p>Click to view questions from top companies </p>
                <Link to="/companyquestions">
                <Row style={{margin:"auto"}}>
                {company.map(data=>(
                <Col key={data.id} xs={2} style={{marginBottom:"50px", alignItems:"center"}}>
                        <Image  src={data.image}/>
                </Col>
        ))}
                </Row>
                </Link>
            </Container>
            
        </>
     );
}
 
export default CompanyTips;