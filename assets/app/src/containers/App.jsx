import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';

import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <Sample/>
      </div>
    );
  }

});

export default connect()(App);
