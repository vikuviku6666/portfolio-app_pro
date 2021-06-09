import React from "react"
import Layout from "../components/Layout"
import Blog from "../components/Blogs"
import { graphql } from "gatsby"

const Blogs = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  }
}) => {
  return (
    <Layout>
      <section className="blog-page">
      <Blog blogs={blogs} title="blog"/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
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



export default Blogs
