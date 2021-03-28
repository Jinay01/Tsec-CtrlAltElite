import React from "react";
import { Col, Row, Card, CardColumns, CardDeck } from "react-bootstrap";
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const blog = [
    {
        id: 1,
        title: "Top Government Jobs for Engineers",
        image: "https://images.livemint.com/img/2020/05/31/600x338/itoffice-kdCC--621x414@LiveMint_1590928986901.jpg",
        description: "Securing a government job for an engineer is a dream come true for many candidates. There are many advantages to government jobs. The most important advantage is the job security provided in the government sector. The government employees get good pay and bonuses on various occasions.",
        website_name: "SuccessCDs",
        site: "https://www.successcds.net/Career/qna/best-government-jobs-for-engineers-in-india-2020-17807.html"
    },
    {
        id: 2,
        title: "Career Choices Of Top 10 Inspirational Women",
        image: "https://energyresourcing.com/wp-content/uploads/2019/03/empower-women-at-work.jpg",
        description: "As the post-COVID world moves towards achieving SDGs by 2030 (Sustainable Development Goals, silly!), let’s join hands with the UN in celebrating the theme this Women’s Day in 2021 – Women in leadership: Achieving an equal future in a COVID-19 world.",
        website_name: "idreamcareer",
        site: "https://idreamcareer.com/blog/womens-day-2021-top-10/"
    },
    {
        id: 3,
        title: "How To Be the Best Remote Employee You Can Possibly Be",
        image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iX8Gxg77xY0I/v0/1000x-1.jpg",
        description: "So many people have had to adapt to working remotely over the last year without any manual or handbook to teach them how to do it effectively. Remote employees are now responsible for figuring out a healthy work-life balance, they need to meet the goals set out by their employers, and they have to find ways to impress their managers so they can advance their careers.",
        website_name: "careersavvy",
        site: "https://www.careersavvy.co.uk/how-to-be-the-best-remote-employee-you-can-possibly-be/"
    },
    {
        id: 4,
        title: "How to Talk to Your Boss If You’re Struggling to Get Work Done During Coronavirus",
        image: "https://img.deusm.com/informationweek/workfromhome-bunditinay-AdobeStock_335712831.jpeg",
        description: "What the world is experiencing right now is unprecedented in a number of ways, including the far-reaching mental and emotional impact being felt by so many. So if you’re struggling, it’s understandable. You’re in good company with the rest of the world.",
        website_name: "themuse",
        site: "https://www.themuse.com/advice/mental-health-coronavirus-talk-to-boss"
    },
]

const Prep4 = () => {
    return ( 
        <>
        <div>
            <Heading>Dressing and Grooming</Heading> 
            <Body>
            <Row style={{padding: '20px'}}>
                <Col>
                    <div style={{ marginRight: '50px', fontSize: '1.2rem'}}>
                        You know that it’s important to make a good first impression at a job interview and that your choice of interview attire is a big part of that. But dressing for job interviews is a lot more complicated than it used to be.
                        For example, let’s say you’re going to an interview at a company where no one ever wears a suit – not even the CEO. Should you still dress formally for the occasion, or will you look out of place? And if you do decide to go for a more casual look, how can you make sure that you still appear professional and respectful?
                    </div>
                </Col>
                <Col>
                    <ReactPlayer controls url='https://www.youtube.com/watch?v=ZN7AcYfhIjM' width='500px' height='330px'/>
                </Col>
            </Row>
            </Body>
            <Body>
            <div style={{padding: '10px 30px', fontSize: '1.2rem'}}>
            <p> Here are a few links to gain futher insight as to how to Dress for interviews</p>
                <Row style={{padding: '20px'}}>
                {blog.map((b) => (
                    <Col xs={3}>
                        <Card key={b.id}>
                            <Card.Img  src={b.image} />
                            <Card.Body>
                                <Card.Title><a href={b.site} style={{color: 'black', fontSize:"1.2rem"}}>{b.title}</a></Card.Title>
                                {/* <Card.Text>{b.description}</Card.Text> */}
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"><i class="fa fa-globe" aria-hidden="true"></i> {b.website_name}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                        
                    ))}
                </Row>
                    
            </div>
            </Body>
            
           


        </div>
        </>
     );
}
 

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
    margin-bottom:10px;
    border-radius: 8px;
`

export default Prep4;

