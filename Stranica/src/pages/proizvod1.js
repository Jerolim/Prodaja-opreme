import React from "react"
import GlavniDio from "../components/header"
import Footer from "../components/footer"
import { Card, Button, Container } from "react-bootstrap"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
const UrediProizvod = styled.div`
  margin-top: 100px;
  .row {
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
`
const Proizvod1 = ({ data }) => {
  return (
    <UrediProizvod>
      <GlavniDio></GlavniDio>
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
              <h1>About</h1>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12" align="center">
          <Img
            style={{ maxHeight: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          />
        </div>
      </div>
      <Footer></Footer>
    </UrediProizvod>
  )
}
export default Proizvod1
export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/src/images/aboutslike//" } }) {
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
