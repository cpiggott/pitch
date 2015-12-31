import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Player from '../components/Player';

class GameBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Injected by React Router
    console.log("RENDER", this.props);
    
    return (
      <div className="gameboard">
        <div class="row">
          <div class="col-md-3">
            {
              _.map(this.props.players, function(player) {
                return (<Player player={player} key={player.id} />);
              })
            }
          </div>
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
