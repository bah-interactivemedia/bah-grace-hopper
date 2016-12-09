import React from 'react';
import Dropzone from 'react-dropzone';
import Error from './Error';

const propTypes = {
    setData: React.PropTypes.func
};

export default class FileUploads extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };

        this.setData = this.props.setData.bind(this);
    }

    onDrop(acceptedFiles) {
      if (acceptedFiles !== null){
          console.log(this.props);
          this.setData(acceptedFiles);
      }
      else {
          this.setState({
              message:  'You have selected an invalid file.  Please try another!'
          });
      }
    }

    render() {
        let error = null;
        if (this.state.message !== "") {
            error = <Error errorMessage={this.state.message} />;
        }
        else {
            error = null;
        }
      return (
          <div>
            <Dropzone onDrop={this.props.setData}>
              <div>Select a CSV file to upload, or drop it right here!</div>
            </Dropzone>
            { error }
          </div>
      );
    }
}
FileUploads.propTypes = propTypes;
