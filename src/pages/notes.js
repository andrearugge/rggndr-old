import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import SvgNotes from "../components/svgNotes"
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


  return <div className="notes">
    {/* className="scroll" ref={scrollRef} */}
    <Layout>
      <SEO title="Notes" />
      <div className="section-container">
        <Header />
        <div className="heroSvg">
          <SvgNotes />
        </div>
      </div>

      <div className="section section-container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 posts">
            <div className="blog-post">
              <div className="date">
                December 31, 2020 (4 min read)
              </div>
              <div className="title">
                Shut down Spec.fm
              </div>
              <div className="short-desc">
                This week we shut down Spec.fm, a podcast network I co-founded in 2015. Sarah wrote a reflection on the last five years of operating the network, lessons we learned, and how much money the company made.
                Design Details will continue as an independent podast – new episodes coming in 2021!
              </div>
              <div>
                <Link to="/" className="btn btn-blog">Read the post</Link>
              </div>
            </div>
            <div className="blog-post">
              <div className="date">
                December 31, 2020 (4 min read)
              </div>
              <div className="title">
                Shut down Spec.fm
              </div>
              <div className="short-desc">
                This week we shut down Spec.fm, a podcast network I co-founded in 2015. Sarah wrote a reflection on the last five years of operating the network, lessons we learned, and how much money the company made.
                Design Details will continue as an independent podast – new episodes coming in 2021!
              </div>
              <div>
                <Link to="/" className="btn btn-blog">Read the post</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider Color="white" />

      <GetInTouch />

    </Layout>
  </div>

}
