import React from "react"
// import { graphql } from "gatsby"
import { Card, Button, Container } from "react-bootstrap"
import GlavniDio from "../components/header"
import Footer from "../components/footer"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
const UrediAbout = styled.div`
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 56px;
  .row {
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
`
const About = ({ data }) => {
  console.log(data.allFile.edges[0].node)

  return (
    <UrediAbout>
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
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h2>O nama:</h2>
          <p>
            Mi smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu Mi
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu Mi
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
          </p>
          <h2>O podacima:</h2>
          <p>
            Mi smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu Mi
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu Mi
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
            smo uspjesna tvrtka i bavimo se dobrim poslom i nadamo se uspjehu
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12" align="center">
          <Img
            style={{ maxHeight: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          />
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12">
          <h2>O nama:</h2>
          <p>
            Pobjeda je vazna i kljucna za uspjeh Pobjeda je vazna i kljucna za
            uspjeh Pobjeda je vazna i kljucna za uspjeh Pobjeda je vazna i
            kljucna za uspjeh Pobjeda je vazna i kljucna za uspjeh Pobjeda je
            vazna i kljucna za uspjeh Pobjeda je vazna i kljucna za uspjeh
            Pobjeda je vazna i kljucna za uspjeh Pobjeda je vazna i kljucna za
            uspjeh Pobjeda je vazna i kljucna za uspjeh Pobjeda je vazna i
            kljucna za uspjeh Pobjeda je vazna i kljucna za uspjeh Pobjeda je
            vazna i kljucna za uspjeh Pobjeda je vazna i kljucna za uspjeh
          </p>
          <h2>O podacima:</h2>
          <p>
            Pobjeda je vazna i kljucna za uspjeh Pobjeda je vazna i kljucna za
            uspjeh Pobjeda je vazna i kljucna za uspjeh Pobjeda je vazna i
            kljucna za uspjeh Pobjeda je vazna i kljucna za uspjeh Pobjeda je
            vazna i kljucna za uspjeh Pobjeda je vazna i kljucna za uspjeh
            Pobjeda je vazna i kljucna za uspjeh Pobjeda je vazna i kljucna za
            uspjeh Pobjeda je vazna i kljucna za uspjeh Pobjeda je vazna i
            kljucna za uspjeh Pobjeda je vazna i kljucna za uspjeh Pobjeda je
            vazna i kljucna za uspjeh Pobjeda je vazna i kljucna za uspjeh
          </p>
        </div>
      </div>
      <Footer></Footer>
    </UrediAbout>
  )
}
export default About
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
