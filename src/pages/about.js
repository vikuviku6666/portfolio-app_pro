import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Title from "../components/Title"


const About = ({ data: { about: { nodes }, }}) => {
  const{ title, image, info, stack } = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            image={getImage(image.localFile)}
            className="about-img"
            alt={title}
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.icon}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          icon
          id
        }
        title
        info
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`


export default About
