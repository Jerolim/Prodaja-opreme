import React from "react"
import styled from "styled-components"
import { Card, Accordion, useAccordionToggle, Container } from "react-bootstrap"
const Urediblogs = styled.div`
  .card {
    margin-bottom: 50px;
  }
  .row {
    margin-left: 15px;
    margin-right: 15px;
  }
  .accordion>.card: not(: last-of-type) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .korisnikUredi {
    color: blue;
  }
`
const Postovi = [
  {
    Naslov: "Fall of Rome",
    TekstPosta:
      "Danas je lijep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu",
  },
  {
    Naslov: "Rise of British Empire",
    TekstPosta:
      "Danas je lep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu",
  },
  {
    Naslov: "Tank tactics",
    TekstPosta:
      "Danas je lip dan i uzivamo u ovome gradu D agagagagagagagaanas je lijep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu",
  },
]
const KomentariPostova = [
  {
    Komentator: "Matematic",
    TekstKomentara: "Prvipost koment",
    Sifra: "0",
  },
  {
    Komentator: "RodeRodic",
    TekstKomentara: "Drugi post koment",
    Sifra: "1",
  },
  {
    Komentator: "Mafafac",
    TekstKomentara: "Treci post koment",
    Sifra: "2",
  },
  {
    Komentator: "Mwewwac",
    TekstKomentara: "prvi psot koment 2 dio",
    Sifra: "0",
  },
  {
    Komentator: "Mfeawfa",
    TekstKomentara: "drugi post koment 2 dio",
    Sifra: "1",
  },
  {
    Komentator: "Mataseic",
    TekstKomentara: "treci post koment 2 dio",
    Sifra: "2",
  },
  {
    Komentator: "Matemffffic",
    TekstKomentara: "Prvi post koment 3 dio",
    Sifra: "0",
  },
]
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  )

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  )
}
function BlogoviPost() {
  return (
    <Urediblogs>
      <Container>
        <Accordion defaultActiveKey="">
          {Postovi.map((broj, i) => {
            return (
              <Card key={broj.Naslov}>
                <Card.Header align="center">
                  <h3>{broj.Naslov}</h3>
                </Card.Header>
                <Accordion.Collapse eventKey={broj.Naslov}>
                  <Card.Body>
                    <p>{broj.TekstPosta}</p>
                    {KomentariPostova.map(broj2 => {
                      if (broj2.Sifra.includes(i.toString()))
                        return (
                          <p key={broj2.TekstKomentara}>
                            <label className="korisnikUredi">
                              {broj2.Komentator}:
                            </label>
                            {broj2.TekstKomentara}
                          </p>
                        )
                    })}
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Body align="center">
                  <CustomToggle eventKey={broj.Naslov}>Click me!</CustomToggle>
                </Card.Body>
              </Card>
            )
          })}
        </Accordion>
      </Container>
    </Urediblogs>
  )
}
export default BlogoviPost
{
  /* <Container>
        <div className="row">
          {Postovi.map((broj, i) => {
            return (
              <div className="col-lg-12" key={broj.Naslov}>
                <Card>
                  <Card.Body>
                    <h3>{broj.Naslov}</h3>
                    <p>{broj.TekstPosta}</p>
                    {KomentariPostova.map(broj2 => {
                      if (broj2.Sifra.includes(i.toString()))
                        return (
                          <p key={broj2.TekstKomentara}>
                            {broj2.Komentator} radi {broj2.TekstKomentara}
                          </p>
                        )
                    })}
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </Container> */
}
