import React from "react"
import { Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import Example3 from "./example3"
const example1 = () => {
  return(
    <div>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <>
      <Example3>
      </Example3>
      </>
      
      </div>
  )
  
}

export default example1