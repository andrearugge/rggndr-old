import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div>
    <div className="header">
      <ul>
        <li>
          <Link to="/" activeClassName="active">Home</Link>
        </li>
        <li>
          <Link to="/" activeClassName="active">About</Link>
          {/* <Link to="/about" activeClassName="active">About</Link> */}
        </li>
        <li>
          <Link to="/" activeClassName="active">Notes</Link>
          {/* <Link to="/notes" activeClassName="active">Notes</Link> */}
        </li>
      </ul>
    </div>
  </div>
)

export default Header
