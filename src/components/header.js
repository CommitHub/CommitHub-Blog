import React from 'react'
import { Link } from 'gatsby'

import './styles/header.scss';

const Header = ({ siteTitle }) => (
  <div className='nav-bar'>
    {siteTitle}
  </div>
)

export default Header
