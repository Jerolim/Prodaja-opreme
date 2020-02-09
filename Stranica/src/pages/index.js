import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"
import GlavniDio from "../components/header"
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import { Container, Card } from "react-bootstrap"
const Uredi3 = styled.div`
  margin-top: 100px;
  .row {
    margin-left: 15px;
    margin-right: 15px;
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
      <GlavniDio></GlavniDio>
      <div className="row">
        <Card
          style={{
            border: "0px",
          }}
        >
          <Card.Body
            style={{
              paddingBottom: "0.25em",
            }}
          >
            <h1>Weekly sale</h1>
          </Card.Body>
        </Card>
      </div>
      <Layout></Layout>
      <Footer></Footer>
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
