
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';

import '../styles/general.scss';

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <section className='blog-container'>
        <h1>Blogs</h1>
        <div className='card-container'>
            { data.allMarkdownRemark.edges.map(post => (
            <BlogCard
                key={ post.node.id }
                blog={ post.node.frontmatter }>
            </BlogCard>
            )) }
        </div>
      </section>
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
