import React, { Component } from "react"
// import { graphql } from "gatsby"
import Navigation from "../components/navigation"
import GlavniDio from "../components/header"
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import { Container, Card } from "react-bootstrap"
import { graphql } from "gatsby"
import { handleLogin, handleLogout, isLoggedIn } from "../logiranje/authen"
import Img from "gatsby-image"
const Uredi3 = styled.div`
  margin-top: 70px;
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
  },
  {
    Naslov: "British helmet",
    Opis: "World war I helemt",
    Cijena: "50$",
  },
  {
    Naslov: "British boots",
    Opis: "Used boots from second war",
    Cijena: "40 $",
  },
  {
    Naslov: "Soviet boots",
    Opis: "Eastern front item",
    Cijena: "90 $",
  },
  {
    Naslov: "Vietnam war jacket",
    Opis: "From Saigon offensive",
    Cijena: "110 $",
  },
  {
    Naslov: "Vietnam war helmet",
    Opis: "Helmet from Vietnam war",
    Cijena: "99 $",
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
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            handleLogout()
          }}
        >
          Logout
        </a>
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
