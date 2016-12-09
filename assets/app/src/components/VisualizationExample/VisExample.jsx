import React from 'react';
import FileUploads from './FileUploads';
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
                <FileUploads {...this.props} setData={this.setData} />
                <Visualization dataSet={this.state.chartData} />
            </div>
        );
    }
}
