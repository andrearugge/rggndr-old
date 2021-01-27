import React, { useEffect } from "react"
import { Link } from "gatsby"
import locomotiveScroll from "locomotive-scroll";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Divider from "../components/divider"
import GetInTouch from "../components/GetInTouch"
import SvgRggndr from "../components/svgRggndr"
import ArrowDown from "../components/arrowDown"
import Portrait from "../components/img/portrait"


export default function IndexPage() {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: .85
    });
  });


  // ref={scrollRef}
  return <div className="index">

    <Layout color="black">
      <SEO title="Home" />
      <div className="section-container s-hero">
        <Header data-scroll data-scroll-speed="-1" data-scroll-position="top" />
        <div className="heroSvg" data-scroll data-scroll-speed="2" data-scroll-position="top">
          <SvgRggndr />
        </div>
        <div className="menu">
          <img src="/svg/barcode.svg" className="barcode" alt="Barcode" />
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="intro s-text" data-scroll data-scroll-speed="1" data-scroll-position="top">
              Hello world, I'm Andrea.<br />
              I'm a designer and I generally craft Web products &amp; E-commerce.<br />
              I Co-founded <Link to="https://kpi6.com/" target="_blank" rel="noopener" className="link">KPI6</Link> and <Link to="https://beconcept.studio/" target="_blank" rel="noopener" className="link">Beconcept Studio</Link>.<br />
              I also like help open-minded people start their digital adventure.
            </div>
          </div>
          <a className="col-lg-4 scroll-down" data-scroll data-scroll-speed="1" data-scroll-position="top" href="#s-info">
            <div className="icon">
              <ArrowDown />
            </div>
          </a>
        </div>
      </div>

      <Divider Color="white" data-scroll data-scroll-speed="1" data-scroll-position="top" />

      <div className="section section-container s-info" id="s-info">
        <div className="row">
          <div className="col-lg-3 info-1" data-scroll data-scroll-speed="1" data-scroll-position="top">
            <div className="s-text smooth c-mb-1">
              Social life
            </div>
            <div className="s-text">
              <Link to="https://dribbble.com/andrearugge" target="_blank" rel="noopener" className="link">Dribbble</Link><br />
              <Link to="https://www.instagram.com/andrearugge/" target="_blank" rel="noopener" className="link">Instagram</Link><br />
              <Link to="https://twitter.com/andrea_rugge" target="_blank" rel="noopener" className="link">Twitter</Link><br />
              <Link to="https://www.linkedin.com/in/andrerugge/" target="_blank" rel="noopener" className="link">LinkedIn</Link>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 info-portrait">
            <Portrait />
            {/* <button className="btn">Add some magic</button> */}
          </div>
          <div className="col-lg-4 offset-lg-1 info-2" data-scroll data-scroll-speed="1" data-scroll-position="top">
            <div className="s-text smooth c-mb-1">
              Open infos
            </div>
            <div className="s-text">
              Andrea Ruggeri, 28 years old, Italian.<br />
              Grew up in the countryside with football and motorcycles.<br />
              Engaged with <Link to="https://www.instagram.com/g.digiulia/" target="_blank" rel="noopener" className="link">Giulia</Link>.<br />
              Can’t miss any F.C. Internazionale game.<br />
              Crypto fun.
            </div>

            <div className="s-text smooth c-mb-1 c-mt-4">
              Recently listening to
            </div>
            <div className="s-text">
              Florence + The Machine<br />
              The XX<br />
              Pinguini Tattici Nucleari
            </div>

            <div className="s-text smooth c-mb-1 c-mt-4">
              Favourite books
            </div>
            <div className="s-text">
              Factfullness<br />
              The Millenium Saga<br />
              Norwegian wood
            </div>
          </div>
        </div>
      </div>

      <div className="section section-container s-projects">
        <div className="section-head">
          <div className="s-text">
            Projects
          </div>
          <div className="s-text smooth">• You might find some concept designs.
          </div>
        </div>
        <div className="projects">
          <Link to="https://jbacollection.it/" target="_blank" rel="noopener" className="link">JBA</Link><span>,</span> <Link to="https://dribbble.com/shots/11445097-Slider-w-marquees" target="_blank" rel="noopener" className="link">Seletti</Link><span>,</span> <Link to="https://dribbble.com/shots/7784579-Waylon-Personal-E-commerce-assistant" target="_blank" rel="noopener" className="link">Waylon</Link><span>,</span> <Link to="https://dribbble.com/shots/6454433-Lens-Gallery" target="_blank" rel="noopener" className="link">Acne Studios</Link><span>,</span> <Link to="https://www.instagram.com/dialettolibero/" target="_blank" rel="noopener" className="link">Dialetto Libero</Link><span>,</span> <Link to="https://kpi6.com/" target="_blank" rel="noopener" className="link">KPI6</Link><span>,</span> &amp; more<sup>*</sup>
        </div>
      </div>

      <Divider Color="white" />

      <GetInTouch />

    </Layout>
  </div>

}
