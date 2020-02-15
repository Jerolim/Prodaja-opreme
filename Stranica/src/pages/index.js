import React, { Component } from "react"
// import { graphql } from "gatsby"
import Navigation from "../components/navigation"
import GlavniDio from "../components/header"
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import { Container, Card } from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
    Naslov: "Vietnam war knife",
    Opis: "Original war knife",
    Cijena: "60 $",
    code: "vslika1",
  },
  {
    Naslov: "British helmet",
    Opis: "World war I helemt",
    Cijena: "50$",
    code: "vslika2",
  },
  {
    Naslov: "British boots",
    Opis: "Used boots from second war",
    Cijena: "40 $",
    code: "vslika3",
  },
  {
    Naslov: "Soviet boots",
    Opis: "Eastern front item",
    Cijena: "90 $",
    code: "vslika4",
  },
  {
    Naslov: "Vietnam war jacket",
    Opis: "From Saigon offensive",
    Cijena: "110 $",
    code: "vslika5",
  },
  {
    Naslov: "Vietnam war helmet",
    Opis: "Helmet from Vietnam war",
    Cijena: "99 $",
    code: "vslika6",
  },
]

class Index extends Component {
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
    console.log(this.props.data)
    console.log("oj")
    const { kartice, search } = this.state
    const filtrirano = kartice.filter(kartica => {
      if (kartica.Naslov.toLowerCase().includes(search.toLowerCase()))
        return kartica
    })
    return (
      <Uredi3>
        <GlavniDio trazenje={this.onSearchChange}></GlavniDio>
        <Img
          fluid={this.props.data.allFile.edges[0].node.childImageSharp.fluid}
        />
        <div className="row">
          <div className="col-lg-12" align="center">
            <Card
              style={{
                border: "0px",
              }}
            >
              <Card.Body>
                <h1>Weekly sale</h1>
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

export default Index // bitno za eksportat podatke
export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/src/images/prvaslika//" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
/*
export const query = graphql`
  {
    site {
      siteMetadata {
        menuItems {
          path
          text
        }
      }
    }
  }
`
*/
