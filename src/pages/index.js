import React, { useEffect } from "react"
import { Link } from "gatsby"
import locomotiveScroll from "locomotive-scroll";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Divider from "../components/divider"
import GetInTouch from "../components/GetInTouch"

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
        <div className="menu" data-scroll data-scroll-speed="1" data-scroll-position="top">
          <ul className="menu-items">
            <li>
              <Link to="/">[ About ]</Link>
            </li>
            <li>
              <Link to="/">[ Notes ]</Link>
            </li>
            <li>
              <Link to="/">[ Credits ]</Link>
            </li>
          </ul>
          <img src="/svg/barcode.svg" className="barcode" alt="Barcode" />
        </div>
        <div className="intro" data-scroll data-scroll-speed="1" data-scroll-position="top">
          Hi, I'm Andrea.<br />
          I'm a designer and I generally design Web products &amp; E-commerce.<br />
          I Co-founded <a className="link" target="_blank" rel="noopener" href="https://kpi6.com/">KPI6</a> and <a className="link" rel="noopener" target="_blank" href="https://beconcept.studio/">Beconcept Studio</a>.<br />
          I also like help open-minded people start their digital adventure.
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
          <a rel="noopener" target="_blank" href="https://dribbble.com/andrearugge/">[ Wanna se more? ]</a>
        </div>
      </div>

      <Divider Color="white" />

      <div className="section section-container s-i-dont">
        <div className="text-center s-text c-mb-5">
          I do not
        </div>
        <div class="marqueeBanner banner-left">
          <div>
            <div class="marqueeBanner-inner">
              <p>– Elevate visuals with refined craftsmanship – Bring new and established brands to life</p>
            </div>
            <div class="marqueeBanner-inner">
              <p>– Elevate visuals with refined craftsmanship – Bring new and established brands to life</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-container s-i-love">
        <div className="text-center s-text c-mb-5">
          I love to
        </div>
        <div class="marqueeBanner banner-right">
          <div>
            <div class="marqueeBanner-inner">
              <p>– Grow thanks to every project – Work on concrete ideas  – Make beautiful things even if nobody cares</p>
            </div>
            <div class="marqueeBanner-inner">
              <p>– Grow thanks to every project – Work on concrete ideas  – Make beautiful things even if nobody cares</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section section-container s-i-love">
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
      </div> */}

      <Divider Color="white" />

      <GetInTouch />

    </Layout>
  </div>

}

// const IndexPage = () => (

// )

// export default IndexPage
