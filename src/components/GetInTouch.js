import { Link } from "gatsby"
import React from "react"
import StickerLaugh from "../components/img/StickerLaugh"

export default () => (
  <div className="section section-container s-getInTouch">
    <div className="row headline c-mb-6">
      <div className="col">
        <div className="s-text">
          <span>Current position &nbsp;</span><span>° 45.2211264,10.4099317</span>
        </div>
      </div>
      <div className="col">
        <div className="s-text">
          <span>Listening now &nbsp;</span><span>The xx</span>
        </div>
      </div>
    </div>

    <div className="mega-title">
      <span>Wanna</span><br />
      <span>Get in</span><br />
      <span className="p-rel">
        Touch?
        <StickerLaugh />
      </span>
    </div>

    <div className="row c-mt-6">
      <div className="col-6 offset-lg-3 text-center contact-info">
        <div className="info-item">
          <div>Phone</div>
          <div>Email address</div>
          <div>Social</div>
        </div>
        <div className="info-item">
          <div><a href="mailto:hello@rggndr.it">hello@rggndr.it</a></div>
          <div>+39 393 8576 657</div>
          <div>
            <Link to="https://www.instagram.com/andrearugge/" target="_blank">Instagram</Link> – <Link to="https://dribbble.com/andrearugge" target="_blank">Dribbble</Link> – <Link to="https://www.linkedin.com/in/andrerugge/" target="_blank">LinkedIn</Link></div>
        </div>
      </div>
    </div>
  </div>
)
