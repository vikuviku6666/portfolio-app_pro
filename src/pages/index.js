import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Experiences from "../components/Experiences"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Hero />
      <Skills />
      <Experiences />
      <Projects projects={ projects } title='Projects' showLink/>
      <Blogs blogs={ blogs } title='blog' showLink/>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        featured
        description
        title
        url
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        stack {
          icon
          id
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do,  YYYY")
        id
        title
        category
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`