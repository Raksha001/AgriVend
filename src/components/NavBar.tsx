import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">AGRIVENDA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Plant care</Nav.Link>
              <Nav.Link href="#">Sell</Nav.Link>
              <Nav.Link href="#">Sign out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
