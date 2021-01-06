import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import SvgRggndr from "../components/svgRggndr"
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
        <div className="heroSvg">
          <SvgRggndr />
        </div>
        ...
      </div>

      <Divider Color="white" />

      <GetInTouch />

    </Layout>
  </div>

}
