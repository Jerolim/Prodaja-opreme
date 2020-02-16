import React, { useState } from "react"

import { Card, Button, Modal } from "react-bootstrap"
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
const Navigationvietnam = ({ Predmeti }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const data = useStaticQuery(graphql`
    {
      slikice: allFile(
        filter: { absolutePath: { regex: "/src/images/slikevietnam//" } }
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
        {Predmeti.map(broj => {
          const filtarslika = data.slikice.edges.filter(slika => {
            if (slika.node.childImageSharp.fluid.src.includes(broj.code)) {
              return slika
            }
          })

          return (
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              key={filtarslika[0].node.childImageSharp.fluid.src}
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
                  fluid={filtarslika[0].node.childImageSharp.fluid}
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
export default Navigationvietnam
//<Card.Img variant="top" fluid={node.childImageSharp.fluid} />
