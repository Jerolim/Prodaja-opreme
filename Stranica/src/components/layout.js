import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./navigation"

const Layout = ({ usporedba }) => {
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
    <div>
      <Navigation menuItems={data} podaci={usporedba} />
    </div>
  )
}
export default Layout
