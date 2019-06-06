import React, { Component } from 'react';

import ProjectCard from '../ProjectCard';
import '../styles/card.scss';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					id: 1,
					category: 'Open Source Projects',
					title: 'Athena',
					description: 'An API',
					published: '12/27/2018',
					backgroundImg: 'https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA',
					technologies: ['js', 'css', 'html'],
					url: 'https://commithub.com'
				},
				{
					id: 2,
					category: 'Main Project',
					title: 'Foo',
					description: 'An API',
					published: '12/27/2018',
					backgroundImg: 'https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA',
					technologies: ['js', 'css', 'html'],
					url: 'https://commithub.com'
				},
				{
					id: 3,
					title: 'Random',
					category: 'Side Project',
					description: 'An API',
					published: '12/27/2018',
					backgroundImg: 'https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA',
					technologies: ['js', 'css', 'html'],
					url: 'https://commithub.com'
				}
			]
		}
	}

	render() {
		return (
			<section>
				<h2>Projects</h2>
				<section className='card-container'>
					{this.state.projects.map(project => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							published={project.published}
							backgroundImg={project.backgroundImg}
							technologies={project.description}
							url={project.url}
						/>
					))}
				</section>
			</section>
		);
	}
}

export default Projects;
