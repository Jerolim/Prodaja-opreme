import React, { Component } from "react"
// import { graphql } from "gatsby"
import Navigationww1 from "../components/navigationww1"
import GlavniDio from "../components/header"
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import SEO from "../components/seo"
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
    Naslov: "Pistol",
    Opis: "Original used pistol",
    Cijena: "90 $",
    code: "w1slika1",
  },
  {
    Naslov: "Pistol version 2",
    Opis: "Good condition",
    Cijena: "60 $",
    code: "w1slika2",
  },
  {
    Naslov: "Victory medal",
    Opis: "US medal of 1918",
    Cijena: "60 $",
    code: "w1slika3",
  },
  {
    Naslov: "Medal",
    Opis: "Good shape medal",
    Cijena: "50 $",
    code: "w1slika4",
  },
  {
    Naslov: "War rifle",
    Opis: "WW1 rifle",
    Cijena: "110 $",
    code: "w1slika5",
  },
]

class Ww1 extends Component {
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
    const { kartice, search } = this.state
    const filtrirano = kartice.filter(kartica => {
      if (kartica.Naslov.toLowerCase().includes(search.toLowerCase()))
        return kartica
    })
    return (
      <Uredi3>
        <SEO title="ww1" />
        <GlavniDio trazenje={this.onSearchChange}></GlavniDio>
        <div className="row">
          <div className="col-lg-12" align="center">
            <Card
              style={{
                border: "0px",
              }}
            >
              <Card.Body>
                <h1>World war I</h1>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
          <Navigationww1 Predmeti={filtrirano}></Navigationww1>
        </div>

        <Footer></Footer>
      </Uredi3>
    )
  }
}

export default Ww1 // bitno za eksportat podatke
