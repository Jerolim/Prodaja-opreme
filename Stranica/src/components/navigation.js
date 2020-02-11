import React from "react"
import { Link } from "gatsby"
import { Card, Button, Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Uredi234 = styled.div`
  .card {
    margin-bottom: 50px;
  }
  .row {
    margin-left: 15px;
    margin-right: 15px;
  }
`
const Navigation = ({ Predmeti }) => {
  console.log(Predmeti)
  console.log("hi2")
  const data = useStaticQuery(graphql`
    {
      slikice: allFile(
        filter: { absolutePath: { regex: "/src/images/slikenaslovne//" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 250, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Uredi234>
      <div className="row">
        {Predmeti.map((broj, i) => {
          return (
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              key={data.slikice.edges[i].node.childImageSharp.fluid.src}
              align="center"
            >
              <Card
                style={{
                  marginRight: "0px",
                  maxWidth: "18rem",
                }}
              >
                <Img
                  style={{ maxHeight: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                  fluid={data.slikice.edges[i].node.childImageSharp.fluid}
                />

                <Card.Body>
                  <Card.Title>{broj.Naslov}</Card.Title>
                  <Card.Text>{broj.Opis}</Card.Text>
                  <Button variant="primary" href="/proizvod1">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </Uredi234>
  )
}
export default Navigation
//<Card.Img variant="top" fluid={node.childImageSharp.fluid} />
