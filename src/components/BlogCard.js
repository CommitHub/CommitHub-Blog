import React from 'react';
import moment from 'moment';

import './styles/blog-card.scss';

const BlogCard = (props) => (
    <section className='blog-card-container'>
				<img
					className='blog-background'
					src={ props.blog.backgroundImg }
					alt='blog background'
				/>
        <section className='blog-card-description-container'>
          <h2>{ props.blog.title }</h2>
          <section>
						<p>{ props.blog.description }</p>
						<section className='author-container'>
							<div 
								className='author-image'
								style={{ backgroundImage: `url(${props.blog.authorImage})` }}
							>
								<span className='sr-only'>Image of { props.blog.author }</span>
							</div>
							<section className='author-info'>
								<p>{ props.blog.author }</p>
								<span>&#x25CF;</span>
								<p>{ moment(props.blog.date).format('MMM Do YYYY') }</p>
							</section>
						</section>
          </section>
          <a href={ props.blog.path }>Read</a>
        </section>
    </section>
)

export default BlogCard;
