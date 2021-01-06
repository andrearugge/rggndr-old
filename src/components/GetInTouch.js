import { Link } from "gatsby"
import React from "react"
import StickerLaugh from "../components/img/StickerLaugh"

export default () => (
  <div className="section section-container s-getInTouch">

    <div className="mega-title">
      <span>Wanna</span><br />
      <span>Get in</span><br />
      <span className="p-rel">
        Touch?
        <StickerLaugh />
      </span>
    </div>

    <div className="row c-mt-6">
      <div className="col-12 text-center contact-info">
        <div className="item">
          <div>Phone</div>
          <div>+39 393 8576 657</div>
        </div>
        <div className="item">
          <div>Email</div>
          <div><a href="mailto:hello@rggndr.it">hello@rggndr.it</a></div>
        </div>
        <div className="item">
          <div>Social</div>
          <div>
            <Link to="https://www.instagram.com/andrearugge/" target="_blank">Instagram</Link> – <Link to="https://dribbble.com/andrearugge" target="_blank">Dribbble</Link> – <Link to="https://www.linkedin.com/in/andrerugge/" target="_blank">LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)
