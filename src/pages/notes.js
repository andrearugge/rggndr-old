import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Divider from "../components/divider"
import GetInTouch from "../components/GetInTouch"
import SvgRggndr from "../components/svgRggndr"
import Portrait from "../components/img/portrait"


export default function IndexPage() {
  // const scrollRef = React.createRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true
  //   });
  // });


  return <div>
    {/* className="scroll" ref={scrollRef} */}
    <Layout>
      <SEO title="Home" />
      <div className="section-container s-hero">
        <Header />
        <div className="heroSvg">
          <SvgRggndr />
        </div>
        <div className="menu" data-scroll data-scroll-speed="1" data-scroll-position="top">
          <img src="/svg/barcode.svg" className="barcode" alt="Barcode" />
        </div>
        <div className="intro s-text" data-scroll data-scroll-speed="1" data-scroll-position="top">
          Hello world, I'm Andrea.<br />
          I'm a designer and I generally craft Web products &amp; E-commerce.<br />
          I Co-founded <Link to="https://kpi6.com/" target="_blank" rel="noopener" className="link">KPI6</Link> and <Link to="https://beconcept.studio/" target="_blank" rel="noopener" className="link">Beconcept Studio</Link>.<br />
          I also like help open-minded people start their digital adventure.
        </div>
      </div>

      <Divider Color="white" />

      <GetInTouch />

    </Layout>
  </div>

}
