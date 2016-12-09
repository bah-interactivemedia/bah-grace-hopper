import React from 'react';

const Sub = React.createClass({

  getInitialState() {
    return {

    };
  },

  render() {
    this.props.test();
    return (
      <div className="">
        {'this is a SUb'}
      </div>
    );
  }
});

export default Sub;
