import React from "react"
import { Card,Button} from 'react-bootstrap';
import example3style from "./example3.module.css"
console.log("hello p")
console.log(example3style)
const Example3 = () => {
    return(
        <>
        
        <div className={example3style.izgled}>
            <p>Ponuda dana</p>
        </div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/preuzmi.jpg" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>  
        </>
    )

   
   
}

export default Example3