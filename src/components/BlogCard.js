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
				<section
					className='blog-background'
					style={{ backgroundImage: `url(${this.props.blog.backgroundImg})` }}
				>
					<span className='sr-only'>blog background</span>
				</section>
				<section className='blog-card-description-container'>
					<h2>{ this.props.blog.title }</h2>
					<section>
						<p>{ this.props.blog.description }</p>
						<section className='author-container'>
							<div 
								className='author-image'
								style={{ backgroundImage: `url(${ this.props.blog.authorImage })` }}
							>
								<span className='sr-only'>Image of { this.props.blog.author }</span>
							</div>
							<section className='author-info'>
								<span>{ this.props.blog.author }</span>
								<span className="bullet">&#x25CF;</span>
								<span>{ moment(this.props.blog.date).format('MMM Do YYYY') }</span>
							</section>
						</section>
					</section>
				</section>
			</section>
		)
	}
}

export default BlogCard;
