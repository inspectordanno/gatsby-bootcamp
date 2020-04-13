import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from "../components/layout";
import Head from "../components/head";

//can't use use static query because it needs a variable
//export query as named export so gatsby can run it

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MM-DD-YY")
      body {
        json
      }
    }
  }
`

//response prop of query is provided to component below

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
     <Layout>
        <Head title={data.contentfulBlogPost.title} />
        <h1>{data.contentfulBlogPost.title}</h1>
        <p>{data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
     </Layout>
  )
}

export default Blog;
