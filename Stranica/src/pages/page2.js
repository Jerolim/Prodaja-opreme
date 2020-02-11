import React from "react"
import { Link } from "gatsby" //služi za link na drugu stranicu
import Layout from "../components/layout"
import GlavniDio from "../components/header"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../components/footer"
import styled from "styled-components"
const Uredis = styled.div`
  margin-top: 100px;
`
console.log("hello p")
const Page2 = () => {
  return (
    <Uredis>
      <GlavniDio></GlavniDio>

      <Footer></Footer>
    </Uredis>
  )
}
export default Page2
