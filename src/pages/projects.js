import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import ButtonSelector from '../components/ButtonsSelector'
import ProjectCard from '../components/ProjectCard'

import '../styles/general.scss'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      allProjects: [],
      categories: [],
      activeCategory: null,
    }
  }

  componentDidMount() {
    const categories = this.props.projects
      .map(project => project.node.category)
      .filter((category, i, self) => self.indexOf(category) === i)

    categories.unshift('All')

    this.setState({
      projects: this.props.projects,
      allProjects: this.props.projects,
      categories: categories,
      activeCategory: categories[0],
    })
  }

  filterOutProjects = category => {
    const filteredProjects =
      category === 'All'
        ? this.state.allProjects
        : this.state.allProjects.filter(
            project => project.node.category === category
          )

    this.setState({
      projects: filteredProjects,
      activeCategory: category,
    })
  }

  render() {
    return (
      <Layout>
        <section className="projects-container">
          <h1>Projects</h1>
          <ButtonSelector
            selectors={this.state.categories}
            activeSelector={this.state.activeCategory}
            filterItems={this.filterOutProjects}
          />
          <section className="card-container">
            {this.state.projects.map(project => (
              <ProjectCard
                key={project.node.id}
                backgroundImg={project.node.backgroundImg}
                title={project.node.title}
                category={project.node.category}
                description={project.node.description}
                technologies={project.node.technologies}
                githubURL={project.node.githubURL}
                projectURL={project.node.projectURL}
              />
            ))}
          </section>
        </section>
      </Layout>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMongodbCommitHubProjects(
        ) {
          edges {
            node {
              id
              title
              category
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
    render={data => (
      <Projects projects={data.allMongodbCommitHubProjects.edges} />
    )}
  />
)
