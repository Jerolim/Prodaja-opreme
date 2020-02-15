import React, { Component } from "react"
// import { graphql } from "gatsby"
import Navigationvietnam from "../components/navigationvietnam"
import GlavniDio from "../components/header"
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import { Container, Card } from "react-bootstrap"
const Uredi3 = styled.div`
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 56px;
  .row {
    margin-left: 15px;
    margin-right: 15px;
  }
`
const Proizvodi = [
  {
    Naslov: "Vietnam medal",
    Opis: "Medal for victory",
    Cijena: "90 $",
    code: "vslika1",
  },
  {
    Naslov: "US army boots",
    Opis: "Used in Vietnam jungle",
    Cijena: "30 $",
    code: "vslika2",
  },
  {
    Naslov: "US army helmet",
    Opis: "Used helmet with names",
    Cijena: "60 $",
    code: "vslika3",
  },
  {
    Naslov: "Vietnam jacket",
    Opis: "Original army issued",
    Cijena: "99 $",
    code: "vslika4",
  },
  {
    Naslov: "Purple heart",
    Opis: "Medal for bravery",
    Cijena: "120 $",
    code: "vslika5",
  },
]

class Vietnam extends Component {
  // dajemo mu data to je sve podatke iz graphql
  // console.log(data);
  //const {menuItems}=data.site.siteMetadata;
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      kartice: [],
    }
  }
  componentDidMount() {
    this.setState({ kartice: Proizvodi })
  }

  onSearchChange = event => {
    //console.log(event.target.value)
    this.setState({ search: event.target.value })
  }

  render() {
    console.log(Proizvodi)
    const { kartice, search } = this.state
    const filtrirano = kartice.filter(kartica => {
      if (kartica.Naslov.toLowerCase().includes(search.toLowerCase()))
        return kartica
    })
    return (
      <Uredi3>
        <GlavniDio trazenje={this.onSearchChange}></GlavniDio>
        <div className="row">
          <div className="col-lg-12" align="center">
            <Card
              style={{
                border: "0px",
              }}
            >
              <Card.Body>
                <h1>Vietnam war</h1>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
          <Navigationvietnam Predmeti={filtrirano}></Navigationvietnam>
        </div>

        <Footer></Footer>
      </Uredi3>
    )
  }
}

export default Vietnam // bitno za eksportat podatke
