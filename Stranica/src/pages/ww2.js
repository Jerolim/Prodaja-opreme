import React from "react"
// import { graphql } from "gatsby"
import Navigation from "../components/navigation"
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

const Ww2 = () => {
  // dajemo mu data to je sve podatke iz graphql
  // console.log(data);
  //const {menuItems}=data.site.siteMetadata;

  return (
    <Uredi3>
      <GlavniDio></GlavniDio>
      <div className="row">
        <div className="col-lg-12" align="center">
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
              <h1>World War II</h1>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <Navigation></Navigation>
      </div>

      <Footer></Footer>
    </Uredi3>
  )
}

export default Ww2 // bitno za eksportat podatke
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
