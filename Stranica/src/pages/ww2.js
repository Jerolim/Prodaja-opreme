import React, { Component } from "react"
// import { graphql } from "gatsby"
import Navigationww2 from "../components/navigationww2"
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
    Naslov: "USA army jacket",
    Opis: "Used in pacific campaign",
    Cijena: "90 $",
    code: "w2slika1",
  },
  {
    Naslov: "Swedish army jacket",
    Opis: "Used in finish war",
    Cijena: "60 $",
    code: "w2slika2",
  },
  {
    Naslov: "British boots",
    Opis: "Not used boots",
    Cijena: "60 $",
    code: "w2slika3",
  },
  {
    Naslov: "French helmet",
    Opis: "Original solid condition helmet",
    Cijena: "20 $",
    code: "w2slika4",
  },
  {
    Naslov: "Pistol",
    Opis: "Perfect condition",
    Cijena: "60 $",
    code: "w2slika5",
  },
]

class Ww2 extends Component {
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
        <SEO title="ww2" />
        <GlavniDio trazenje={this.onSearchChange}></GlavniDio>
        <div className="row">
          <div className="col-lg-12" align="center">
            <Card
              style={{
                border: "0px",
              }}
            >
              <Card.Body>
                <h1>World war II</h1>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
          <Navigationww2 Predmeti={filtrirano}></Navigationww2>
        </div>

        <Footer></Footer>
      </Uredi3>
    )
  }
}

export default Ww2 // bitno za eksportat podatke
