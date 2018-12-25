import React from 'react';

const ProjectCard = (props) => (
    <section>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <a href={props.url}>url</a>
    </section>
)

export default ProjectCard;