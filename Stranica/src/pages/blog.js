import React from "react"
import GlavniDio from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../components/footer"
import styled from "styled-components"
import BlogoviPost from "../components/blogoviPost"
import { Card } from "react-bootstrap"
const Uredis = styled.div`
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 56px;
  .row {
    margin-left: 15px;
    margin-right: 15px;
  }
`

const Page2 = () => {
  return (
    <Uredis>
      <GlavniDio></GlavniDio>
      <div className="row">
        <div className="col-lg-12" align="center">
          <Card
            style={{
              border: "0px",
            }}
          >
            <Card.Body>
              <h1>Blog</h1>
            </Card.Body>
          </Card>
        </div>
      </div>
      <BlogoviPost></BlogoviPost>
      <Footer></Footer>
    </Uredis>
  )
}
export default Page2
