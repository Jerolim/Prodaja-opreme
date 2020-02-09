import React from "react"
import { Link } from "gatsby"
import { Card, Button, Container } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
const Predmeti = [
  {
    Naslov: "Slika1",
    Opis: "Veselimo se ovome opisu",
  },
  {
    Naslov: "Slika2",
    Opis: "Jeli radi slika ova sada",
  },
  {
    Naslov: "Slika3",
    Opis: "Prodajem opremu svima jeftino",
  },
  {
    Naslov: "Slika4",
    Opis: "/page2",
  },
  {
    Naslov: "Slika5",
    Opis: "ne ide",
  },
  {
    Naslov: "Slika6",
    Opis: "deri mali",
  },
]

const Uredi234 = styled.div`
  .card {
    margin-bottom: 50px;
  }
  .row {
    margin-left: 15px;
    margin-right: 15px;
  }
`
const Navigation = ({ menuItems }) => {
  console.log(menuItems)
  console.log(Predmeti)
  return (
    <Uredi234>
      <div className="row">
        {menuItems.slikice.edges.map(({ node }, i) => {
          console.log(node.childImageSharp.fluid)
          console.log(i)

          return (
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              key={node.childImageSharp.fluid.src}
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
                  fluid={node.childImageSharp.fluid}
                />

                <Card.Body>
                  <Card.Title>{Predmeti[i].Naslov}</Card.Title>
                  <Card.Text>{Predmeti[i].Opis}</Card.Text>
                  <Button variant="primary" href="/page2">
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
