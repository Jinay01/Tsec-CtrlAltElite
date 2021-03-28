import React, {useState} from 'react';
import {Card, CardColumns} from 'react-bootstrap';
import styled from 'styled-components';

function BlogScreen () {

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
        {
            id: 5,
            title: "How Strong Interpersonal Skills Can Help You at Work—and in Your Job Search",
            image: "https://www.careerquest.edu/wp-content/uploads/2020/03/CareerQuestOffice-Main_Mar12th.jpg",
            description: "Have you ever truly thought about why your favorite coworkers and bosses stand out so much in your mind? What makes them so wonderful to work with—both because you get things done when you work together and because you enjoy the process? Why do you wish everyone else you encountered in the office would be a little bit more like them?",
            website_name: "the muse",
            site: "https://www.themuse.com/advice/what-are-interpersonal-skills-list-example"
        },
        {
            id: 6,
            title: "How Strong Interpersonal Skills Can Help You at Work—and in Your Job Search",
            image: "https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/blog/wp-content/uploads/2019/10/BG_The-new-business-_shutterstock_562474132.jpg",
            description: "Have you ever truly thought about why your favorite coworkers and bosses stand out so much in your mind? What makes them so wonderful to work with—both because you get things done when you work together and because you enjoy the process? Why do you wish everyone else you encountered in the office would be a little bit more like them?",
            website_name: "the muse",
            site: "https://www.themuse.com/advice/what-are-interpersonal-skills-list-example"
        }
    ]

    return (
        <>
        <BigText>Check out some articles that can improve your work-life skills and help you prep for new jobs</BigText>
        <div style={{backgroundImage: 'url("https://img.freepik.com/free-photo/old-gray-cement-wall-background_34552-324.jpg?size=626&ext=jpg&ga=GA1.2.1139941274.1609027200")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', maxWidth: '100vw', height: '130vh'}}/>
        <WrapCards>
            {blog.map((b) => (
                <Card key={b.id}>
                    <Card.Img variant="top" src={b.image} />
                    <Card.Body>
                        <Card.Title><a href={b.site} style={{color: 'black'}}>{b.title}</a></Card.Title>
                        {/* <Card.Text>{b.description}</Card.Text> */}
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><i class="fa fa-globe" aria-hidden="true"></i> {b.website_name}</small>
                    </Card.Footer>
                </Card>
            ))}
        </WrapCards>
        </>
    )
}

export default BlogScreen;

const WrapCards = styled(CardColumns) `
    padding: 150px 150px 100px 150px;
    position: absolute;
    top: 300px;
    border: none;
    &:hover{
        box-shadow:-1px 2px 5px 0px rgba(0,0,0,0.15);
    }
`
const BigText = styled.div `
    background: linear-gradient(180deg, #22185F 0%, #4D0F6A 100%);
    color: white;
    font-size: 3rem;
    padding: 10rem 14rem;
    text-align: center;
    z-index: 2;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
`