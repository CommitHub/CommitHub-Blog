import React, { Component } from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import moment from 'moment'

import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'

import logo from '../images/logo/medium-transparent.png'

// Jumbotron Background
import winter from '../images/backgrounds/winter.jpg'
import spring from '../images/backgrounds/spring.jpg'
import summer from '../images/backgrounds/summer.jpg'
import fall from '../images/backgrounds/fall.jpg'

// Icons
import responsive from '../images/icons/responsive.png'
import development from '../images/icons/development.png'
import linux from '../images/icons/linux.png'
import books from '../images/icons/books.png'
import database from '../images/icons/database.png'
import user from '../images/icons/user.png'
import brain from '../images/icons/brain.png'
import ai from '../images/icons/artificial-intelligence.png'
import discovery from '../images/icons/discovery.png'
import solution from '../images/icons/solution.png'
import ui from '../images/icons/ui.png'
import computer from '../images/icons/computer.png'
import data from '../images/icons/data.png'
import rocket from '../images/icons/rocket.png'

import '../styles/general.scss'
import './styles/home.scss'

import '../styles/general.scss'
import './styles/home.scss'

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      backgroundImg: null,
    }
  }

  componentDidMount() {
    const currentMonth = moment().month()
    let season = null

    if ([0, 1, 11].includes(currentMonth)) {
      season = winter
    } else if ([2, 3].includes(currentMonth)) {
      season = spring
    } else if ([4, 5, 6, 7].includes(currentMonth)) {
      season = summer
    } else {
      season = fall
    }

    this.setState({
      backgroundImg: season,
    })
  }

  render() {
    return (
      <Layout>
        <section id="home-container">
          <section
            className="jumbotron-container"
            style={{ backgroundImage: `url(${this.state.backgroundImg})` }}
          >
            <img src={logo} alt="commithub logo" />
          </section>
          <section className="about-us-container">
            <h1>What is CommitHub</h1>
            <section className="about-us-description-container">
              <section>
                <p>
                  We are a tech startup that offers web design, development and
                  IT services to improve a company's infrastructure. Through our
                  site we offer free resources to help developers and
                  non-developers to learn about different topics on tech.
                </p>
                <Link to="/about-us" className="home-btn">
                  Learn More About Us
                </Link>
              </section>
              <img src={ai} alt="artificial intelligence" />
            </section>
          </section>
          <section className="focus-container">
            <h1>Focus on what matters the most</h1>
            <img src={brain} alt="cpu brain" />
            <section className="focus-description-container">
              <p>
                Need a web app but don't want to spend hours learning how to
                make a site? Let our tech wizards handle it
              </p>
              <p>
                If you are looking for something simple yet elegant without
                breaking the bank we are your guys
              </p>
              <p>
                When was the last time you did a backup for your site? We offer
                automatic backups and server mantainance
              </p>
            </section>
          </section>
          <section className="skills-container">
            <h1>Skills you can count on</h1>
            <section className="content-container content-container-two-row-stack-responsive">
              <section className="content-mult-items">
                <img src={development} alt="development of web-apps" />
                <h2>Web Applications</h2>
                <p>
                  Experience on full stack technologies like AngularJS, React,
                  Vue, NodeJS and Express
                </p>
              </section>
              <section className="content-mult-items">
                <img src={responsive} alt="responsive design" />
                <h2>Responsive Web Design</h2>
                <p>Design that fits any device to fit your apps needs</p>
              </section>
              <section className="content-mult-items">
                <img src={database} alt="database management" />
                <h2>Database Management</h2>
                <p>
                  An expertise in both relational and non-relational databases
                </p>
              </section>
              <section className="content-mult-items">
                <img src={linux} alt="linux" />
                <h2>Linux/Unix Understanding</h2>
                <p>
                  Daily users of Linux/Unix systems having a basic understanding
                  on how it operates
                </p>
              </section>
              <section className="content-mult-items">
                <img src={books} alt="technical consulting" />
                <h2>Self Learners</h2>
                <p>
                  Capable of learning new technologies in an agile environment
                  to reach goals
                </p>
              </section>
              <section className="content-mult-items">
                <img src={user} alt="friendly developer" />
                <h2>Contributor to the Team</h2>
                <p>
                  Packed with diciplines in agile processes and a friendly
                  always willing to help attitude to reach our deadlines as
                  quick and smooth as possible
                </p>
              </section>
            </section>
          </section>
          <section className="blog-container">
            <h1>What's new at CommitHub</h1>
            <section className="blogs-container">
              {this.props.posts.map(post => (
                <BlogCard
                  key={post.node.id}
                  blog={post.node.frontmatter}
                ></BlogCard>
              ))}
            </section>
          </section>
          <section className="process-container">
            <h1>Our Process</h1>
            <section className="content-container content-container-two-row-stack-responsive">
              <section className="content-mult-items">
                <img src={discovery} alt="discovery phase" />
                <h2>Discovery</h2>
                <p>
                  We will conduct data analysis, customer interviews and
                  internal interviews with your companies employees to determine
                  what is the best approach for your product.
                </p>
              </section>
              <section className="content-mult-items">
                <img src={solution} alt="strategy phase" />
                <h2>Strategy</h2>
                <p>
                  With the analysis done on the Discovery phase we can create an
                  overeaching strategy for your product. This will include
                  information like what the pages we’ll have, how navigation
                  will work, visual style, conversion paths, etc.
                </p>
              </section>
              <section className="content-mult-items">
                <img src={ui} alt="wireframing phase" />
                <h2>Wireframing</h2>
                <p>
                  We’ll then do a basic wireframe of your new website that will
                  show the navigation page layouts, copy, etc. This will allow
                  you to understand how the site will look and what messages
                  will be conveyed, and will allow us to iterate quickly until
                  everyone is aligned.
                </p>
              </section>
              <section className="content-mult-items">
                <img src={computer} alt="design phase" />
                <h2>Design</h2>
                <p>
                  We’ll then turn the wireframe into a high fidelity design that
                  shows exactly how each page of the website will look. We will
                  present this back to you as an interactive prototype that will
                  allow you to click through the website and experience it as if
                  it was live.
                </p>
              </section>
              <section className="content-mult-items">
                <img src={data} alt="development phase" />
                <h2>Development</h2>
                <p>
                  We’ll then develop the website on an CMS of choice preferably
                  using the framework Vue. Using a CMS like Contentful combined
                  with Vue or any other front end framework, makes it quicker
                  for us to develop, and also makes it easy for you to update
                  the website however you need.
                </p>
              </section>
              <section className="content-mult-items">
                <img src={rocket} alt="launch and training phase" />
                <h2>Launch and Training</h2>
                <p>
                  Once the website is built, we’ll jump on a video call and walk
                  you through the new website. Once you’ve signed off on it,
                  we’ll push it live and archive the old website in case you
                  need anything from it. Finally, we’ll do a basic training
                  session with your marketing team so they understand how to
                  edit the website when they need.
                </p>
              </section>
            </section>
            <Link to="/contact-us" className="home-btn">
              Contact Us For More Information
            </Link>
          </section>
        </section>
      </Layout>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 3
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                author
                authorImage
                backgroundImg
                categories
                date
                description
              }
            }
          }
        }
      }
    `}
    render={data => <IndexPage posts={data.allMarkdownRemark.edges} />}
  />
)
