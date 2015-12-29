import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Injected by React Router
    return (
      <div>
        <div className="app-bar">
          <div className="container">
            <div className="app-bar-brand">Pitch</div>
          </div>
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
  let props = {};
  return props;
}

export default connect(
  mapStateToProps
)(App);
