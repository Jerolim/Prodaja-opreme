import React from "react"
import { Card, Accordion, useAccordionToggle } from "react-bootstrap"
import GlavniDio from "../../components/header"
import styled from "styled-components"
const Urediex = styled.div`
  margin-top: 70px;
`
const Postovi = [
  {
    Naslov: "Post1",
    TekstPosta:
      "Danas je lijep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu",
  },
  {
    Naslov: "Post2",
    TekstPosta:
      "Danas je lep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu",
  },
  {
    Naslov: "Post3",
    TekstPosta:
      "Danas je lip dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu Danas je lijep dan i uzivamo u ovome gradu",
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

function Example1() {
  return (
    <Accordion defaultActiveKey="">
      {Postovi.map((broj, i) => {
        return (
          <Card>
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
                        {broj2.Komentator} radi {broj2.TekstKomentara}
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
  )
}

export default Example1
