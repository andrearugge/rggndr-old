import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Divider from "../components/divider"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="section-container s-hero">
      <Header />
      <div className="menu">
        <ul className="menu-items">
          <li>
            <Link to="/">[ About ]</Link>
          </li>
          <li>
            <Link to="/">[ Readings ]</Link>
          </li>
          <li>
            <Link to="/">[ Feed ]</Link>
          </li>
          <li>
            <Link to="/">[ Credits ]</Link>
          </li>
        </ul>
        <img src="/svg/barcode.svg" className="barcode" alt="Barcode" />
      </div>
      <div className="intro">
        <span>( sweet intro )</span>
        Hi, I'm Andrea. I'm based in Mantova, and I generally design SaaS products &amp; E-commerce. I also like help open-minded people start their digital adventure.
      </div>
    </div>

    <Divider Color="white" />

    <div className="section section-container s-projects">
      <div>
        <div className="s-text">
          rojects<sup>*</sup>
        </div>
        <div className="s-text smooth">
          <sup>*</sup>You might find some concept designs.
        </div>
      </div>
      <div className="c-mt-6">
        <div className="title-1">Seletti</div>
        <div className="title-1">Petty</div>
        <div className="title-1">Waylon</div>
        <div className="title-1">Acne Studios</div>
        <div className="title-1">Dialetto libero</div>
      </div>
      <div className="text-center s-text c-mt-6">
        <Link to="/">[ Wanna see more? ]</Link>
      </div>
    </div>

    <Divider Color="white" />

    <div className="section section-container s-do-dont">
      <div className="text-center s-text c-mb-4">
        I do not
      </div>
      <div className="title-4">
        Elevate visuals with refined craftsmanship – Bring new and established brands to life
      </div>
    </div>

    <Divider Color="white" />

  </Layout>
)

export default IndexPage
