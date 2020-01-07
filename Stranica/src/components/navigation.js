import React from "react"
import { Link } from "gatsby"

const Navigation = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map(({ path, text }) => {
        //map uzima sve elemente i primjenjuje pravila  menuItem je samo jedan
        return (
          //ako se pristupa varijabli stavljaj {}
          <li key={path}>
            <Link to={path}>{text}</Link>
          </li>
        )
      })}
    </ul>
  )
}
export default Navigation
