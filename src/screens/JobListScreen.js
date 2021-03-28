import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {Card, CardDeck, Container} from 'react-bootstrap';
import SearchBar from '../components/SearchBar';

const JobListScreen = ({rec, setRec, id, title}) => {
    
    const [allJobs, setAllJobs] = useState([
        {
            id: "",
            job_topic: "",
            company_name: "",
            job_requirements: "",
            job_title: "",
            job_description: "",
            job_location: "",
            job_salary: "",
            job_qualification: "",
            job_type: "",
            job_experience: "",
            job_link: "",
            category:""
        }
    ])

    const getAllJobs = async () => {
        const response = await fetch(`http://127.0.0.1:8000/joblisting/`, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }); 
        const data = await response.json();
        setAllJobs(data);
    }

    useEffect(() => {
        getAllJobs();
    }, [allJobs]);

    return(
        <Container>
        <div style={{textAlign: 'center', paddingTop: '150px'}}>
            <SearchBar rec={rec} setRec={setRec} />
        </div>
        {allJobs.map((all) => (
        <Card style={{marginTop:"20px", margin:"15px"}}>
            <Card.Body key={all.id}>
            <Link to={`/joblists/${all.id}`}>
                <Card.Title>{all.job_title}</Card.Title>
                <Card.Text>{all.company_name}</Card.Text>
                <Card.Text>{all.job_topic}</Card.Text>
            </Link>
            </Card.Body>
            <Card.Footer><i class="fa fa-map-marker" aria-hidden="true"></i> {all.job_location}</Card.Footer>
        </Card>
        ))}
        </Container>
    );
};

export default JobListScreen;