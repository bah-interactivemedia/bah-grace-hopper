import React from 'react';
import FileUpload from './FileUpload';
import Visualization from './Visualization';

export default class VisExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: []
        };

        // bind function
        this.setData = this.setData.bind(this);
    }

    setData(data) {
        this.setState({
            chartData: data
        });
    }

    render() {
        return (
            <div>
                <FileUpload setData={this.setData} />
                <Visualization dataSet={this.state.chartData} />
            </div>
        );
    }
}
