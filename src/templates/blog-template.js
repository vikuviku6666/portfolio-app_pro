import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import ReactMarkdown from "react-markdown"

const blogTemplate = ({ data }) => {
  const { content} = data.blog
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown children={ content}/>
          </article>
          <Link to="/blogs" className="btn center-btn">
            blog
          </Link>
      </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query GetSingleBlog($slug: String) {
       blog: strapiBlogs(slug: { eq: $slug}) {
         content
       }
    }
 `

export default blogTemplate
