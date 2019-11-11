import React from "react"
import { Link } from "gatsby"//služi za link na drugu stranicu
import Layout from "../components/layout"
console.log("hello p")
const Page2 = () => (
  <Layout>
    <h1>Stranica2</h1>
    <Link to="/">Na glavnu stranicu</Link>
    
  </Layout>
)

export default Page2