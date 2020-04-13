import React, { Component } from 'react'

import AwesomeButton from './AwesomeButton'

import './styles/product-card.scss'

class ProductCard extends Component {
  render() {
    return (
      <section className="product-card-container">
        <img
          className="product-showcase"
          src={ this.props.img }
          alt={ this.props.title }
        />
        <section className="product-card-description-container">
          <h3>{ this.props.title }</h3>
          <p>{ this.props.description }</p>
          <section className="btn-container">
            <p>Visit Our Product Site</p>
            <AwesomeButton url={this.props.url} icon="laptop-code" />
          </section>
        </section>
      </section>
    )
  }
}

export default ProductCard
