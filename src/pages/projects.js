import React, { Component } from 'react';
import Layout from '../components/layout'
import ProjectCard from '../components/ProjectCard';

import './styles/projects.scss'

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					"id": "f450ad23-0ddd-4a0e-ac74-61b8c89b4467",
					"category": "Side Projects",
					"title": "Albizu Campos Tribute Page",
					"lastUpdated": "2019-02-10",
					"description": "A page I created to honor a patriot of Puerto Rico",
					"technologies": [
							{
								"name": "Less",
								"url": 	"https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/less.png"
							},
							{
								"name": "CSS",
								"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/css.png"
							},
							{
								"name": "HTML",
								"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/html.png"
							},
							{
								"name": "JavaScript",
								"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/js.png"
							}
					],
					"githubUrl": "https://github.com/TheGameFreak720/Albizu-Campos-Tribute-Page",
					"projectUrl": "https://thegamefreak720.github.io/Albizu-Campos-Tribute-Page/"
				},
				{

					"id": "8be11014-511c-42a3-9c4a-825bc58d28a8",
					"category": "Lambda Projects",
					"title": "Back End Project Week",
					"lastUpdated": "2019-02-19",
					"description": "The back end piece of the notes app where we do CRUD operations using sqlite",
					"technologies": [
							{
								"name": "NodeJS",
								"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/nodejs.png"
							},
							{
								"name": "Express",
								"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/express.png"
							},
							{
								"name": "JavaScript",
								"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/js.png"
							},
							{
								"name": "SQLlite",
								"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/sqlite.png"
							},
							{
								"name": "SQL",
								"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/sql.png"
							}
					],
					"githubUrl": "https://github.com/TheGameFreak720/back-end-project-week",
					"projectUrl": null
				},
				{

					"id": "3a5988c4-94a6-4b57-9947-6cef524e62e5",
					"category": "Side Projects",
					"title": "Casa Bacardi",
					"lastUpdated": "2017-10-20",
					"description": "A project for a 30 day challenge where I invite people to Casa Bacardí in Puerto Rico",
					"technologies": [
						{
							"name": "CSS",
							"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/css.png"
						},
						{
							"name": "HTML",
							"url": "https://commithub.s3.us-east-2.amazonaws.com/Projects/technologies-images/html.png"
						}
					],
					"githubUrl": "https://github.com/TheGameFreak720/Casa-Bacardi",
					"projectUrl": null

				}
			]
		}
	}

	render() {
		return (
			<Layout>
				<section className='projects'>
					<h1>Projects</h1>
					<section className='project-card-container'>
						{this.state.projects.map(project => (
							<ProjectCard
								key={project.id}
								backgroundImg={project.backgroundImg}
								title={project.title}
								category={project.category}
								description={project.description}
								lastUpdated={project.lastUpdated}
								technologies={project.technologies}
								githubUrl={project.githubUrl}
								projectUrl={project.projectUrl}
							/>
						))}
					</section>
				</section>
			</Layout>
		);
	}
}

export default Projects;
