import React from "react";
import { Card, Col, Row, Tab, Tabs, Accordion, Button } from "react-bootstrap";
import styled from 'styled-components';
import dr1 from '../images/resume-design-1.docx'

const Prep2 = () => {
    return ( 
        <div>
            <Heading>Make an Impressive Resume</Heading> 
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>Look for keywords in the job postings
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: '#9200BC'}}>
                        Read more <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Carefully read the job postings that interest you. As you apply for different jobs, you should study each job description for keywords that show what the employer is looking for in an ideal candidate. Include those keywords in your resume where relevant.<br/>For example, if you’re applying for a job as a Medical Billing Coder, an employer might list keywords such as “coding,” “claims submission,” “compliance” or “AR management” in the job description. Pay particular attention to anything listed in the sections labelled “Requirements” or “Qualifications”. If you have the skills that employers are looking for, you can add these same terms to your resume in the experience or skills sections.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>Include only the most relevant information and put the most important information first
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: '#9200BC'}}>
                        Read more <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>While you might have extensive work or educational experience, it’s important to keep your resume as brief as possible without leaving out key information. Hiring managers don’t spend a lot of time reading each resume. If your resume includes old or irrelevant information, such as jobs held over 10 years ago or minor degrees and achievements, it may distract from important information.<br/>Try to include only work experience, achievements, education and skills most relevant to the employer. You should prioritise important information higher on your resume to draw attention to key skills and achievements.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>Good typography and grammar
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{color: '#9200BC'}}>
                        Read more <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Double check spelling grammar and dates. Keep your font size between ten point and twelve point. And avoid using novelty typefaces. Ariel looks great. Make sure that your margins are consistent and when printing your resume. <br/>Paying attention to these things demonstrates to prospective employers that you are methodical and that you have an eye for detail and when hundreds of people apply for the same position.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>Get proper feedback
                    <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{color: '#9200BC'}}>
                        Read more <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>Show it to as many of your friends and family as possible.They will catch things that you missed and they might know about job interviews too.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>Decide whether you need a unique resume for different jobs
                    <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{color: '#9200BC'}}>
                        Read more <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Before submitting any application, you should ask yourself, “Have I made it as easy as possible for this employer to see that I’m qualified?” If you’re applying for a job that has unique requirements, you may need another version of your resume to fully demonstrate your qualifications. Decide which resume to use on a case-by-case basis.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

            <Heading>Download resume templates</Heading> 
            <div style={{borderBottom: '1px solid lightgrey', margin: '60px 0'}}>
            <Tabs defaultActiveKey="design" id="uncontrolled-tab-example">
                <Tab eventKey="design" title="Design Resumes" style={{borderLeft: '1px solid lightgrey', borderRight: '1px solid lightgrey'}}>
                    <Row style={{padding: '50px 20px'}} sm={2} md={4}>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="../images/resume-design-1.pdf" />
                                <Card.Body>
                                    <Card.Title>Resume 1</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small>
                                    <a style={{color: 'grey'}} href={dr1} download="resume-1">Download word file <i class="fa fa-download" aria-hidden="true"></i> </a>
                                </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Resume 2</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small>
                                    <a style={{color: 'grey'}} href="../images/resume-design-2.docx" download>Download word file <i class="fa fa-download" aria-hidden="true"></i></a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Resume 3</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                <small>
                                    <a style={{color: 'grey'}} href="../images/resume-design-3.docx" download>Download word file <i class="fa fa-download" aria-hidden="true"></i></a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Resume 4</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small>
                                        <a style={{color: 'grey'}} href="../images/resume-design-4.docx" download>Download word file <i class="fa fa-download" aria-hidden="true"></i></a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="entry" title="Entry Level Resumes" style={{borderLeft: '1px solid lightgrey', borderRight: '1px solid lightgrey'}}>
                    <Row style={{padding: '50px 20px'}} sm={2} md={4}>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Resume 1</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small>
                                        <a style={{color: 'grey'}} href="../images/college-resume-example.docx" download>Download word file <i class="fa fa-download" aria-hidden="true"></i></a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Resume 2</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small>
                                        <a style={{color: 'grey'}} href="../images/college-resume-example.docx" download>Download word file <i class="fa fa-download" aria-hidden="true"></i></a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row >
                </Tab>
                <Tab eventKey="sales" title="Sales and Retail Resumes" style={{borderLeft: '1px solid lightgrey', borderRight: '1px solid lightgrey'}}>
                    <Row style={{padding: '50px 20px'}} sm={2} md={4}>
                        <Col>
                        <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Resume 1</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small>
                                        <a style={{color: 'grey'}} href="../images/hospitality-resume-example.docx" download>Download word file <i class="fa fa-download" aria-hidden="true"></i></a>
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
            </div>
        </div>
     );
}
 
export default Prep2;

const Heading = styled.h3 `
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 50px;
    margin-top: 80px;
`