import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './styles/layout.scss'
import Header from './Header'
import Footer from './Footer'
import icon from '../images/logo/medium-without-title.png';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={ data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'The portfolio and blog site of the coffee addicted coder called Luis Alvarez' },
            { name: 'keywords', content: 'webdev, full stack developer, backend, frontend, gatsbyjs, reactjs, graphql, sql, mongodb, javascript, css, html, redux, blog, coffee' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${icon}` }
          ]}
        >
          <html lang='en;' />
        </Helmet>
        <Header siteTitle={ data.site.siteMetadata.title } />
        <div
        >
          { children}
        </div>
        <Footer />
      </>
    ) }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
