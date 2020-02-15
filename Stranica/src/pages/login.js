import React, { Component } from "react"
import GlavniDio from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../components/footer"
import { Button, Modal, Nav, Card, Container } from "react-bootstrap"
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
        <GlavniDio></GlavniDio>
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
            <Button variant="primary" href="/">
              Go shopping
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
          <Modal.Body>Wrong name or password, please try again.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose1}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="row">
          <div className="col-lg-12" align="center">
            <Card
              style={{
                border: "0px",
              }}
            >
              <Card.Body>
                <h1>Login</h1>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" align="center">
            <Card
              style={{
                maxWidth: "24rem",
              }}
            >
              <Card.Body style={{ backgroundColor: " #fcfcfc" }}>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Name:
                    <input
                      type="text"
                      value={this.state.ime}
                      onChange={this.handleIme}
                    />
                  </label>
                  <br></br>
                  <label>
                    Password:
                    <input
                      type="text"
                      value={this.state.sifra}
                      onChange={this.handleSifra}
                    />
                  </label>
                  <br></br>
                  <input type="submit" value="Submit" />
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Footer></Footer>
      </UrediLogIn>
    )
  }
}
export default LogIn
