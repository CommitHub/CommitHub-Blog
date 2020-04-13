import React, { Component } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios
      .get('https://us-central1-commithub-39e14.cloudfunctions.net/getProducts')
      .then(res => {
        this.setState({
          products: res.data
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Layout>
        <section id="products-container">
          <h1>Products</h1>
        </section>
      </Layout>
    )
  }
}

export default Products

