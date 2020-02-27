import React, { Component } from 'react';

import AwesomeButton from './AwesomeButton';

import './styles/project-card.scss';

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

	render() {
		return (
			<section
				className='project-card'
				onClick={ this.toogleCard }
			>
				<img
					className='project-showcase'
					src={ this.props.backgroundImg || 'https://commithub.s3.us-east-2.amazonaws.com/Projects/project-images/default.jpg' }
					alt='project showcase'
				/>
				<section className='project-card-description-container column-container'>
					<h3>{ this.props.title }</h3>
					<p>{ this.props.description }</p>
					{
						this.state.showCard ? (
							<section>
								<p>Category: { this.props.category }</p>
								<section>
									<p>Technologies used:</p>
									<section className='technologies-img-container'>
										{ this.props.technologies.map((url, i) => (
											<img
												key={ i }
												src={ url }
												alt='technology used'
											/>
										)) }
									</section>
								</section>
							</section>
						) : null
					}

					<section className='btn-container'>
						{
							this.props.githubURL ? (
								<section>
									<p>Repository</p>
									<AwesomeButton
										url={ this.props.githubUrl }
										icon='github'
									/>
								</section>
							) : null
						}
						{
							this.props.projectURL ? (
								<section>
									<p>Project</p>
									<AwesomeButton
										url={ this.props.projectURL }
										icon='laptop-code'
									/>
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
