import React, { Component, PropTypes } from 'react';

class BettingStatus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Injected by React Router
    let status;
    let { player } = this.props;
    let { isBetting, currentRound } = player;
    let bet = currentRound ? currentRound.bet : null;
    
    
    if (isBetting) {
      status = "You're bet.";
    }
    else if (bet){
      status = `You bet ${bet}`
    }
    return (
      <div className="betting-status">{status}</div>
    );
  }
}

BettingStatus.propTypes = {

};

BettingStatus.contextTypes = {

};

export default BettingStatus;
