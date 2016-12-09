import React from 'react';
import Dropzone from 'react-dropzone';
import Error from './Error';

const propTypes = {
    setData: React.PropTypes.func
};

export default class FileUpload extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };

        // bind function
        this.setData = this.setData.bind(this);
    }

    onDrop(acceptedFiles, rejectedFiles) {
      if (!rejectedFiles) {
          this.props.setData(acceptedFiles);
      }
      else {
          this.setState = {
              message:  'You have selected an invalid file.  Please try another!'
          }
      }
    }

    render() {
        if (this.state.message !== "") {
            const error = <Error errorMessage={this.state.message} />;
        }
        else {
            const error = null;
        }
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Select a CSV file to upload, or drop it right here!</div>
            </Dropzone>
            { error }
          </div>
      );
    }
}
FileUpload.propTypes = propTypes;
