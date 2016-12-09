import { React, PropTypes } from 'react';

const propTypes = {
    errorMessage: PropTypes.string
};

const defaultProps = {
    errorMessage: ""
};

export default class Error extends React.Component {

    render(){
        return (
            <div className="error">
                {this.props.errorMessage}
            </div>
        );
    }
}
Error.propTypes = propTypes;
Error.defaultProps = defaultProps;
