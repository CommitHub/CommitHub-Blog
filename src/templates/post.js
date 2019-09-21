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
					<img
						className='author-img'
						src={ post.frontmatter.authorImage }
						alt='author'
					/>
					<section className='author-info'>
						<p>{ post.frontmatter.author }</p>
						<p>&#x25CF;</p>
						<p>{ moment(post.frontmatter.date).format('MMM Do YYYY') }</p>
					</section>
					</section>
				<img
					className='background-img'
					src={ post.frontmatter.backgroundImg }
					alt='blog cover background'
				></img>
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
