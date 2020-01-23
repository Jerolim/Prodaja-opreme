import React from "react"
import { Link } from "gatsby"

const Navigation = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map(({ path, text, slika }) => {
        //map uzima sve elemente i primjenjuje pravila  menuItem je samo jedan
        return (
          //ako se pristupa varijabli stavljaj {}

          <li key={path}>
            <img src={slika} alt="Logo" />
            <Link to={path}>{text}</Link>
          </li>
        )
      })}
    </ul>
  )
}
export default Navigation
