import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Card, Button, Container, Modal } from "react-bootstrap"
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
const Navigationww2 = ({ Predmeti }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  console.log(Predmeti)
  console.log("hi2")
  const data = useStaticQuery(graphql`
    {
      slikice: allFile(
        filter: { absolutePath: { regex: "/src/images/slikeww2//" } }
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
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Buy confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to continue with purchase</Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: "white",
              color: "black",
              borderColor: "white",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{
              fontSize: "2rem",
            }}
          >
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
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
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    style={{
                      width: "100%",
                    }}
                  >
                    Buy for {broj.Cijena}
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
export default Navigationww2
//<Card.Img variant="top" fluid={node.childImageSharp.fluid} />
