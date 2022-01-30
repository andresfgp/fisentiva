import React from 'react';
// import { Link } from 'react-router-dom';
import '../../assets/styles/componets/header/Header.scss';
import fisentivaLogo from '../../assets/static/fisentivaLogo.png';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
    return (
        <header className='header'>
        
          <Navbar collapseOnSelect expand="lg" variant="dark" className='nav_color'>
            <Container>
            <Navbar.Brand href="#home">
              <img className='image' src={fisentivaLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#home">
                  <div className="nav">
                  Home
                  </div>
                </Nav.Link>
                <Nav.Link href="#services">
                  <div className="nav">
                    Servicios
                  </div>
                </Nav.Link>
                <Nav.Link href="#teamWork">
                  <div className="nav">
                    Equipo de trabajo
                  </div>
                </Nav.Link>
                <Nav.Link href="#contact">
                  <div className="nav">
                     Contactenos
                  </div>
                </Nav.Link>
                <Nav.Link href="#appointment">           
                 <div className="nav nav__icon">
                    <i class='bx bxl-whatsapp new'></i>
                    <strong>Programe una cita</strong> 
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
      </header>
    )
}

export default Header

