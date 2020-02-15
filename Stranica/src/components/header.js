import React, { useState } from "react"
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
import {
  isLoggedIn,
  getUser,
  isBrowser,
  handleLogout,
} from "../logiranje/authen"

import styled from "styled-components"
const Uredi = styled.div`
  margin-bottom: 60px;
  .navbar {
    background-color: #fffaf0;
    padding: 0rem 0rem;
  }
  .navbar-brand {
    font-size: 2em;
    padding: 0.5rem 1rem;
    font-style: italic;
    font-weight: bold;
  }
  .navbar-collapse {
    padding-right: 0.5rem;
  }
  .navbar-nav .nav-link {
    padding-left: 0.5em;
  }
`
const GlavniDio = ({ trazenje }) => {
  return (
    <Uredi>
      <Navbar expand="lg " fixed="top">
        <NavbarBrand href="/">History shop</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <NavDropdown title="Choose era" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ww1">WW1</NavDropdown.Item>
              <NavDropdown.Item href="/ww2">WW2</NavDropdown.Item>
              <NavDropdown.Item href="/vietnam">Vietnam war</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            variant="outline-success"
            href="/login"
            style={{ margin: "5px" }}
          >
            Profile
          </Button>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={trazenje}
              className="mr-sm-2"
            />
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
