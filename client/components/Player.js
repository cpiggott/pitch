import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import Card from './Card';
import BettingArea from './BettingArea';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="pull-right">{this.props.player.dealer ? 'Dealer' : ''}</div>
            <div>Player #{this.props.player.id}</div>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-12">
                <div className="hand">
                  {
                    _.map(this.props.player.hand, function(card) {
                      return (<Card card={card} key={card.id} />);
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <div className="betting-status pull-right">
              <BettingArea player={this.props.player} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {

};

Player.contextTypes = {

};

export default Player;
