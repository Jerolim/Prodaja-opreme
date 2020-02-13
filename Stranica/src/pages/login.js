import React, { Component } from "react"
import GlavniDio from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../components/footer"
import { Button, Modal, Nav } from "react-bootstrap"
import { handleLogin, handleLogout, isLoggedIn } from "../logiranje/authen"

import styled from "styled-components"
const UrediLogIn = styled.div`
  margin-top: 70px;
`
class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ime: "",
      sifra: "",
      show: false,
    }
  }
  //Pokupi ime
  handleIme = event => {
    this.setState({ ime: event.target.value })
  }
  //Pokupi sifru
  handleSifra = event => {
    this.setState({ sifra: event.target.value })
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  //Ako se desi submit
  handleSubmit = event => {
    event.preventDefault()

    // usporedi stanje sa spremljenim handlelogin podacima
    const provjera = handleLogin(this.state)
    if (provjera.error) {
      return this.setState({ ime: "", sifra: "" })
    } else {
      this.setState({ show: true })
    }
  }
  render() {
    console.log(this.state.ime)
    return (
      <UrediLogIn>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Login successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to continue with purchase</Modal.Body>
          <Modal.Footer>
            <Nav.Link href="/">About</Nav.Link>
            <Button variant="primary" onClick={this.handleClose}>
              Buy
            </Button>
          </Modal.Footer>
        </Modal>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.ime}
              onChange={this.handleIme}
            />
          </label>
          <label>
            Sifra:
            <input
              type="text"
              value={this.state.sifra}
              onChange={this.handleSifra}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </UrediLogIn>
    )
  }
}
export default LogIn
