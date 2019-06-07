import React from 'react';

import './styles/card.scss';

const BlogCard = (props) => (
    <section className='card'>
				<img
					class="project-background"
					src={props.blog.backgroundImg}
					alt='project background'
				/>
        <section className='card-description-container'>
          <h2>{props.blog.title}</h2>
          <section>
						<p>{props.blog.description}</p>
						<section class="author-container">
							<img
								class="author"
								src={props.blog.authorImage}
								alt='author'
							/>
							<section class="author-info">
								<p>{props.blog.author}</p>
								<span>&#x25CF;</span>
								<p>{props.blog.date}</p>
							</section>
						</section>
          </section>
          <a href={props.blog.path}>Read</a>
        </section>
    </section>
)

export default BlogCard;
