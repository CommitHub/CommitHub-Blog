import React from 'react';

const ProjectCard = (props) => (
	<section className='card'>
		<img src={props.backgroundImg} alt='project background' />
		<section className='card-description-container'>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<p>{props.published}</p>
			<a href={props.url}>url</a>
		</section>
	</section>
)

export default ProjectCard;
