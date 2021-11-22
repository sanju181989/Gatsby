import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const KshPage = ({data }) => {
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

export default KshPage

export const pageQuery = graphql`
  query KshPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/ksh.md/" }) {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`;
