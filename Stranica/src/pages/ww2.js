import React, { Component } from "react"
// import { graphql } from "gatsby"
import Navigation from "../components/navigation"
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
    Naslov: "Vojska",
    Opis: "Veselimo se ovome opisu",
    Cijena: "60 $",
  },
  {
    Naslov: "Vojarna",
    Opis: "Jeli radi slika ova sada",
    Cijena: "60 $",
  },
  {
    Naslov: "Patka",
    Opis: "Prodajem opremu svima jeftino",
    Cijena: "60 $",
  },
  {
    Naslov: "Pumpa",
    Opis: "/page2",
    Cijena: "60 $",
  },
  {
    Naslov: "Patkka",
    Opis: "ne ide",
    Cijena: "60 $",
  },
  {
    Naslov: "PParty",
    Opis: "deri mali",
    Cijena: "60 $",
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
              <Card.Body
                style={{
                  paddingBottom: "0.25em",
                }}
              >
                <h1>World war II</h1>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
          <Navigation Predmeti={filtrirano}></Navigation>
        </div>

        <Footer></Footer>
      </Uredi3>
    )
  }
}

export default Ww2 // bitno za eksportat podatke
