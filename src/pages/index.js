import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Home/Jumbotron';
import About from '../components/Home/About';
import Choose from '../components/Home/Choose';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Jumbotron />
      <About />
      <Choose />
      <h1>Hello World</h1>
      <h2>By Luis Alvarez</h2>
      <p>
        I'm a student in Lambda School and would love to attend your hackathon because it will be my 
        first and I have always heard great things about how hackathon not only help devs get better 
        and network but just have fun in general. Hope you consider me, thanks!
      </p>
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

export default IndexPage
