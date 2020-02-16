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
    Naslov: "Second Punic War",
    TekstPosta:
      "The Second Punic War, also referred to as The Hannibalic War and by the Romans the War Against Hannibal, was the second of three Punic Wars between Ancient Carthage and the Roman Republic, with the participation of Greek polities and Numidian and Iberian forces on both sides.",
  },
  {
    Naslov: "First Balkan War",
    TekstPosta:
      "The First Balkan War lasted from October 1912 to May 1913 and comprised actions of the Balkan League against the Ottoman Empire. The combined armies of the Balkan states overcame the numerically inferior and strategically disadvantaged Ottoman armies and achieved rapid success.",
  },
  {
    Naslov: "American Revolutionary War ",
    TekstPosta:
      "The American Revolutionary War, also known as the American War of Independence, was fought primarily between the Kingdom of Great Britain and her Thirteen Colonies in America; it resulted in the overthrow of British rule in the colonies and the establishment of the United States of America.",
  },
  {
    Naslov: "Julius Caesar ",
    TekstPosta:
      "Gaius Julius Caesar, better known by his nomen gentilicium and cognomen Julius Caesar, was a Roman dictator, politician, and military general who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire. He was also a historian and wrote Latin prose.",
  },
  {
    Naslov: "Iranian Revolution.",
    TekstPosta:
      "Iranian Revolution, also called Islamic Revolution, Persian Enqelāb-e Eslāmī, popular uprising in Iran in 1978–79 that resulted in the toppling of the monarchy on February 11, 1979, and led to the establishment of an Islamic republic.",
  },
  {
    Naslov: "Soviet–Afghan War",
    TekstPosta:
      "The Soviet–Afghan War lasted over nine years, from December 1979 to February 1989. Insurgent groups known collectively as the mujahideen, as well as smaller Maoist groups, fought a guerrilla war against the Soviet Army and the Democratic Republic of Afghanistan government, mostly in the countryside.",
  },
  {
    Naslov: "Mahatma Gandhi",
    TekstPosta:
      "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist, who employed nonviolent resistance to lead the successful campaign for India's independence from British Rule, and in turn inspire movements for civil rights and freedom across the world.",
  },
  {
    Naslov: "Battle of Midway",
    TekstPosta:
      "The Battle of Midway was a decisive naval battle in the Pacific Theater of World War II that took place on 4–7 June 1942, six months after Japan's attack on Pearl Harbor and one month after the Battle of the Coral Sea.",
  },
  {
    Naslov: "Second Balkan war",
    TekstPosta:
      "The Second Balkan War was a conflict which broke out when Bulgaria, dissatisfied with its share of the spoils of the First Balkan War, attacked its former allies, Serbia and Greece, on 16 / 29 June 1913. Serbian and Greek armies repulsed the Bulgarian offensive and counter-attacked, entering Bulgaria.",
  },
  {
    Naslov: "Pearl Harbor",
    TekstPosta:
      "The attack on Pearl Harbor was a surprise, preemptive military strike by the Imperial Japanese Navy Air Service upon the United States against the naval base at Pearl Harbor in Honolulu, Territory of Hawaii, just before 08:00, on Sunday morning, December 7, 1941.",
  },
  {
    Naslov: "War of Roses",
    TekstPosta:
      "The Wars of the Roses were a series of English civil wars for control of the throne of England fought between supporters of two rival cadet branches of the royal House of Plantagenet: the House of Lancaster, represented by a red rose, and the House of York, represented by a white rose.",
  },
  {
    Naslov: "30 Years War",
    TekstPosta:
      "The Thirty Years' War was a war fought primarily in Central Europe between 1618 and 1648. One of the most destructive conflicts in human history, it resulted in eight million fatalities not only from military engagements but also from violence, famine, and plague.",
  },
  {
    Naslov: "Winston Churchill",
    TekstPosta:
      "Sir Winston Leonard Spencer-Churchill was a British politician, army officer, and writer. He was the Prime Minister of the United Kingdom from 1940 to 1945, when he led Britain to victory in the Second World War, and again from 1951 to 1955.",
  },
  {
    Naslov: "Third Indochina War",
    TekstPosta:
      "The Third Indochina War was a series of interconnected armed conflicts, mainly among the various communist factions over strategic influence in Indochina after United States withdrawal in 1973 and Communist victory in South Vietnam, Laos and Cambodia in 1975.",
  },
  {
    Naslov: "Iranian Revolution",
    TekstPosta:
      "Iranian Revolution, also called Islamic Revolution, Persian Enqelāb-e Eslāmī, popular uprising in Iran in 1978–79 that resulted in the toppling of the monarchy on February 11, 1979, and led to the establishment of an Islamic republic.",
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
    TekstKomentara: " lol, americans beaten by farmers",
    Sifra: "4",
  },
  {
    Komentator: "Corpus998",
    TekstKomentara: " let’s go back and kick their asses!",
    Sifra: "4",
  },

  {
    Komentator: "Lectours",
    TekstKomentara: " Plow the Rome!!",
    Sifra: "5",
  },
  {
    Komentator: "Maestro5547",
    TekstKomentara: " Hannibal take us!",
    Sifra: "5",
  },
  {
    Komentator: "doodly do boo hoo",
    TekstKomentara: " dirty carthaginians",
    Sifra: "5",
  },
  {
    Komentator: "LEP LI SAM",
    TekstKomentara: " war is ours",
    Sifra: "6",
  },
  {
    Komentator: "omot879",
    TekstKomentara: " Ataturk save us!!",
    Sifra: "6",
  },
  {
    Komentator: "American Pie 2005",
    TekstKomentara: " get em british bastards",
    Sifra: "7",
  },
  {
    Komentator: "Borat",
    TekstKomentara: " I really like Potassium",
    Sifra: "7",
  },
  {
    Komentator: "Brutus",
    TekstKomentara: " Watch your back xP",
    Sifra: "8",
  },
  {
    Komentator: "dumbledore",
    TekstKomentara: " Hell yeah he was!!!",
    Sifra: "9",
  },
  {
    Komentator: "An johhny",
    TekstKomentara: " no",
    Sifra: "9",
  },

  {
    Komentator: "brezhnev",
    TekstKomentara: " we could've done better :/",
    Sifra: "10",
  },
  {
    Komentator: "Carter",
    TekstKomentara: " hah! lousy soviets",
    Sifra: "10",
  },
  {
    Komentator: "brezhnev",
    TekstKomentara: " Shut up Carter ",
    Sifra: "10",
  },
  {
    Komentator: "INDIA IN MY HEART",
    TekstKomentara: " MAKE LOVE NOT WAR",
    Sifra: "11",
  },
  {
    Komentator: "Queen of England",
    TekstKomentara: " Ugh this dude",
    Sifra: "11",
  },
  {
    Komentator: "Roosevelt2000",
    TekstKomentara: " beat them :P",
    Sifra: "12",
  },
  {
    Komentator: "Borat",
    TekstKomentara: " Selling Potassium",
    Sifra: "12",
  },
  {
    Komentator: "Samurai Hirohito ",
    TekstKomentara: " Banzaiiii",
    Sifra: "12",
  },
  {
    Komentator: "kenobi",
    TekstKomentara: " give me some of that europe",
    Sifra: "13",
  },
  {
    Komentator: "Roosevelt2000",
    TekstKomentara: " this why we must beat the japs :'(",
    Sifra: "14",
  },
  {
    Komentator: "Zero",
    TekstKomentara: " incoming!",
    Sifra: "14",
  },

  {
    Komentator: "MikryMouse",
    TekstKomentara: " I love roses!",
    Sifra: "15",
  },
  {
    Komentator: "Harkom",
    TekstKomentara: " I love eating ice :3",
    Sifra: "16",
  },
  {
    Komentator: "Ferdinand",
    TekstKomentara: " And i love my pope :)",
    Sifra: "16",
  },
  {
    Komentator: "Englishman",
    TekstKomentara: " best prime minister ever",
    Sifra: "17",
  },
  {
    Komentator: "Irishman",
    TekstKomentara: " meh",
    Sifra: "17",
  },
  {
    Komentator: "kangaroo",
    TekstKomentara: " Churchill is good man",
    Sifra: "17",
  },
  {
    Komentator: "Donky kong",
    TekstKomentara: " To victory",
    Sifra: "18",
  },
  {
    Komentator: "Palantir789",
    TekstKomentara: " Can't see me",
    Sifra: "19",
  },
  {
    Komentator: " OG Pahlavi",
    TekstKomentara: " Give me back my throne!",
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
