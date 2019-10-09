import React, { Component } from 'react';
import { graphql, StaticQuery } from "gatsby";
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard';

import '../styles/general.scss'

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		}
	}

	componentDidMount() {
		this.setState({
			projects: this.props.projects
		})
	}

	render() {
		return (
			<Layout>
				<section className='projects-container'>
					<h1>Projects</h1>
					<section className='card-container'>
						{ this.state.projects.map(project => (
							<ProjectCard
								key={ project.node.id }
								backgroundImg={ project.node.backgroundImg }
								title={ project.node.title }
								category={ project.node.category }
								description={ project.node.description }
								lastUpdated={ project.node.lastUpdated }
								technologies={ project.node.technologies }
								githubURL={ project.node.githubURL }
								projectURL={ project.node.projectURL }
							/>
						)) }
					</section>
				</section>
			</Layout>
		);
	}
}

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allMongodbCommitHubProjects(sort: {fields: [lastUpdated], order: DESC}) {
					edges {
						node {
							id
							title
							category
							lastUpdated
							description
							technologies
							githubURL
							projectURL
							backgroundImg
						}
					}
				}
			}
		`}
		render={(data) => (
      <Projects projects={data.allMongodbCommitHubProjects.edges} />
    )}
	/>
)
