import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import APITutorial from '../components/APITutorial';
import VisExample from '../components/VisualizationExample/VisExample';

import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <Sample/>
        <APITutorial/>
        <VisExample />
      </div>
    );
  }

});

export default connect()(App);
