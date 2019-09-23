import React, { Component } from 'react';
import moment from 'moment';

import './styles/blog-card.scss';

class BlogCard extends Component {
	redirect = () => {
		window.location.href = this.props.blog.path;
	}

	render() {
		return (
			<section
				className='blog-card-container'
				onClick={ this.redirect }
			>
					<img
						className='blog-background'
						src={ this.props.blog.backgroundImg }
						alt='blog background'
					/>
					<section className='blog-card-description-container'>
						<h2>{ this.props.blog.title }</h2>
						<section>
							<p>{ this.props.blog.description }</p>
							<section className='author-container'>
								<img
									className='author-image'
									src={ this.props.blog.authorImage }
									alt='author'
								/>
								<section className='author-info'>
									<p>{ this.props.blog.author }</p>
									<span>&#x25CF;</span>
									<p>{ moment(this.props.blog.date).format('MMM Do YYYY') }</p>
								</section>
							</section>
						</section>
					</section>
			</section>
		)
	}
}

export default BlogCard;
