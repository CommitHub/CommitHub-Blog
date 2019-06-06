import React from 'react'

import profile from '../../images/me.jpg';
import cthulhu from '../../images/Cthulhu_henchmen.png';
import flamelurker from '../../images/flamelurker.png';
import skeleton from '../../images/Flying_Skeleton.png';
import death from '../../images/Reaper.png';
import goblin from '../../images/Goblin_face.png';
import ship from '../../images/antivirus-green.png';
import miner from '../../images/Miner.png';
import './styles/about.scss';
import './styles/general.scss';

const About = () => (
	<section id='about-container'>
		<section className='section-title'>
			<h2>About Me</h2>
			<p>A little history about this coffee addicted developer</p>
		</section>
		<img
			className='profile'
			src={profile}
			alt='Luis Alvarez'
		/>
		<p>
			I was born in Tampa, Florida and since I was in college I started to gain a lot of interest in computers and how were they programmed.
			I started programming by learning how to make videogames. For a few videogames I made pixel art and it was an amazing rewarding experience.
			Later along college I started to build websites and got really into JavaScript. That led me to do a a few websites for some clients and a
			voice assistant for LuvCheck as an internship. I believe that every person has the potential to do great things.
		</p>
		<section className='pixel-container'>
			<img src={cthulhu} alt='cthulhu henchman' />
			<img src={flamelurker} alt='flamelurker' />
			<img src={skeleton} alt='flying skeleton warrior' />
			<img src={death} alt='the reaper' />
			<img src={goblin} alt='goblin face' />
			<img src={ship} alt='antivirus ship' />
			<img src={miner} alt='enraged miner' />
		</section>
	</section>
)

export default About;
