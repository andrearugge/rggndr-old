import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SvgNull from "../components/svgNull"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404 | Not found" />
    <div className="section-container s-404">
      <div className="heroSvg">
        <SvgNull />
      </div>
      <div className="s-text c-mt-5">
        This page doesn’t exist! <Link to="/" className="link">Back to home right now</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
