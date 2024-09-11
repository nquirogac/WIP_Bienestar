import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="circle-container">
         <img src="src\assets\images\escudo_una.png" alt="escudo unal" />
    </div>
    <div className='quad-container'>

    </div>
            
            
            <Navbar expand="lg" className="bg-dark text-light navbar-custom1" style={{ width: "100%" }}>
                <Container>
                    <Navbar.Brand href="#home" className="text-light">Nacional</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="text-light">Nivel 2</Nav.Link>
                            <Nav.Link href="#link" className="text-light">Nivel 3</Nav.Link>
                            <Nav.Link href="#link" className="text-light">Nivel 4</Nav.Link>
                        </Nav>
                        {/* Añadimos ms-auto para mover el NavDropdown a la derecha */}
                        <Nav className="ms-auto">
                            <NavDropdown title={<span className="text-light">Sedes</span>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            <Navbar expand="lg" className="bg-dark text-light navbar-custom" style={{ width: "100%" }}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="text-light">Calendario Academico</Nav.Link>
                            <div className="nav-divider"></div>
                            <Nav.Link href="#link" className="text-light">Correo Institucional</Nav.Link>
                            <div className="nav-divider"></div>
                            <Nav.Link href="#link" className="text-light">Contactenos</Nav.Link>
                        </Nav>
                        {/* Añadimos ms-auto para mover el NavDropdown a la derecha */}
                        <Nav className="ms-auto">
                            <NavDropdown title={
                                <span className="text-light">
                                    <img
                                        src="src\assets\images\person_unal_white.png"
                                        style={{ width: "20px", height: "20px", marginRight: "5px" }}
                                    />
                                    Comunidad Unal
                                </span>
                            } id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className="nav-divider"></div>
                        <Nav >
                            <NavDropdown title={<span className="text-light">Servicios</span>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className="nav-divider"></div>
                        <Nav>
                            <NavDropdown title={<span className="text-light">ESP</span>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className="nav-divider"></div>
                        <Nav >
                            <NavDropdown title={<span className="text-light">Sedes</span>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Navbar expand="lg" className="bg-dark text-light navbar-custom2" style={{ width: "100%" }}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto d-flex justify-content-center">
                            <Nav>
                                <NavDropdown title={<span className="text-dark">Item 1</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="mx-2">
                                <NavDropdown title={<span className="text-dark">Item 2</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="mx-2">
                                <NavDropdown title={<span className="text-dark">Item 3</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="mx-2">
                                <NavDropdown title={<span className="text-dark">Item 4</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="mx-2">
                                <NavDropdown title={<span className="text-dark">Item 5</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="mx-2">
                                <NavDropdown title={<span className="text-dark">Item 6</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="mx-2">
                                <NavDropdown title={<span className="text-dark">Item 7</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className="text-light">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="text-light">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className="text-light">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className="text-light">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;