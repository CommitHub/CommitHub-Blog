import React from 'react';
import { graphql } from "gatsby";
import moment from 'moment';

import Layout from '../components/Layout'

import './styles/post.scss'

export default ({data}) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<div className='post-container'>
				<h1>{ post.frontmatter.title }</h1>
				<section className='min-author-container'>
					<div 
						className='author-img'
						style={{ backgroundImage: `url(${post.frontmatter.authorImage})` }}
					>
						<span className='sr-only'>Image of { post.frontmatter.author }</span>
					</div>
					<section className='author-info'>
						<p>{ post.frontmatter.author }</p>
						<p>&#x25CF;</p>
						<p>{ moment(post.frontmatter.date).format('MMM Do YYYY') }</p>
					</section>
				</section>
				<section
				className='background-img'
				style={{ backgroundImage: `url(${post.frontmatter.backgroundImg})` }}
				>
					<span className='sr-only'>blog cover background</span>
				</section>
				<div dangerouslySetInnerHTML={ {__html: post.html} } />
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
