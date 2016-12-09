import React from 'react';
import { connect } from 'react-redux';

import APITutorial from '../components/APITutorial';

import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <APITutorial/>
      </div>
    );
  }

});

export default connect()(App);
