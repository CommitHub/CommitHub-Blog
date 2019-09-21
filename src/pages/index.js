import React from 'react'

import Layout from '../components/Layout'
import logo from '../images/logo/medium-transparent.png';

import '../styles/general.scss'
import './styles/home.scss';


const IndexPage = () => {
  return (
    <Layout>
      <section className='jumbotron-container'>
		    <img src={ logo } alt='commithub logo' />
	    </section>
    </Layout>
  )
}
export default IndexPage
