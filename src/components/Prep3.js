import React from "react";
import { Col, Row, Card } from "react-bootstrap";
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


const Prep3 = () => {
    return ( 
        <>
        <div>
            <Heading>Company Research</Heading> 
            <Body>
                <Row style={{padding: '20px'}}>
                    <Col>
                        <div style={{ marginRight: '50px', fontSize: '1.2rem'}}>
                            To give yourself the edge, you need to research the employer organization and interviewers before a job interview.
                            Fortunately, in this age of the Internet and business networking, it’s getting increasingly easier to do this.
                            Interviewers will expect you to have some knowledge of the organization before you meet them. By researching the interviewers as well, you’ll know what to expect from them, and what they expect from you.
                        </div>
                    </Col>
                    <Col>
                        <ReactPlayer controls url='https://www.youtube.com/watch?v=BXScnhZS4M8' width='500px' height='330px'/>
                    </Col>
                </Row>
            </Body>

            <Body>
            <div style={{padding: '10px 30px', fontSize: '1.2rem'}}>
            <p> Here are a few links to gain futher insight on researching about a particular company</p>
                <Row style={{padding: '20px'}}>
                {blog.map((b) => (
                    <Col xs={3}>
                        <Card key={b.id}>
                            <Card.Img  src={b.image} />
                            <Card.Body>
                                <Card.Title><a href={b.site} style={{color: 'black'}}>{b.title}</a></Card.Title>
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
    margin-bottom:40px;
    border-radius: 5px;
`
 
export default Prep3;