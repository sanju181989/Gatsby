import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FirstchildPage = ({data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
  <Layout>
  <Seo title="Test1" />
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
	 </Layout>
  )
}

export default FirstchildPage

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/hero-texts.md/" }) {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`;
