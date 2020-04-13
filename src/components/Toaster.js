import React, { Component } from 'react'

import './styles/toaster.scss'

class Toaster extends Component {
  render() {
    return (
      <div className={this.props.type}>{this.props.message}</div>
    )
  }
}

export default Toaster
