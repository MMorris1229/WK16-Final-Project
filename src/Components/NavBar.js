import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">
        ❁☾❁ My Music App ❁☾❁
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/songs">
              Music
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;










