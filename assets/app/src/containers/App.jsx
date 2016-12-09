import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import VisExample from '../components/VisualizationExample/VisExample';

import APITutorial from '../components/APITutorial';

import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <VisExample />
        <APITutorial/>
      </div>
    );
  }

});

export default connect()(App);
