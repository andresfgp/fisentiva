import React from 'react';
// import { Link } from 'react-router-dom';
import '../../assets/styles/componets/header/Header.scss';
import logoHeader from '../../assets/static/logoHeader.png';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
    return (
        <header className='header'>
          <Navbar collapseOnSelect expand="lg" variant="dark" >
            <Container>
            <Navbar.Brand href="/home">
              <img className='header__logo' src={logoHeader} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#hero">
                  <div className="header__link">
                  Home
                  </div>
                </Nav.Link>
                <Nav.Link href="#services">
                  <div className="header__link">
                    Servicios
                  </div>
                </Nav.Link>
                <Nav.Link href="#teamWork">
                  <div className="header__link">
                    Equipo de trabajo
                  </div>
                </Nav.Link>
                <Nav.Link href="#contact">
                  <div className="header__link">
                     Contactenos
                  </div>
                </Nav.Link>
                <Nav.Link target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=+573053493546&text=%C2%A1Hola,%20estoy%20interesado%20en%20conocer%20sobre%20sus%20servicios%20fisioterap%C3%A9uticos%20y%20disponibilidad%20de%20citas!">           
                 <div className="header__link header__icon">
                    <i className='bx bxl-whatsapp'></i>
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

