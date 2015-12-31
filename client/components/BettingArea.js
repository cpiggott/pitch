import React, { Component, PropTypes } from 'react';
import BettingStatus from './BettingStatus';

class BettingArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Injected by React Router
    let { player } = this.props;
    let { isBetting } = player;
    
    let bettingArea;
    
    if (isBetting) {
      bettingArea = (
        <form>
          <input type="number" disabled={!isBetting} placeholder="Enter your bet" name="betValue" />
          <button type="submit" disabled={!isBetting}>Bet</button>
        </form>
      );
    }
    else {
      bettingArea = (
        <BettingStatus player={this.props.player} />
      );
    }
    
    return (
      <div className="betting-area">
        {bettingArea}
      </div>
    );
  }
}

BettingArea.propTypes = {

};

BettingArea.contextTypes = {

};

export default BettingArea;
