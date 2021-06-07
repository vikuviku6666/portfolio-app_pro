import React from "react"
import Image from "gatsby-plugin-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "resume.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  // const {
  //   file: {
  //     childImageSharp: { fluid },
  //   },
  // } = useStaticQuery(query)
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Vinay</h1>
            <h4>FullStack Developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
           <SocialLinks/>
          </div>
        </article>
        {/* <Image fluid={fluid} className="hero-img" /> */}
      </div>
    </header>
  )
}

export default Hero
