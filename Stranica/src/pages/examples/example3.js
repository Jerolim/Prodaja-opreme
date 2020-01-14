import React from "react"
import { Card, Button } from "react-bootstrap"
import example3style from "./example3.module.css"
import { graphql } from "gatsby"
console.log("hello p")
console.log(example3style)

const Example3 = ({ data }) => {
  //console.log(data.site.siteMetadata.objave)
  return (
    <>
      <div className={example3style.izgled}>
        <p>Ponuda dana</p>
      </div>
      <div className={example3style.tijelo}>
        {data.cardImages.map(slika => {
          return (
            <Card key={slika} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={slika} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>hy</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </>
  )
}
export default Example3
export const query = graphql`
  {
    cardImages: allFile(filter: { relativePath: { regex: "/card-image/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`
