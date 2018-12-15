import React from 'react'
import { Link } from 'gatsby'

import './styles/header.scss';

const Header = ({ siteTitle }) => (
  <div className='nav-bar'>
    <h1>{siteTitle}</h1>
  </div>
)

export default Header
