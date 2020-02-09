import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./navigation"

const Layout = ({ children }) => {
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
      <Navigation menuItems={data} />
      {children}
    </div>
  )
}
export default Layout
