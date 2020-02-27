import React from 'react'

import Layout from '../components/Layout'

import './styles/about.scss'

// Drawings
import cthulhu from '../images/drawings/cthulhu-henchmen.png'
import flamelurker from '../images/drawings/flamelurker.png'
import skeleton from '../images/drawings/flying-skeleton.png'
import death from '../images/drawings/reaper.png'
import goblin from '../images/drawings/goblin-face.png'
import ship from '../images/drawings/antivirus-green.png'
import miner from '../images/drawings/miner.png'

// Icons
import responsive from '../images/icons/responsive.png'
import development from '../images/icons/development.png'
import linux from '../images/icons/linux.png'
import books from '../images/icons/books.png'
import database from '../images/icons/database.png'
import user from '../images/icons/user.png'

const About = () => (
  <Layout>
    <section id="about-container">
      <h1>About Me</h1>
      <section className="content-container">
        <section className="content-item-profile">
          <img
            className="profile"
            src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg"
            alt="Luis Alvarez"
          />
        </section>
        <section className="content-item-text">
          <p>
            I was born in Tampa, Florida and since I was in college I started to
            gain a lot of interest in computers and how they were programmed. I
            started programming by learning how to make videogames. For a few
            videogames I made pixel art and it was an amazing rewarding
            experience. Later along college I started to build websites and got
            really into JavaScript. That led me to do a a few websites for some
            clients and a voice assistant for LuvCheck as an internship. I
            believe that every person has the potential to do great things.
          </p>
        </section>
      </section>
      <section className="content-container content-container-two-row-stack-responsive">
        <img src={cthulhu} alt="cthulhu henchman" />
        <img src={flamelurker} alt="flamelurker" />
        <img src={skeleton} alt="flying skeleton warrior" />
        <img src={death} alt="the reaper" />
        <img src={goblin} alt="goblin face" />
        <img src={ship} alt="antivirus ship" />
        <img src={miner} alt="enraged miner" />
      </section>

      <section className="section-title">
        <h2>Skills</h2>
      </section>
      <section className="content-container content-container-two-row-stack-responsive">
        <section className="content-mult-items">
          <img src={development} alt="development of web-apps" />
          <h3>Web Applications</h3>
          <p>
            Experience on full stack technologies like AngularJS, React, Vue,
            NodeJS and Express
          </p>
        </section>
        <section className="content-mult-items">
          <img src={responsive} alt="responsive design" />
          <h3>Responsive Web Design</h3>
          <p>Design that fits any device to fit your apps needs</p>
        </section>
        <section className="content-mult-items">
          <img src={database} alt="database management" />
          <h3>Database Management</h3>
          <p>An expertise in both relational and non-relational databases</p>
        </section>
        <section className="content-mult-items">
          <img src={linux} alt="linux" />
          <h3>Linux/Unix Understanding</h3>
          <p>
            Daily user of Linux/Unix systems having a basic understanding on how
            it operates
          </p>
        </section>
        <section className="content-mult-items">
          <img src={books} alt="technical consulting" />
          <h3>Self Learner</h3>
          <p>
            Capable of learning new technologies on the job or outside to meet
            work or personal goals
          </p>
        </section>
        <section className="content-mult-items">
          <img src={user} alt="friendly developer" />
          <h3>Contributor to the Team</h3>
          <p>
            Packed with diciplines in agile processes and a friendly always
            willing to help attitude to reach our deadlines as quick and smooth
            as possible
          </p>
        </section>
      </section>
    </section>
  </Layout>
)

export default About
