import React from "react"
import { Card, Button, Container } from "react-bootstrap"
import example3style from "./example3.module.css"
import { graphql } from "gatsby"
import styled from "styled-components"
const Uredi2 = styled.div`
  .card {
    display: flex;
    flex-direction: row;
  }
`
console.log("hello p")
console.log(example3style)

const Example3 = ({ data }) => {
  console.log(data.site.siteMetadata.objave)
  return (
    <>
      <div className={example3style.izgled}>
        <p>Ponuda dana</p>
      </div>
      <div className="container">
        <div className="row">
          {data.site.siteMetadata.objave.map(({ slika, tekst }) => {
            return (
              <div className="col-md-4 col-sm-6" key={slika}>
                <Card style={{ marginRight: "150px", width: "18rem" }}>
                  <Card.Img variant="top" src={slika} />
                  <Card.Body>
                    <Card.Title>{tekst} da</Card.Title>
                    <Card.Text>hy</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Example3
export const query = graphql`
  {
    site {
      siteMetadata {
        objave {
          slika
          tekst
        }
      }
    }
  }
`
/*
 <div className={example3style.tijelo}>
 */
