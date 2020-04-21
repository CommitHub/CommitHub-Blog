import React from 'react'
import moment from 'moment'
import { Link } from 'gatsby'

import AwesomeButton from './AwesomeButton'

import './styles/footer.scss'
import logo from '../images/logo/medium-without-title-transparent.png'

const Footer = () => (
  <footer className="footer-container">
    <img src={logo} alt="logo" />
    <section className="btn-container">
      <AwesomeButton url="https://twitter.com/CommitHub" icon="twitter" />
      <AwesomeButton
        url="https://www.linkedin.com/company/commithub/"
        icon="linkedin"
      />
      <AwesomeButton
        url="https://www.facebook.com/CommitHub-112615023726134/?ref=bookmarks"
        icon="facebook"
      />
      <AwesomeButton url="/contact-us" icon="envelope" />
      <AwesomeButton url="https://github.com/CommitHub" icon="github" />
    </section>
    <section className="menu">
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to="/about-us" className="menu-item">
        About Us
      </Link>
      <Link to="/blog" className="menu-item">
        Blog
      </Link>
      <Link to="/contact-us" className="menu-item">
        Contact Us
      </Link>
      <Link to="/products" className="menu-item">
        Products
      </Link>
    </section>
    <p>{`${String.fromCharCode(169)} Commithub ${moment().year()}`}</p>
  </footer>
)

export default Footer
