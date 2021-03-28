import React, { useState, Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Row, Col } from 'react-bootstrap';
import background from '../images/background.jpg';
import '../i18nextConf';
import HomeLabels from '../components/HomeLabels';
import ChatBot from '../components/ChatBot';

function HomeScreen() {

  return (
    <div>
      <Landing>
        <Image />
        <Suspense fallback={<div>Loading... </div>}>
          <HomeLabels />
        </Suspense>
      </Landing>
      <ChatBot/>
    </div>
  )
}

export default HomeScreen;

const Landing = styled.div `
  max-width: 100vw;
  height: 100vh;
`;

const Image = styled.div `
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
`

const FindButton = styled(Button) `
  margin: 5vh 2vw 0 0;
  width: 170px;
  border-radius: 3px;
  border: none;
  background: rgba(72,149,239,1);
  color: #000;
  border: 2px solid rgba(72,149,239,1);
`;

const ReportButton = styled(Button) `
  margin-top: 5vh;
  width: 170px;
  border-radius: 3px;
  background: transparent;
  color: #fff;
  border: 2px solid rgba(72,149,239,1);
`;

const Headings = styled.h1 `
  font-size: 2rem;
  text-align: center;
  margin: 3rem;
`
const Scroll = styled.h6 `
  text-transform: uppercase;
  position: absolute;
  left: 39vw;
  top: 94vh;
  color: #bdbdbd;
`
const Guidelines = styled.div `
  margin: 2vh 15vw 20vh 15vw;
  border-radius: 10px;
  padding: 0.5rem 3rem 2rem 3rem;
  background: #ddd;
`