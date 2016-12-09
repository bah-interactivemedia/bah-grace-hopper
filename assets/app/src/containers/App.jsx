import React from 'react';
import { connect } from 'react-redux';
import VisExample from '../components/VisualizationExample/VisExample';

import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <VisExample />
      </div>
    );
  }

});

export default connect()(App);
