import React from 'react'
import {
	FaTwitter,
	FaLinkedin,
	FaDev,
	FaGithub,
} from 'react-icons/fa'
import { IconContext } from "react-icons";

import './styles/footer.scss';

const Footer = () => (
	<footer className='footer'>
		<h2>Contact Me</h2>
		<section className='btn-container'>
			<IconContext.Provider value={{className: 'btn twitter-btn'}}>
					<a
						href="https://twitter.com/MoonMan6033"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter />
					</a>
			</IconContext.Provider>
			<IconContext.Provider value={{className: 'btn linkedIn-btn'}}>
				<a
					href="https://www.linkedin.com/in/luis-alvarez-pacheco/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
			</IconContext.Provider>
			<IconContext.Provider value={{className: 'btn dev-btn'}}>
				<a
						href="https://dev.to/thegamefreak720"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaDev />
				</a>
			</IconContext.Provider>
			<IconContext.Provider value={{className: 'btn github-btn'}}>
				<a
					href="https://github.com/TheGameFreak720"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub />
				</a>
			</IconContext.Provider>
		</section>
		<h4>
			{`${String.fromCharCode(169)} Commithub 2019`}
		</h4>
	</footer>
);

export default Footer;
