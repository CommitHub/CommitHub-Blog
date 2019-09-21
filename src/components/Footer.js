import React from 'react'

import AwesomeButton from './AwesomeButton';

import './styles/footer.scss';

const Footer = () => (
	<footer className='footer-container'>
		<h2>Contact Me</h2>
		<section className='btn-container'>
			<AwesomeButton
				url='https://twitter.com/MoonMan6033'
				icon='twitter'
			/>
			<AwesomeButton
				url='https://www.linkedin.com/in/luis-alvarez-pacheco/'
				icon='linkedin'
			/>
			<AwesomeButton
				url='https://dev.to/thegamefreak720'
				icon='dev'
			/>
			<AwesomeButton
				url='https://github.com/TheGameFreak720'
				icon='github'
			/>
		</section>
		<h4>
			{ `${String.fromCharCode(169)} Commithub 2019` }
		</h4>
	</footer>
);

export default Footer;
