import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu';

import './styles/header.scss';
import logo from '../images/Medium-trans.png';

const Header = ({ siteTitle }) => (
  <Menu>
    <Link
      to='/'
      className='menu-item'
    >
      <img src={logo} />
    </Link>

    <Link
      to='/'
      className='menu-item'
    >
      Blog
    </Link>

    <Link
      to='/'
      className='menu-item'
    >
      Projects
    </Link>

    <Link
      to='/'
      className='menu-item'
    >
      Contact Me
    </Link>

  </Menu>
)

export default Header
