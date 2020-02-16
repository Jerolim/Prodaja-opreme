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
    font-weight: bold;
    color: blue;
  }
  .blogKomentar {
    margin-bottom: 0;
  }
`
const Postovi = [
  {
    Naslov: "Fall of Rome",
    TekstPosta:
      "The invading army reached the outskirts of Rome, which had been left totally undefended. In 410 C.E., the Visigoths, led by Alaric, breached the walls of Rome and sacked the capital of the Roman Empire. The Visigoths looted, burned, and pillaged their way through the city, leaving a wake of destruction wherever they went. The plundering continued for three days. For the first time in nearly a millennium, the city of Rome was in the hands of someone other than the Romans. This was the first time that the city of Rome was sacked, but by no means the last.",
  },
  {
    Naslov: "Rise of British Empire",
    TekstPosta:
      "The British began to establish overseas colonies in the 16th century. By 1783, Britain had a large empire with colonies in America and the West Indies. This 'first British Empire' came to an end after the American Revolution. However, in the 19th century, the British built a second worldwide empire, based on British sea-power, made up of India and huge conquests in Africa.",
  },
  {
    Naslov: "Tank tactics in Soviet Union",
    TekstPosta:
      "At the start of the Second World War much of the Red Army, including its armoured forces, was in transition and recovering from the 1937 repression of the officer corps. The Red Army ignored the lessons from Nomonhan, which had been successfully conducted by General Zhukov, and relied instead on lessons from politically selected officers who were veterans of the Spanish Civil War.",
  },
  {
    Naslov: "Future of warfare",
    TekstPosta:
      "There are robots on the market that can carry and fire weapons like shotguns, pepper spray, grenade launchers, or even Hellfire missiles. The MULE ARV-A-L robot can fire a line-of-sight gun and anti-tank weaponry. Remote controlled TALON robots can carry everything from an M240 machine gun to a .50 caliber rifle to grenades and rocket launchers. The South Korean patrol robot can either fire non-lethal rubber bullets at intruders or carry a K-3 machine gun -- a light machine gun similar to the M249. The U.S. Marine Corps' Gladiator Tactical Unmanned Ground Vehicle (TUGV) will be able to carry an arsenal of lethal and non-lethal weapons.",
  },
  {
    Naslov: "Vietnam war",
    TekstPosta:
      "The Vietnam War was a war fought between 1964 and 1975 on the ground in South Vietnam and bordering areas of Cambodia and Laos (see also, Secret War), and in bombing runs (Rolling Thunder) over North Vietnam. Fighting on one side was a coalition of forces including the United States (USA), the Republic of Vietnam (South Vietnam), Australia, and South Korea. Fighting on the other side was a coalition of forces including the Democratic Republic of Vietnam (North Vietnam) and the National Liberation Front (NLF, Viet Cong), a communist-led South Vietnamese guerrilla movement. The USSR provided military aid to the North Vietnamese and to the NLF, but was not one of the military combatants.",
  },
  {
    Naslov: "Fall of Rome",
    TekstPosta:
      "The invading army reached the outskirts of Rome, which had been left totally undefended. In 410 C.E., the Visigoths, led by Alaric, breached the walls of Rome and sacked the capital of the Roman Empire. The Visigoths looted, burned, and pillaged their way through the city, leaving a wake of destruction wherever they went. The plundering continued for three days. For the first time in nearly a millennium, the city of Rome was in the hands of someone other than the Romans. This was the first time that the city of Rome was sacked, but by no means the last.",
  },
  {
    Naslov: "Rise of British Empire",
    TekstPosta:
      "The British began to establish overseas colonies in the 16th century. By 1783, Britain had a large empire with colonies in America and the West Indies. This 'first British Empire' came to an end after the American Revolution. However, in the 19th century, the British built a second worldwide empire, based on British sea-power, made up of India and huge conquests in Africa.",
  },
  {
    Naslov: "Tank tactics in Soviet Union",
    TekstPosta:
      "At the start of the Second World War much of the Red Army, including its armoured forces, was in transition and recovering from the 1937 repression of the officer corps. The Red Army ignored the lessons from Nomonhan, which had been successfully conducted by General Zhukov, and relied instead on lessons from politically selected officers who were veterans of the Spanish Civil War.",
  },
  {
    Naslov: "Future of warfare",
    TekstPosta:
      "There are robots on the market that can carry and fire weapons like shotguns, pepper spray, grenade launchers, or even Hellfire missiles. The MULE ARV-A-L robot can fire a line-of-sight gun and anti-tank weaponry. Remote controlled TALON robots can carry everything from an M240 machine gun to a .50 caliber rifle to grenades and rocket launchers. The South Korean patrol robot can either fire non-lethal rubber bullets at intruders or carry a K-3 machine gun -- a light machine gun similar to the M249. The U.S. Marine Corps' Gladiator Tactical Unmanned Ground Vehicle (TUGV) will be able to carry an arsenal of lethal and non-lethal weapons.",
  },
  {
    Naslov: "Vietnam war",
    TekstPosta:
      "The Vietnam War was a war fought between 1964 and 1975 on the ground in South Vietnam and bordering areas of Cambodia and Laos (see also, Secret War), and in bombing runs (Rolling Thunder) over North Vietnam. Fighting on one side was a coalition of forces including the United States (USA), the Republic of Vietnam (South Vietnam), Australia, and South Korea. Fighting on the other side was a coalition of forces including the Democratic Republic of Vietnam (North Vietnam) and the National Liberation Front (NLF, Viet Cong), a communist-led South Vietnamese guerrilla movement. The USSR provided military aid to the North Vietnamese and to the NLF, but was not one of the military combatants.",
  },
  {
    Naslov: "Fall of Rome",
    TekstPosta:
      "The invading army reached the outskirts of Rome, which had been left totally undefended. In 410 C.E., the Visigoths, led by Alaric, breached the walls of Rome and sacked the capital of the Roman Empire. The Visigoths looted, burned, and pillaged their way through the city, leaving a wake of destruction wherever they went. The plundering continued for three days. For the first time in nearly a millennium, the city of Rome was in the hands of someone other than the Romans. This was the first time that the city of Rome was sacked, but by no means the last.",
  },
  {
    Naslov: "Rise of British Empire",
    TekstPosta:
      "The British began to establish overseas colonies in the 16th century. By 1783, Britain had a large empire with colonies in America and the West Indies. This 'first British Empire' came to an end after the American Revolution. However, in the 19th century, the British built a second worldwide empire, based on British sea-power, made up of India and huge conquests in Africa.",
  },
  {
    Naslov: "Tank tactics in Soviet Union",
    TekstPosta:
      "At the start of the Second World War much of the Red Army, including its armoured forces, was in transition and recovering from the 1937 repression of the officer corps. The Red Army ignored the lessons from Nomonhan, which had been successfully conducted by General Zhukov, and relied instead on lessons from politically selected officers who were veterans of the Spanish Civil War.",
  },
  {
    Naslov: "Future of warfare",
    TekstPosta:
      "There are robots on the market that can carry and fire weapons like shotguns, pepper spray, grenade launchers, or even Hellfire missiles. The MULE ARV-A-L robot can fire a line-of-sight gun and anti-tank weaponry. Remote controlled TALON robots can carry everything from an M240 machine gun to a .50 caliber rifle to grenades and rocket launchers. The South Korean patrol robot can either fire non-lethal rubber bullets at intruders or carry a K-3 machine gun -- a light machine gun similar to the M249. The U.S. Marine Corps' Gladiator Tactical Unmanned Ground Vehicle (TUGV) will be able to carry an arsenal of lethal and non-lethal weapons.",
  },
  {
    Naslov: "Vietnam war",
    TekstPosta:
      "The Vietnam War was a war fought between 1964 and 1975 on the ground in South Vietnam and bordering areas of Cambodia and Laos (see also, Secret War), and in bombing runs (Rolling Thunder) over North Vietnam. Fighting on one side was a coalition of forces including the United States (USA), the Republic of Vietnam (South Vietnam), Australia, and South Korea. Fighting on the other side was a coalition of forces including the Democratic Republic of Vietnam (North Vietnam) and the National Liberation Front (NLF, Viet Cong), a communist-led South Vietnamese guerrilla movement. The USSR provided military aid to the North Vietnamese and to the NLF, but was not one of the military combatants.",
  },
  {
    Naslov: "Fall of Rome",
    TekstPosta:
      "The invading army reached the outskirts of Rome, which had been left totally undefended. In 410 C.E., the Visigoths, led by Alaric, breached the walls of Rome and sacked the capital of the Roman Empire. The Visigoths looted, burned, and pillaged their way through the city, leaving a wake of destruction wherever they went. The plundering continued for three days. For the first time in nearly a millennium, the city of Rome was in the hands of someone other than the Romans. This was the first time that the city of Rome was sacked, but by no means the last.",
  },
  {
    Naslov: "Rise of British Empire",
    TekstPosta:
      "The British began to establish overseas colonies in the 16th century. By 1783, Britain had a large empire with colonies in America and the West Indies. This 'first British Empire' came to an end after the American Revolution. However, in the 19th century, the British built a second worldwide empire, based on British sea-power, made up of India and huge conquests in Africa.",
  },
  {
    Naslov: "Tank tactics in Soviet Union",
    TekstPosta:
      "At the start of the Second World War much of the Red Army, including its armoured forces, was in transition and recovering from the 1937 repression of the officer corps. The Red Army ignored the lessons from Nomonhan, which had been successfully conducted by General Zhukov, and relied instead on lessons from politically selected officers who were veterans of the Spanish Civil War.",
  },
  {
    Naslov: "Future of warfare",
    TekstPosta:
      "There are robots on the market that can carry and fire weapons like shotguns, pepper spray, grenade launchers, or even Hellfire missiles. The MULE ARV-A-L robot can fire a line-of-sight gun and anti-tank weaponry. Remote controlled TALON robots can carry everything from an M240 machine gun to a .50 caliber rifle to grenades and rocket launchers. The South Korean patrol robot can either fire non-lethal rubber bullets at intruders or carry a K-3 machine gun -- a light machine gun similar to the M249. The U.S. Marine Corps' Gladiator Tactical Unmanned Ground Vehicle (TUGV) will be able to carry an arsenal of lethal and non-lethal weapons.",
  },
  {
    Naslov: "Vietnam war",
    TekstPosta:
      "The Vietnam War was a war fought between 1964 and 1975 on the ground in South Vietnam and bordering areas of Cambodia and Laos (see also, Secret War), and in bombing runs (Rolling Thunder) over North Vietnam. Fighting on one side was a coalition of forces including the United States (USA), the Republic of Vietnam (South Vietnam), Australia, and South Korea. Fighting on the other side was a coalition of forces including the Democratic Republic of Vietnam (North Vietnam) and the National Liberation Front (NLF, Viet Cong), a communist-led South Vietnamese guerrilla movement. The USSR provided military aid to the North Vietnamese and to the NLF, but was not one of the military combatants.",
  },
]
const KomentariPostova = [
  {
    Komentator: "Ceasar2003",
    TekstKomentara: " Visigoths are bastards!!!",
    Sifra: "0",
  },
  {
    Komentator: "MC Aurelius",
    TekstKomentara: " Make Rome great again",
    Sifra: "0",
  },
  {
    Komentator: "Hannibalius",
    TekstKomentara: " Plow it like they did to Carthage",
    Sifra: "0",
  },
  {
    Komentator: "Terminator_xx",
    TekstKomentara: " Dirty imerialists!",
    Sifra: "1",
  },
  {
    Komentator: "Queen of England",
    TekstKomentara: " ALL EMBRACE HER MAJESTY",
    Sifra: "1",
  },
  {
    Komentator: "Brezhnev",
    TekstKomentara: " we da best ever hhh",
    Sifra: "2",
  },
  {
    Komentator: "Borat",
    TekstKomentara: " Potassium",
    Sifra: "2",
  },
  {
    Komentator: "Noname",
    TekstKomentara: " pansies!",
    Sifra: "2",
  },
  {
    Komentator: "Freedom_2000_",
    TekstKomentara: " Merica yeeeah",
    Sifra: "3",
  },
  {
    Komentator: "Yesname",
    TekstKomentara: " lol, amricans beaten by farmers",
    Sifra: "4",
  },
  {
    Komentator: "Corpus998",
    TekstKomentara: " let’s go back and kick their asses!",
    Sifra: "4",
  },

  {
    Komentator: "Ceasar2003",
    TekstKomentara: " Visigoths are bastards!!!",
    Sifra: "5",
  },
  {
    Komentator: "MC Aurelius",
    TekstKomentara: " Make Rome great again",
    Sifra: "5",
  },
  {
    Komentator: "Hannibalius",
    TekstKomentara: " Plow it like they did to Carthage",
    Sifra: "5",
  },
  {
    Komentator: "Terminator_xx",
    TekstKomentara: " Dirty imerialists!",
    Sifra: "6",
  },
  {
    Komentator: "Queen of England",
    TekstKomentara: " ALL EMBRACE HER MAJESTY",
    Sifra: "6",
  },
  {
    Komentator: "Brezhnev",
    TekstKomentara: " we da best ever hhh",
    Sifra: "7",
  },
  {
    Komentator: "Borat",
    TekstKomentara: " Potassium",
    Sifra: "7",
  },
  {
    Komentator: "Noname",
    TekstKomentara: " pansies!",
    Sifra: "7",
  },
  {
    Komentator: "Freedom_2000_",
    TekstKomentara: " Merica yeeeah",
    Sifra: "8",
  },
  {
    Komentator: "Yesname",
    TekstKomentara: " lol, amricans beaten by farmers",
    Sifra: "9",
  },
  {
    Komentator: "Corpus998",
    TekstKomentara: " let’s go back and kick their asses!",
    Sifra: "9",
  },

  {
    Komentator: "Ceasar2003",
    TekstKomentara: " Visigoths are bastards!!!",
    Sifra: "10",
  },
  {
    Komentator: "MC Aurelius",
    TekstKomentara: " Make Rome great again",
    Sifra: "10",
  },
  {
    Komentator: "Hannibalius",
    TekstKomentara: " Plow it like they did to Carthage",
    Sifra: "10",
  },
  {
    Komentator: "Terminator_xx",
    TekstKomentara: " Dirty imerialists!",
    Sifra: "11",
  },
  {
    Komentator: "Queen of England",
    TekstKomentara: " ALL EMBRACE HER MAJESTY",
    Sifra: "11",
  },
  {
    Komentator: "Brezhnev",
    TekstKomentara: " we da best ever hhh",
    Sifra: "12",
  },
  {
    Komentator: "Borat",
    TekstKomentara: " Potassium",
    Sifra: "12",
  },
  {
    Komentator: "Noname",
    TekstKomentara: " pansies!",
    Sifra: "12",
  },
  {
    Komentator: "Freedom_2000_",
    TekstKomentara: " Merica yeeeah",
    Sifra: "13",
  },
  {
    Komentator: "Yesname",
    TekstKomentara: " lol, amricans beaten by farmers",
    Sifra: "14",
  },
  {
    Komentator: "Corpus998",
    TekstKomentara: " let’s go back and kick their asses!",
    Sifra: "14",
  },

  {
    Komentator: "Ceasar2003",
    TekstKomentara: " Visigoths are bastards!!!",
    Sifra: "15",
  },
  {
    Komentator: "MC Aurelius",
    TekstKomentara: " Make Rome great again",
    Sifra: "15",
  },
  {
    Komentator: "Hannibalius",
    TekstKomentara: " Plow it like they did to Carthage",
    Sifra: "15",
  },
  {
    Komentator: "Terminator_xx",
    TekstKomentara: " Dirty imerialists!",
    Sifra: "16",
  },
  {
    Komentator: "Queen of England",
    TekstKomentara: " ALL EMBRACE HER MAJESTY",
    Sifra: "16",
  },
  {
    Komentator: "Brezhnev",
    TekstKomentara: " we da best ever hhh",
    Sifra: "17",
  },
  {
    Komentator: "Borat",
    TekstKomentara: " Potassium",
    Sifra: "17",
  },
  {
    Komentator: "Noname",
    TekstKomentara: " pansies!",
    Sifra: "17",
  },
  {
    Komentator: "Freedom_2000_",
    TekstKomentara: " Merica yeeeah",
    Sifra: "18",
  },
  {
    Komentator: "Yesname",
    TekstKomentara: " lol, amricans beaten by farmers",
    Sifra: "19",
  },
  {
    Komentator: "Corpus998",
    TekstKomentara: " let’s go back and kick their asses!",
    Sifra: "19",
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
                    <hr></hr>
                    {KomentariPostova.map(broj2 => {
                      if (broj2.Sifra == i.toString())
                        return (
                          <p
                            key={broj2.TekstKomentara}
                            className="blogKomentar"
                          >
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
                  <CustomToggle eventKey={broj.Naslov}>Expand</CustomToggle>
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
