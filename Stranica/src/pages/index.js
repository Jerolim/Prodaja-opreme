import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"
/*const menuItems = [
  {
    text:'page2',
    path:'/page2'
  },
  { 
    text:'example1',
    path:'/examples/example1'
  }
];
*/


const Index = () => {// dajemo mu data to je sve podatke iz graphql
  // console.log(data);
  //const {menuItems}=data.site.siteMetadata;
  return(
  <Layout>
    <h1>Naslovna</h1>
    <h2>Nesto</h2>
  
  </Layout>
  
  )
}

export default Index// bitno za eksportat podatke
/*
export const query = graphql`
  {
    site {
      siteMetadata {
        menuItems {
          path
          text
        }
      }
    }
  }
`
*/