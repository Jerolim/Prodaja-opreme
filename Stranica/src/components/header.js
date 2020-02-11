import React from "react"
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  NavbarBrand,
} from "react-bootstrap"
import { Link } from "gatsby"

import styled from "styled-components"
const Uredi = styled.div`
  .navbar {
    background-color: #fffaf0;
  }
  .navbar-brand {
    font-size: 2em;
  }
`
const GlavniDio = () => {
  return (
    <Uredi>
      <Navbar expand="lg " fixed="top">
        <NavbarBrand href="/">History shop</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <NavDropdown title="Buy" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.4">Choose era</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/page2">WW1</NavDropdown.Item>
              <NavDropdown.Item href="/ww2">WW2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                War of 1812
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Uredi>
    /*
    <Navbar bg="primary" variant="dark" fixed="top">
      <Navbar.Brand href="#home" className={headerstyle.Naslov}>
        History Shop
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/page2">About</Nav.Link>
        <Nav.Link href="#features">Profile</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
    */
  )
}
export default GlavniDio
