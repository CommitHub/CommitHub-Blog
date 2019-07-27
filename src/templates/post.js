import React from 'react';
import { graphql } from "gatsby";
import moment from 'moment';

import '../components/styles/layout.scss'
import Layout from '../components/layout'

export default ({data}) => {
	const {markdownRemark: post} = data;

	return (
		<Layout>
			<div className="blog-page">
				<h1>{post.frontmatter.title}</h1>
				<section className="min-author-container">
					<img
						className="author"
						src={post.frontmatter.authorImage}
						alt='author'
					/>
					<section className="author-info">
						<p>{post.frontmatter.author}</p>
						<p>&#x25CF;</p>
						<p>{moment(post.frontmatter.date).format("MMM Do YYYY")}</p>
					</section>
					</section>
				<img
					className="backgroundImg"
					src={post.frontmatter.backgroundImg}
					alt="blog cover background"
				></img>
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
				author
				authorImage
				date
			}
		}
	}
`
