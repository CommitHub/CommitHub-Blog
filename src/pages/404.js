import React from 'react'
import Layout from '../components/Layout'
import './styles/404.scss'
import notFoundLogo from '../images/404/404.gif'

const NotFoundPage = () => (
  <Layout>
    <section className="not-found-container">
      <img src={notFoundLogo} alt="404: website not found" />
      <p>
        You gone and done it. You are in empty cyberspace. You might want to
        head back to home using that fancy navbar on the top left or don't and
        stay stuck in here forever.
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
