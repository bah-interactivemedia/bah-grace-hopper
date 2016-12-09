import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = React.createClass({
  displayName: 'Root',

  render() {
    const { store } = this.props;
    return (
      <div>
        <Provider store={store}>
          <App/>
        </Provider>
      </div>
    );
  },

  propTypes: {
    store: PropTypes.object.isRequired
  }
});

export default Root;
