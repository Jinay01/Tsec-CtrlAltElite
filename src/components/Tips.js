import React from "react";
import styled from "styled-components";

import {Link} from "react-router-dom";
import arrrow from "../images/right-arrow (3).svg";

import {Card, Row, Col, Container} from "react-bootstrap";
import VerticalStepper from "./VerticalStepper";

const stepData = [
    {key:"1",Number:"1",Title:"Step Name", Description:"Some quick example text to build on the card title and make up the bulk of Some quick example text to build on the card title and make up the bulk of"},
    {key:"2",Number:"2",Title:"Step Name", Description:"Some quick example text to build on the card title and make up the bulk of Some quick example text to build on the card title and make up the bulk of"},
    {key:"3",Number:"3",Title:"Step Name", Description:"Some quick example text to build on the card title and make up the bulk of Some quick example text to build on the card title and make up the bulk of"},
    {key:"4",Number:"4",Title:"Step Name", Description:"Some quick example text to build on the card title and make up the bulk of Some quick example text to build on the card title and make up the bulk of"},
]

const logos = [
    {key:"1", }
]

const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.9rem;
    border-style: solid;
    border-width: 0 0 2px 0;
    padding-bottom:5px;
    margin-bottom:20px;
    width:fit-content;
    border-image:  linear-gradient(180deg, #FF0541 0%, #FF8A00 100%) 1;
`

const Button  = styled.button`
    margin:20px;
    padding:10px;
    border: 1x solid;
    border-image-source:  linear-gradient(180deg, #FF0541 0%, #FF8A00 100%);
    border-image-slice: 1;
    border-radius: 5px;
    background-color: white;

    font-size:1.3rem;
    display: inline-block;
    place-items: center
`

const Tips = () => {
    return (  
        <>

            <Container style={{marginBottom:"50px",paddingTop:"120px"}}>
                <Title>The Prep Procedure</Title>
                <VerticalStepper/>
                
                <Link to="/interview/prepare">
                    <Button>
                        Start Preparation
                        <img style={{marginLeft:"5px", width:"15px", height:"15px"}} src={arrrow}/>
                    </Button>
                </Link>
                
            </Container>
            
        </>
    );
}

{/* <Row style={{margin:"auto"}}>
                {stepData.map(data=>(
                <Col  xs={6}>
                    <Card key={data.key} style={{ width: '25rem', marginBottom:"20px", boxShadow:"-1px 2px 5px 0px rgba(0,0,0,0.15)"}}>
                        <Card.Body>
                            <Card.Title style={{display:"inline-block", placeItems:"center", marginBottom:"0"}}>
                                <p style={{marginBottom:"10px"}}><span>{data.Number}.</span> {data.Title}</p>
                                
                            </Card.Title>
                            <Card.Text>
                            {data.Description}
                            </Card.Text>
                            <Card.Link href="#">View Examples</Card.Link>
                        </Card.Body>
                    </Card>
                    
                </Col>
            
            
        ))}
                </Row> */}
 
export default Tips;