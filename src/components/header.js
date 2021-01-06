import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div>
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="notes">Notes</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
