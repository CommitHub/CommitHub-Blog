import React, { Component } from 'react';
import moment from 'moment';
import {
	FaGithub,
	FaLaptopCode
} from 'react-icons/fa'
import { IconContext } from "react-icons";

import './styles/project-card.scss'

class ProjectCard extends Component {
	constructor() {
		super();
		this.state = {
			showCard: false
		}
	}

	toogleCard = () => {
		this.setState(prevState => ({
			showCard: !prevState.showCard
		}));
	}

	render () {
		return (
			<section
				className='project-card'
				onClick={this.toogleCard}
			>
				<img
					className='project-showcase'
					src='http://cdn3.whatculture.com/images/2019/09/156b26bbe61193e0-600x338.jpg'
					alt='project showcase'
				/>
				<section className='project-card-description-container column-container'>
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
					{
						this.state.showCard ? (
							<section>
								<p>Category: {this.props.category}</p>
								<p>Last Updated: {moment(this.props.lastUpdated).format('MMMM DD YYYY')}</p>
								<section>
									<p>Technologies used:</p>
									<section className='technologies-img-container'>
										{this.props.technologies.map((tech, i) => (
											<img
												key={i}
												src={tech.url}
												className='technologie-img'
												alt={tech.name}
											/>
										))}
									</section>
								</section>
							</section>
						) : null
					}

					<section className="btn-container">
						<section>
							<p>Repository</p>
							<IconContext.Provider value={{className: 'btn'}}>
								<a
									href={this.props.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub />
								</a>
							</IconContext.Provider>
						</section>
						{
							this.props.projectUrl ? (
								<section>
									<p>Project</p>
									<IconContext.Provider value={{className: 'btn'}}>
										<a
											href={this.props.projectUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FaLaptopCode />
										</a>
									</IconContext.Provider>
								</section>
							) : null
						}
					</section>
				</section>
			</section>
		);
	}
}


export default ProjectCard;
