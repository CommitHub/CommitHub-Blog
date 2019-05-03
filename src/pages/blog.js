
import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
    query indexQuery {
      allMarkdownRemark(
        limit: 10
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
        ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              published
            }
          }
        }
      }
    }
`

export default BlogPage
