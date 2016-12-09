import React from 'react';
import Slider from 'react-slick';
// import brace from 'brace';
require('react-ace-wrapper');

require('brace/mode/javascript');
require('brace/theme/github');


function onChange(newValue) {
  console.log('change',newValue);
}
const APITutorial = React.createClass({

  getInitialState() {
    return {

    };
  },
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>What is an API</h3>
          <p>{"An API is simply a way for an organization like the US Government to make it's data available via an accessible URL"}</p>
          <p>{"So, the following URL proved the following data:"}</p>
          <AceEditor
            mode="javascript"
            theme="github"
            onChange={onChange}
            name="root"
            editorProps={{$blockScrolling: true}}
          />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
});


export default APITutorial;
