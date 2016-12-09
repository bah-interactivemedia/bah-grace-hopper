---
# Uploader
---

import React from 'react';
import Dropzone from 'react-dropzone';
import Error from './Error';

export default class FileUpload extends React.Component {

    propTypes = {
        setData = PropTypes.func
    }

    onDrop(acceptedFiles, rejectedFiles) {
      let message = "You have selected an invalid file.  Please try another!";
      if(!rejectedFiles){
          this.props.setData(acceptedFiles);
      }
      else {
          const error = <Error errorMessage={message} />;
      }
    }

    render() {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Select a CSV file to upload, or drop it right here!</div>
            </Dropzone>
          </div>
      );
    }
}
