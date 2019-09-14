import React from 'react';
import moment from 'moment';

import './styles/project-card.scss'

const ProjectCard = (props) => (
	<section className='project-card'>
		<img src='http://cdn3.whatculture.com/images/2019/09/156b26bbe61193e0-600x338.jpg' alt='project background' />
		<section className='project-card-description-container'>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<p>Category: {props.category}</p>
			<p>Last Updated: {moment(props.lastUpdated).format('MMMM DD YYYY')}</p>
			<section>
				<p>Technologies used:</p>
				<section className='technologies-img-container'>
					{props.technologies.map((tech, i) => (
						<img
							key={i}
							src={tech.url}
							className='technologie-img'
							alt={tech.name}
						/>
					))}
				</section>
			</section>
			<a href={props.githubUrl} a target='_blank' rel='noopener noreferrer'>Github Repository</a>
			{
				props.projectUrl ? (<a href={props.projectUrl} a target='_blank' rel='noopener noreferrer'>Project URL</a>) : null
			}
		</section>
	</section>
)

export default ProjectCard;
