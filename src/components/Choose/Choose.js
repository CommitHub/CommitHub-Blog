import React from 'react';

import responsive from '../../images/responsive.png';
import development from '../../images/development.png';
import search from '../../images/search.png';
import consulting from '../../images/consulting.png';
import database from '../../images/database.png';
import user from '../../images/user.png';
import './styles/general.scss';
import './styles/choose.scss';

const Choose = () => (
	<section>
		<section className='section-title'>
			<h2>Why Choose Me?</h2>
		</section>
		<section className='skills-container'>
			<section>
				<img src={responsive} alt='responsive design' />
				<h3>Responsive Web Design</h3>
				<p>Design that fits any device to fit your apps needs</p>
			</section>
			<section>
				<img src={development} alt='development of web-apps' />
				<h3>Development of Websites and Web Applications</h3>
				<p>Development of beautiful websites and web apps that catch your customers attention</p>
			</section>
			<section>
				<img src={search} alt='seo' />
				<h3>SEO Analysis and Online Reputation</h3>
				<p>Proven SEO Search results, Google Adwords management, Social Network Management and Online Reputation Management.</p>
			</section>
			<section>
				<img src={consulting} alt='technical consulting' />
				<h3>Technical Consulting</h3>
				<p>Consulting you can trust with detailed explanations, guides and training using online tools and programs</p>
			</section>
			<section>
				<img src={database} alt='database management' />
				<h3>Database Management</h3>
				<p>An expertise in both relational and non-relational databases</p>
			</section>
			<section>
				<img src={user} alt='friendly developer' />
				<h3>Contributes to the Team</h3>
				<p>Packed with diciplines in agile processes and a friendly always willing to help attitude to reach our deadlines as quick and smooth as possible</p>
			</section>
		</section>
	</section>
)

export default Choose;
