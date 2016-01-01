import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Player from '../components/Player';

class GameBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gameboard">
        <div className="row">
          {
            _.map(this.props.players, function(player) {
              return (
                <div className="col-md-6">
                  <Player player={player} key={player.id} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameId: PropTypes.string
};

GameBoard.contextTypes = {
  
};

function mapStateToProps(state) {
  if (state.games && state.games.currentGame) {
    return state.games[state.games.currentGame];
  }
  return {};
}

export default connect(
  mapStateToProps
)(GameBoard);
