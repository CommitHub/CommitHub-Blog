import React, { Component } from 'react'
import moment from 'moment'

import Layout from '../components/Layout'
import logo from '../images/logo/medium-transparent.png'
import winter from '../images/backgrounds/winter.jpg'
import spring from '../images/backgrounds/spring.jpg'
import summer from '../images/backgrounds/summer.jpg'
import fall from '../images/backgrounds/fall.jpg'

import '../styles/general.scss'
import './styles/home.scss'

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      backgroundImg: null,
    }
  }

  componentDidMount() {
    const currentMonth = moment().month()
    let season = null

    if ([0, 1, 11].includes(currentMonth)) {
      season = winter
    } else if ([2, 3].includes(currentMonth)) {
      season = spring
    } else if ([4, 5, 6, 7].includes(currentMonth)) {
      season = summer
    } else {
      season = fall
    }

    this.setState({
      backgroundImg: season,
    })
  }

  render() {
    console.log(this.state)
    return (
      <Layout>
        <section
          className="jumbotron-container"
          style={{ backgroundImage: `url(${this.state.backgroundImg})` }}
        >
          <img src={logo} alt="commithub logo" />
        </section>
      </Layout>
    )
  }
}
export default IndexPage
