import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Form, Col,Button, Container } from 'react-bootstrap';
import illus from "../assests/formimage.jfif";
import styled from "styled-components";
import bg from "./bg.jpg";

import {Link} from "react-router-dom";



const CreateJobScreen = () => {

    const [position, setPosition] = useState(null);

    const LocationMarker = ()=>{
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }

    return (
        <>
        <Image/>
        <PageBody>
            <h1 style={{xIndex: '2', textAlign: 'center', padding: '20px', fontWeight: '600'}}>CREATE A JOB</h1>
            <Form 
                style=
                {{
                    padding:"40px 50px",
                    backgroundColor:"white",
                    boxShadow:"-2px 10px 20px 0px rgba(0,0,0,0.2)",
                    width:"50%"
                }}
                className="container">
                <Form.Group style={{marginBottom:"40px"}}>
                    <Form.Label style={{marginBottom:"6px" ,fontSize:"1.15rem"}}>Job Title</Form.Label>
                    <Form.Control placeholder="Enter job title"/>
                </Form.Group>
                <Form.Row>
                    <Col style={{marginBottom:"25px"}}>
                        <Form.Label style={{marginBottom:"6px",fontSize:"1.15rem"}}>Company Name</Form.Label>
                        <Form.Control placeholder="Enter company name"/>
                    </Col>
                    <Col style={{marginBottom:"25px"}}>
                        <Form.Label style={{marginBottom:"6px",fontSize:"1.15rem"}}>Company City</Form.Label>
                        <Form.Control placeholder="Enter company city"/>
                    </Col>
                </Form.Row>
                <Form.Group style={{marginBottom:"25px"}}>
                    <Form.Label style={{marginBottom:"6px",fontSize:"1.15rem"}}>About the Company</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter details about the company" rows={2}/>
                </Form.Group>
                <Form.Group style={{marginBottom:"25px"}}>
                    <Form.Label style={{marginBottom:"6px",fontSize:"1.15rem"}}>Job Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter job description" rows={3}/>
                </Form.Group>
                <Form.Row>
                    <Col style={{marginBottom:"25px"}}>
                        <Form.Label style={{marginBottom:"6px",fontSize:"1.15rem"}}>Start date</Form.Label>
                        <Form.Control type="date" placeholder="Enter start date"/>
                    </Col>
                    <Col style={{marginBottom:"25px"}}>
                        <Form.Label style={{marginBottom:"6px",fontSize:"1.15rem"}}>No. of Openings</Form.Label>
                        <Form.Control type="number" placeholder="Enter no. of openings"/>
                    </Col>
                    <Col style={{marginBottom:"25px"}}>
                        <Form.Label style={{marginBottom:"6px",fontSize:"1.15rem"}}>Salary</Form.Label>
                        <Form.Control type="number" placeholder="Enter salary"/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col></Col>
                </Form.Row>
            <div>Click on the map to add your office location</div>
            
            <MapContainer
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={15}
            zoomControl={false}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy;'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <LocationMarker />
            </MapContainer>

            {/* <MapContainer
                center={[ 51.505, -0.09 ]}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer> */}
                <Button style={{backgroundColor:"rgba(235, 247, 255, 1)", padding:"5px", border:"1px solid rgba(128, 206, 255, 1)", color:"black", alignItems:"end"}}>
                    <Link to="/employer-details">Post Job</Link></Button>
            </Form>       
        </PageBody>
        </>
    )
};

export default CreateJobScreen;

const FormTitle = styled.div`
    text-align: center;
    font-size: 2rem;
    font-family: 'Lato', sans-serif;
    width: 100%,
    height:200px;
    
`
const PageBody = styled.div`
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    padding-top: 100px;
`

const Image = styled.div`
background-image: url(${bg});
background-repeat: no-repeat;
background-attachment: fixed;  
background-size: cover;
width:100vw;
height: 100vh;
position:fixed;
z-index: -1;
`