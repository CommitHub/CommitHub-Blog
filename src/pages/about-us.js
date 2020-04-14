import React from 'react'

import Layout from '../components/Layout'

import './styles/about.scss'

const About = () => (
  <Layout>
    <section id="about-container">
      <h1>About Us</h1>
      <section className="our-story-container">
        <h2>Our Story</h2>
        <h3>We want to make technology friendly to the community</h3>
        <p>
          We at CommitHub are compromised to deliver the best products for our
          customers. A lot of company's struggle with the technical details of
          how to create a digital product. We want to break that barrier of
          entry down at an economical price to allow businesses to flourish. Our
          goal is to get involved with the community and help each other out
          fostering innovation. The tech revolution is only getting started.
        </p>
      </section>
      <section className="our-team-container">
        <h2>Our Team</h2>
        <section className="content-container">
          <section className="content-item-profile">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/commithub-39e14.appspot.com/o/blogs%2Fauthor%2Fluis.jpg?alt=media&token=56f5f968-08c9-40a6-9583-4cc361ec550f"
              alt="Luis Alvarez"
            />
            <h3>Luis Alvarez</h3>
            <h4>Founder and Full Stack Developer</h4>
          </section>
        </section>
      </section>
    </section>
  </Layout>
)

export default About
