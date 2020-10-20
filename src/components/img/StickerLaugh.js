import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StickerLaugh = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sticker-laugh.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return <Img className="sticker-laugh" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default StickerLaugh