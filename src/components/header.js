import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <div>
    <div className="pre-header"></div>
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="/svg/logo-rgg.svg" alt="logo RGGNDR" />
        </Link>
      </div>

      <div className="birthdate">
        <img src="/svg/birthdate.svg" alt="Birthdate" />
        <div className="s-text">
          Thanks mom for bringing me<br />
          to this wonderful world.
        </div>
      </div>
    </div>
  </div>
)

export default Header
