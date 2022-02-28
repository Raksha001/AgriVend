import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "../assets/images/bg.png";

export default function NavBar() {
  return (
    <>
      <Navbar
        style={{
          background: `url("${bg}")no-repeat center/cover`,
        }}
        expand="lg"
        variant="light"
      >
        <Container fluid>
          <Navbar.Brand
            className="text-white fs-3 fw-bolder"
            style={{ letterSpacing: "0.4rem" }}
            href="#home"
          >
            AGRIVEND
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link href="/about">HOME</Nav.Link>
              <Nav.Link href="/plantcare">PLANT CARE</Nav.Link>
              <Nav.Link href="#">SELL</Nav.Link>
              <Nav.Link href="/">SIGN OUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
