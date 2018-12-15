import React from 'react'
import { Link } from 'gatsby'

import './styles/header.scss';

const Header = ({ siteTitle }) => (
  <div className='nav-bar'>
    <div>
      <Link
        to='/'
      >
        <h1>{siteTitle}</h1>
      </Link>
    </div>
    <div className='header-link-secondary'>
      <Link
        to='/'
      >
        Blog
      </Link>
      <Link
        to='/'
      >
        Projects
      </Link>
      <Link
        to='/'
      >
        Contact Me
      </Link>
    </div>
  </div>
)

export default Header
