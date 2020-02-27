import React, { Component } from 'react'

import './styles/buttons-selector.scss'

class ButtonsSelector extends Component {
  render() {
    return (
      <section className="buttons-selector-container">
        {this.props.selectors.map((selector, i) => (
          <div
            key={i}
            className={
              this.props.activeSelector === selector
                ? 'selector active'
                : 'selector'
            }
            onClick={() => this.props.filterItems(selector)}
          >
            {selector}
          </div>
        ))}
      </section>
    )
  }
}

export default ButtonsSelector
