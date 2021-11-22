import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const Windows11Page = ({data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
  <Layout>
  <Seo title="Console" />
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
	 </Layout>
  )
}

export default Windows11Page

export const pageQuery = graphql`
  query Windows11PageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/windows11.md/" }) {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`;
