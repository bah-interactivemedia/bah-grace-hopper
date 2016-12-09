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
        console.log(data);
        Papa.parse(data, {
            header: true,
            encoding: "",
            delimeter: "",
        	complete: function(results) {
                // this.setState({
                //     chartData: results.data
                // });
                console.log(results);
        	}
        });
    }

    render() {
        return (
            <div>
                <FileUploads setData={this.setData} />
                <Visualization dataSet={this.state.chartData} />
            </div>
        );
    }
}
