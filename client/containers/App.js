import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("RENDER APP");
    // Injected by React Router
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
  console.log("MAP STATE TO PROPS", state);
  return state;
  let props = {};
  return props;
}

export default connect(
  mapStateToProps
)(App);
