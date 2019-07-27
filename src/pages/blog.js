
import React from 'react'
import { graphql } from 'gatsby'

import '../components/styles/card.scss';
import Layout from '../components/layout';
import BlogCard from '../components/BlogCard';

const BlogPage = ({ data }) => {
  return (
    <Layout>
        <h1>Blogs</h1>
        <div className="card-container">
            {data.allMarkdownRemark.edges.map(post => (
            <BlogCard
                key={post.node.id}
                blog={post.node.frontmatter}>
            </BlogCard>
            ))}
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
    query blogQuery {
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
              author
              authorImage
              backgroundImg
              tags
              date
              description
            }
          }
        }
      }
    }
`

export default BlogPage
