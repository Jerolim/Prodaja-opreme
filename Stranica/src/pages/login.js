import React, { Component } from "react"
import GlavniDio from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../components/footer"
import { Button, Modal, Nav } from "react-bootstrap"
import { handleLogin, handleLogout, isLoggedIn } from "../logiranje/authen"
import styled from "styled-components"
const UrediLogIn = styled.div`
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 56px;
`
class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ime: "",
      sifra: "",
      show: false,
      show1: false,
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
  handleClose1 = () => {
    this.setState({ show1: false })
  }
  //Ako se desi submit
  handleSubmit = event => {
    event.preventDefault()

    // usporedi stanje sa spremljenim handlelogin podacima
    const provjera = handleLogin(this.state)
    if (provjera.error) {
      this.setState({ show1: true })
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
          <Modal.Body>Welcome: {this.state.ime}</Modal.Body>
          <Modal.Footer>
            <Nav.Link href="/">About</Nav.Link>
            <Button variant="primary" onClick={this.handleClose}>
              Buy
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={this.state.show1}
          onHide={this.handleClose1}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Login failed</Modal.Title>
          </Modal.Header>
          <Modal.Body>fail</Modal.Body>
          <Modal.Footer>
            <Nav.Link href="/login">About</Nav.Link>
            <Button variant="primary" onClick={this.handleClose1}>
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
