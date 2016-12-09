---
# VisExample
---

import { React } from 'react';
import FileUpload from './FileUpload';
import Visualization from './Visualization';

export default class VisExample extends React.Component {

    setData(data){
        return data;
    }

    render(){
        return {
            <FileUpload setData={setData} />
            <Visualization dataSet={data} />
        }
    }
}
