import React, { Component } from 'react';

import ProjectCard from './ProjectCard';
import '../styles/card.scss';

class RecentBlogs extends Component {
	constructor(props) {
		super(props);
		this.state = {
				blogs: []
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

export default RecentBlogs
