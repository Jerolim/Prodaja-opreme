import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"
import GlavniDio from "../components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
function handleClick() {
  console.log('deri')
  return(
  <h1>
    zmija
  </h1>
  )
}
const Index = () => {// dajemo mu data to je sve podatke iz graphql
  // console.log(data);
  //const {menuItems}=data.site.siteMetadata;
 
 
  
  return(
    <div>
    <div><Button variant="primary" onClick={()=>handleClick()}>Ulazna</Button></div>
    <GlavniDio>

    </GlavniDio>
    <Layout>

    </Layout>
    </div>
    
    
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