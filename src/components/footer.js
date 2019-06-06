import React from 'react'
import {
	FaTwitter,
	FaLinkedin,
	FaDev,
	FaGithub,
	FaEnvelope
} from 'react-icons/fa'
import { IconContext } from "react-icons";

import './styles/footer.scss';

const Footer = () => (
	<footer className='footer'>
		<h2>Contact Me</h2>
		<section className='btn-container'>
			<IconContext.Provider value={{className: 'twitter-btn'}}>
					<FaTwitter />
			</IconContext.Provider>
			<IconContext.Provider value={{className: 'linkedIn-btn'}}>
					<FaLinkedin />
			</IconContext.Provider>
			<IconContext.Provider value={{className: 'dev-btn'}}>
					<FaDev />
			</IconContext.Provider>
			<IconContext.Provider value={{className: 'github-btn'}}>
					<FaGithub />
			</IconContext.Provider>
			<IconContext.Provider value={{className: 'contact-btn'}}>
					<FaEnvelope />
			</IconContext.Provider>
		</section>
		<h4>
			{`${String.fromCharCode(169)} Commithub 2019`}
		</h4>
	</footer>
);

export default Footer;
