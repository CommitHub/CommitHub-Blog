import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

import './styles/header.scss'

import logo from '../images/logo/medium-without-title-transparent.png'

const Header = ({ siteTitle }) => (
  <Menu>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>

    <Link to="/about-me">About Me</Link>

    <Link to="/blog">Blog</Link>

    <Link to="/contact-us">Contact Us</Link>

    <Link to="/projects">Projects</Link>
  </Menu>
)

export default Header
