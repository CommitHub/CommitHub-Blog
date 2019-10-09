import React, { Component } from 'react';

import './styles/buttons-selector.scss';

class ButtonsSelector extends Component {
  render() {
    return (
      <section>
        { this.props.selectors.map(selector => (
          <div
            class={ this.props.activeSelector === selector ? 'active' : '' }
            onClick={ () => this.props.filterItems(selector) }
          >
            { selector }
          </div>
        )) }
      </section>
    );
  }
}

export default ButtonsSelector
