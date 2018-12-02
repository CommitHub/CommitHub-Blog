import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>Hello World</h1>
      <h2>By Luis Alvarez</h2>
      <p>
        I'm a student in Lambda School and would love to attend your hackathon because it will be my 
        first and I have always heard great things about how hackathon not only help devs get better 
        and network but just have fun in general. Hope you consider me, thanks!
      </p>
      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}><a href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a></li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
    query indexQuery {
      allMarkdownRemark(limit: 10) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }  
`

export default IndexPage
