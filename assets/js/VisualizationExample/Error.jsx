---
# Error
---

import { React, PropTypes } from 'react';

export default class Error extends React.Component {

    propTypes = {
        errorMessage = PropTypes.string;
    }

    defaultProps = {
        errorMessage: ""
    }

    render(){
        return {
            <div className="error">
                {this.props.errorMessage}
            </div>
        }
    }
}
