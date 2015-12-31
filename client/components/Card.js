import React, { Component, PropTypes } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Injected by React Router
    return (
      <div className="card">{this.props.card.value} {this.props.card.suit}</div>
    );
  }
}

Card.propTypes = {

};

Card.contextTypes = {

};

export default Card;
