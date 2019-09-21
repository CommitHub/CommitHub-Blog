import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

import './styles/header.scss';

import logo from '../images/logo/medium-transparent.png';

const Header = ({ siteTitle }) => (
  <Menu>
    <Link
      to='/'
      className='menu-item'
    >
      <img src={logo} alt='logo' />
    </Link>

    <Link
      to='/blog'
      className='menu-item'
    >
      Blog
    </Link>

    <Link
      to='/projects'
      className='menu-item'
    >
      Projects
    </Link>

    <Link
      to='/about-me'
      className='menu-item'
    >
      About Me
    </Link>
  </Menu>
)

export default Header
