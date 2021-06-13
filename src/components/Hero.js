import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Fullstack</h1>
            <h1>Developer</h1>
            <Link to="/contact" className="btn">
              contact 
            </Link>
            <SocialLinks />
          </div>
        </article>
        <StaticImage
          src="../assets/images/resume.png"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </div>
    </header>
  )
}

export default Hero
