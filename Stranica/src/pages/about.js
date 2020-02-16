import React from "react"
// import { graphql } from "gatsby"
import { Card } from "react-bootstrap"
import GlavniDio from "../components/header"
import Footer from "../components/footer"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
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
  return (
    <UrediAbout>
      <SEO title="about" />
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
          <h2>Info</h2>
          <p>
            History shop is a professional and specialized shop online shop
            trading with historic weapons and gears as a part of History d.o.o.
            company. We have been in business since 2006. and are proud to point
            out our milestone of more than 100 000 purchases on our website
            since inception. Our mission is to make access of quality historic
            artifacts to military and history enthusiasts are easy as possible.
            Our target customers are people who require a dose of
            professionalism and a quality product.
          </p>
          <h2>Details</h2>
          <p>
            History shop is a professional and specialized shop online shop
            trading with historic weapons and gears as a part of History d.o.o.
            company. We have been in business since 2006. and are proud to point
            out our milestone of more than 100 000 purchases on our website
            since inception. Our mission is to make access of quality historic
            artifacts to military and history enthusiasts are easy as possible.
            Our target customers are people who require a dose of
            professionalism and a quality product. Idea came from two students
            at the time of their master’s degree and grew into a lucrative
            business. Our articles are a result of a very careful filtering
            process in which we test the materials and origin of the product
            before putting it online in order to have the best satisfaction with
            our customers.
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
          <h2>News</h2>
          <p>
            History shop is a professional and specialized shop online shop
            trading with historic weapons and gears as a part of History d.o.o.
            company. We have been in business since 2006. and are proud to point
            out our milestone of more than 100 000 purchases on our website
            since inception. Our mission is to make access of quality historic
            artifacts to military and history enthusiasts are easy as possible.
            Our target customers are people who require a dose of
            professionalism and a quality product.
          </p>
          <h2>Future</h2>
          <p>
            History shop is a professional and specialized shop online shop
            trading with historic weapons and gears as a part of History d.o.o.
            company. We have been in business since 2006. and are proud to point
            out our milestone of more than 100 000 purchases on our website
            since inception. Our mission is to make access of quality historic
            artifacts to military and history enthusiasts are easy as possible.
            Our target customers are people who require a dose of
            professionalism and a quality product. Idea came from two students
            at the time of their master’s degree and grew into a lucrative
            business. Our articles are a result of a very careful filtering
            process in which we test the materials and origin of the product
            before putting it online in order to have the best satisfaction with
            our customers.
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
