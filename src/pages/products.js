import React, { Component } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

import '../styles/general.scss'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      loading: true
    }
  }

  componentDidMount() {
    axios
      .get('https://us-central1-commithub-39e14.cloudfunctions.net/getProducts')
      .then(res => {
        this.setState({
          products: res.data,
          loading: false
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Layout>
        <section id="products-container">
          <h1>Products</h1>
          <section className="card-container">
            {this.state.products.map(product => (
              <ProductCard
                key={ product.id }
                img={ product.img }
                title={ product.title }
                description={ product.description }
                url={ product.url }
              />
            ))}
          </section>
          { this.state.loading ? (
            <section className="loader-container">
              <Loader/>
            </section>
          ) : null }
        </section>
      </Layout>
    )
  }
}

export default Products

