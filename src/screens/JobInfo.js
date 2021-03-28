import React,{useState,useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import image from "../images/bg.jpg";
import salary from "../images/rupee.svg";
import { Container} from "react-bootstrap";
import Slide from "../components/Slide";
import MyMap from "../components/Map"

function JobInfo ({ match }) {

    const pickUpInit = {address:'', lat:28.4595, lng:77.0266};
    const [pickUp,setPickUp] = useState(pickUpInit);
    
    const [job, setJob] = useState({
        id: match.params.id,
        job_topic: "",
        company_name: "",
        job_requirements: "",
        job_title: "",
        job_desciption: "",
        job_loction: "",
        job_salary: "",
        job_qualification: "",
        job_type: "",
        job_experience: "",
        job_link: "",
        category : "",
      });

    useEffect(() => {
        fetchJob();
        console.log(match);
      }, []);

    
    const fetchJob = async () => {
        const response = await fetch(
          `http://127.0.0.1:8000/joblisting/${match.params.id}`
        );
        const data = await response.json();
        setJob(data);
        console.log(data.category)
      };
    
    return ( 
        <>
            <div>
                <Container style={{paddingTop:"120px"}}>
                    <Title>{job.job_title}</Title>
                    <Body>
                        <JobTitle>{job.job_title}</JobTitle>
                        <CompanyName>{job.company_name}</CompanyName>
                        <p>
                        {job.job_desciption}
                        </p>
                        <div>
                            <Chip style={{marginRight:"25px"}}>
                                <img src={salary} alt="Person" style={{width:"50px", height:"50px",float:"left", margin:"0 10px 0 -25px"}}width="96" height="96"/>
                                {job.job_salary}
                            </Chip>

                            <Chip>
                                <img src={image} alt="Person" style={{width:"50px", height:"50px",float:"left", margin:"0 10px 0 -25px", borderRadius:"50%"}}width="96" height="96"/>
                                {job.job_topic}
                            </Chip>

                            <div style={{marginTop:"20px",fontSize:"1.1rem"}}>
                                View Location : <span><MyMap
                                    pU={pickUp} 
                                /></span> 
                                
                                
                            </div>
                            
                        </div>
                        
                    </Body>


                    <Body>
                        <JobTitle>Requirements</JobTitle>
                        <Qualification>
                            <p >Qualification:  <span style={{fontSize:"1.2rem", fontWeight:"600"}}>{job.job_qualification}</span></p>
                        </Qualification>

                        <div>
                            Skills Required:
                            <ul>
                                {/* {skills.map(qual=>(
                                    <li key={qual.key}>
                                        {qual.name}
                                    </li>
                                ))} */}

                                <li>{job.job_requirements}</li>
                            </ul>
                        </div>

                        <div style={{marginTop:"40px"}}>
                            <p style={{marginBottom:"4px", fontSize:"1.4rem"}}>Experience: <span style={{fontSize:"1.2rem", fontWeight:"600"}}>{job.job_experience}</span></p>
                        </div>
                        
                        <div>
                        <Button>
                            Apply for Job
                        </Button>
                        <Link to={`/joblists/${job.id}/${job.category}`}>
                        <Button>
                            Prepare for interview
                        </Button>
                        </Link>
                        </div>
                        
                    </Body>

                    <Body>
                        <JobTitle>Rate your Experience with <span>{job.company_name}</span></JobTitle>
                        <div style={{marginTop:"40px"}}>
                            <p style={{marginBottom:"4px", fontSize:"1.4rem"}}>Work-Life Balance <span ><Slide/></span></p>
                        </div>

                        <div style={{marginTop:"40px"}}>
                            <p style={{marginBottom:"4px", fontSize:"1.4rem"}}>Salary <span ><Slide/></span></p>
                        </div>

                        <div style={{marginTop:"40px"}}>
                            <p style={{marginBottom:"4px", fontSize:"1.4rem"}}>Work Culture<span ><Slide/></span></p>
                        </div>

                        <div style={{marginTop:"40px"}}>
                            <p style={{marginBottom:"4px", fontSize:"1.4rem"}}>Projects<span ><Slide/></span></p>
                        </div>

                    </Body>
                </Container>
            </div>
        </>
     );
}
 

const Title = styled.p`
    font-size:2rem;
    text-align: center;
`

const Chip = styled.div`
    display: inline-block;
    padding: 0 25px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    border-radius: 25px;
    background-color: #b4ebff;
`

const JobTitle = styled.p`
    font-size: 2rem;
    margin-bottom:0px;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-image: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1;
    width:fit-content;
`

const CompanyName = styled.p`
    font-size: 1.3rem;
    margin-bottom:15px
`

const Qualification = styled.p`
    margin-bottom: 10px;
`

const Button = styled.button`
    margin-top:40px;
    padding:10px;
    border: 2px solid rgb(250,224,66);
    border-radius: 5px;
    background-color: white;
    font-size:1.3rem;
    margin-right: 20px;
`

const Body = styled.div`
    background-color: #ECF0F1;
    padding:20px;
    margin-bottom:10px;
    border-radius: 8px;
`

const Location = styled.div`
    display: inline-block;
    place-items: center;    
`



export default JobInfo;
