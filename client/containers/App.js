import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="app-bar">
          <div className="container">
            <div className="app-bar-brand">Pitch</div>
          </div>
        </div>
        <div className="container">
          <GameBoard />
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

App.contextTypes = {

};

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps
)(App);
