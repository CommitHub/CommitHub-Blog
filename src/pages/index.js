import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Home/Jumbotron';
import About from '../components/Home/About';
import Choose from '../components/Home/Choose';
import Projects from '../components/Home/Projects';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Jumbotron />
      <About />
      <Choose />
      <Projects />
      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <img src={post.node.frontmatter.backgroundImg} />
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
              backgroundImg
              published
            }
          }
        }
      }
    }  
`

export default IndexPage
