import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"
import GlavniDio from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
const Uredi3 = styled.div`
  .hep {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
  }
`
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

const Index = () => {
  // dajemo mu data to je sve podatke iz graphql
  // console.log(data);
  //const {menuItems}=data.site.siteMetadata;

  return (
    <Uredi3>
      <div className="hep">
        <GlavniDio></GlavniDio>
        <Layout></Layout>
      </div>
    </Uredi3>
  )
}

export default Index // bitno za eksportat podatke
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
