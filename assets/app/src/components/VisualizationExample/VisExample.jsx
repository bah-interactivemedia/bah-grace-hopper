import React from 'react';
import FileUpload from './FileUpload';
import Visualization from './Visualization';
import Papa from 'papaparse';

export default class VisExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: []
        };

    }

    setData(data) {
        Papa.parse(data, {
        	complete: function(results) {
                this.setState({
                    chartData: results.data
                });
        	}
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
