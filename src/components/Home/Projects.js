import React, {Component} from 'react';

import ProjectCard from '../ProjectCard';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    name: 'Athena',
                    description: 'An API',
                    technologies: ['js', 'css', 'html'],
                    url: 'https://commithub.com'
                },
                {
                    id: 2,
                    name: 'Foo',
                    description: 'An API',
                    technologies: ['js', 'css', 'html'],
                    url: 'https://commithub.com'
                },
                {
                    id: 3,
                    name: 'Random',
                    description: 'An API',
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
                {this.state.projects.map(project => (
                    <section key={project.id}>
                        <ProjectCard
                            name={project.name}
                            description={project.description}
                            technologies={project.description}
                            url={project.url}
                        />
                    </section>
                ))}
            </section>
        );
    }
}

export default Projects;