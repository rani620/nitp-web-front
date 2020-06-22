import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Ccimg = () => {
  const data = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "facilities/img/cc.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="imgwrap">
      <Img fluid={data.main.childImageSharp.fluid} />
    </div>
  )
}

export default Ccimg
