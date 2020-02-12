import React from "react"
import GlavniDio from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../components/footer"
import styled from "styled-components"
import BlogoviPost from "../components/blogoviPost"
import { Card } from "react-bootstrap"
const Uredis = styled.div`
  margin-top: 70px;
`

const Page2 = () => {
  return (
    <Uredis>
      <GlavniDio></GlavniDio>
      <BlogoviPost></BlogoviPost>
      <Footer></Footer>
    </Uredis>
  )
}
export default Page2
