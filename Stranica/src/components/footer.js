import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"
const Uredi = styled.div`
  .navbar {
    background-color: #fffaf0;
    display: flex;
    justify-content: end;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`
const Footer = () => {
  return (
    <Uredi>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            All rights reserved for this page.
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </Uredi>
  )
}
export default Footer
