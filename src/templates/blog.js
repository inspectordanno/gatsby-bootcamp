import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

//can't use use static query because it needs a variable
//export query as named export so gatsby can run it
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

//response prop of query is provided to component below

const Blog = ({ data }) => {
  return (
     <Layout>
       <h1>{data.markdownRemark.frontmatter.title}</h1>
       <p>{data.markdownRemark.frontmatter.date}</p>
       <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
     </Layout>
  )
}

export default Blog;
