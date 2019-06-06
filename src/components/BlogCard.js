import React from 'react';

import './styles/card.scss';

const BlogCard = (props) => (
    <section className='card'>
				<img
					src={props.blog.backgroundImg}
					alt='project background'
				/>
        <section className='card-description-container'>
          <h3>{props.blog.title}</h3>
          <section>
						<p>{props.blog.description}</p>
						<p>Author: {props.blog.author}</p>
						<img src={props.blog.authorImage} alt='author' />
						<p>Date Published: {props.blog.date}</p>
          </section>
          <a href={props.blog.path}>Read</a>
        </section>
    </section>
)

export default BlogCard;
