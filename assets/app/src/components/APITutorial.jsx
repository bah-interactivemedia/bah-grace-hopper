import React from 'react';
import Slider from 'react-slick';
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
        <div className="">
          <h3>What is an API</h3>
          <p>{"An API is simply a way for an organization like the US Government to make it's data available via an accessible URL"}</p>
          <p>{"So, the following URL proved the following data:"}</p>
          <pre>
            {'https://api.usa.gov/jobs/search.json?'}
          </pre>
          <div></div>

        </div>
        <div>
          <h3>{"How do I start?"}</h3>
          <p>{"Start by signing up for an API Key. The API Key is added to the HTTP request so we know who you are."}</p>
          <div className="">
            <button>{'Sign up for an API'}</button>
          </div>
        </div>
        <div>
          <h3>{"How do I make my first call?"}</h3>
          <p>{'You will need to make a call. Here we are using a jQuery AJAX call. You can learn about AJAX calls <a>here</a>'}</p>
        </div>
        <div>
          <h3>{"How do I add the content to my page"}</h3>
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
