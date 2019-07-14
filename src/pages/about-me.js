import React from 'react'

import cthulhu from '../images/drawings/Cthulhu_henchmen.png';
import flamelurker from '../images/drawings/flamelurker.png';
import skeleton from '../images/drawings/Flying_Skeleton.png';
import death from '../images/drawings/Reaper.png';
import goblin from '../images/drawings/Goblin_face.png';
import ship from '../images/drawings/antivirus-green.png';
import miner from '../images/drawings/Miner.png';
import Layout from '../components/layout';
import Choose from '../components/Choose/Choose'
import './styles/about.scss';

const About = () => (
	<Layout>
		<section id='about-container'>
			<h1>About Me</h1>
			<p>A little history about this coffee addicted developer</p>
			<img
				className='profile'
				src='https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
				alt='Luis Alvarez'
			/>
			<p class="content-container">
				I was born in Tampa, Florida and since I was in college I started to gain a lot of interest in computers and how were they programmed.
				I started programming by learning how to make videogames. For a few videogames I made pixel art and it was an amazing rewarding experience.
				Later along college I started to build websites and got really into JavaScript. That led me to do a a few websites for some clients and a
				voice assistant for LuvCheck as an internship. I believe that every person has the potential to do great things.
			</p>
			<section className='content-container pixel-container'>
				<img src={cthulhu} alt='cthulhu henchman' />
				<img src={flamelurker} alt='flamelurker' />
				<img src={skeleton} alt='flying skeleton warrior' />
				<img src={death} alt='the reaper' />
				<img src={goblin} alt='goblin face' />
				<img src={ship} alt='antivirus ship' />
				<img src={miner} alt='enraged miner' />
			</section>
		</section>
	</Layout>

)

export default About;
