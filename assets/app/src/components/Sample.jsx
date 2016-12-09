import React from 'react';
import Sub from './subcomponent';
const Sample = React.createClass({

  getInitialState() {
    return {

    };
  },
  test() {
    console.log('works');
  },
  render() {
    return (
      <div className="">
        {'this is a component'}
        <Sub test={this.test}/>
      </div>
    );
  }
});

export default Sample;
