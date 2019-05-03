import React from 'react';
import { graphql } from "gatsby";

import '../components/styles/layout.scss'
import Layout from '../components/layout'

export default ({data}) => {
    const {markdownRemark: post} = data;
    return (
        <Layout>
            <div class="blog-page">
                <h1>{post.frontmatter.title}</h1>
                <img class="backgroundImg" src={post.frontmatter.backgroundImg}></img>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                backgroundImg
            }
        }
    }
`
