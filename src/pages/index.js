import React, { useEffect } from "react"
import { Link } from "gatsby"
import locomotiveScroll from "locomotive-scroll";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Divider from "../components/divider"
import GetInTouch from "../components/GetInTouch"

export default function IndexPage() {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });


  return <div className="scroll" ref={scrollRef}>
    <Layout>
      <SEO title="Home" />
      <div className="section-container s-hero">
        <Header />
        <div className="menu" data-scroll data-scroll-speed="3" data-scroll-position="top">
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
        <div className="intro" data-scroll data-scroll-speed="1" data-scroll-position="top">
          <span>( sweet intro )</span>
      Hi, I'm Andrea. I'm based in Mantova, and I generally design SaaS products &amp; E-commerce. I also like help open-minded people start their digital adventure.
    </div>
      </div>

      <Divider Color="white" />

      <div className="section section-container s-projects">
        <div>
          <div className="s-text">
            Projects<sup>*</sup>
          </div>
          <div className="s-text smooth c-mt-1">
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

      <div className="section section-container s-i-dont">
        <div className="text-center s-text c-mb-5">
          I do not
    </div>
        <div className="marquee-container marquee-1">
          <div>
            <div className="marquee-text title-4">
              – Elevate visuals with refined craftsmanship – Bring new and established brands to life
        </div>
            <div className="marquee-text title-4 c-ml-3">
              – Elevate visuals with refined craftsmanship – Bring new and established brands to life
        </div>
          </div>
        </div>
      </div>
      <div className="section section-container s-i-love">
        <div className="text-center s-text c-mb-5">
          I love to
    </div>
        <div className="marquee-container marquee-2">
          <div>
            <div className="marquee-text title-4">
              – Find new challenges – Grow thanks to every project – Work on concrete ideas  – Make beautiful things even if nobody cares
        </div>
            <div className="marquee-text title-4 c-ml-3">
              – Find new challenges – Grow thanks to every project – Work on concrete ideas  – Make beautiful things even if nobody cares
        </div>
          </div>
        </div>
      </div>

      <Divider Color="white" />

      <GetInTouch />

    </Layout>
  </div>

}

// const IndexPage = () => (

// )

// export default IndexPage
