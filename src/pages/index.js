import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"





const IndexPage = ({data }) => {
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
export default IndexPage;



export const pageQuery = graphql`
  query IndexsPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/linux.md/" }) {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`;
