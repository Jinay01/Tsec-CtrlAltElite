import React, { Suspense } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';
import NavLabels from './NavLabels';
import '../i18nextConf';

function Header() {
  if(localStorage.getItem('access')){
    return (
      <>
        <Navs fixed="top">
          <Nav className="mr-auto">
            <Navbar.Brand href="/" style={{color: '#D86A04', fontWeight: '600'}}>Interview Prep</Navbar.Brand>
          </Nav>
            <Nav.Link href='/' eventKey="link-1" onClick={()=>{
              localStorage.removeItem('access');
            }}>Logout</Nav.Link>
        </Navs>
      </>
    )
  }
  else{
    return (
      <>
        <Navs activeKey="/">
          <Nav className="mr-auto">
            <Navbar.Brand href="/" style={{color: '#D86A04', fontWeight: '600'}}>Interview Prep</Navbar.Brand>
          </Nav>
          <Suspense fallback={<div>Loading... </div>}>
            <NavLabels/>
          </Suspense>
          <LanguageSelector />
        </Navs>
      </>
    )
  }
}

export default Header;

const Navs = styled(Navbar) `
  padding: 1.2rem 2rem;
  background: rgba(0,0,0,0.9);
  width: 100vw;
  z-index: 2;
  max-width: 100vw !important;
  position: fixed;
`