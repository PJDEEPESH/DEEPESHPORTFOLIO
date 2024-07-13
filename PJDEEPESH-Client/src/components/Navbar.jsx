import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Webhook } from '@mui/icons-material';
import logo from '../logo.svg';
import '../App.css';

export default function NavbarHome() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleToggleOffcanvas = () => setShowOffcanvas((prev) => !prev);

    return (
        <div style={{ margin: 0, padding: 0 }}>

        <Navbar expand='lg' className="mb-1 sticky-top">
            <Container fluid>
                <Navbar.Brand href="/hero">
                    <img
                        alt='react-logo'
                        className='App-logo'
                        src={logo}
                    />
                    <span className='brand-name'>Port <span style={{ color: '#89CFF0' }}>Folio</span></span>
                </Navbar.Brand>
                <Navbar.Toggle onClick={handleToggleOffcanvas}>
                    <Webhook style={{ color: '#89CFF0', fontSize: '30px' }} />
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    show={showOffcanvas}
                    onHide={handleCloseOffcanvas}
                    placement="end"
                    style={{ width: '60%' }}
                >
                    <Offcanvas.Header closeButton />
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link className='nav-item' href="#about" onClick={handleCloseOffcanvas}>About</Nav.Link>
                            <Nav.Link className='nav-item' href="#skills" onClick={handleCloseOffcanvas}>Skills</Nav.Link>
                            <Nav.Link className='nav-item' href="#projects" onClick={handleCloseOffcanvas}>Projects</Nav.Link>
                            <Nav.Link className='nav-item' href="#contact" onClick={handleCloseOffcanvas}>Contact me</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        </div>
    );
}
