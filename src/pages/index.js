import React from 'react'

import Layout from '../components/layout'
import logo from '../images/logo/Medium-trans.png';
import './styles/home.scss';
import './styles/general.scss'

const IndexPage = () => {
  return (
    <Layout>
      <section id='jumbotron'>
		    <img src={logo} alt='logo' />
	    </section>
    </Layout>
  )
}
export default IndexPage
