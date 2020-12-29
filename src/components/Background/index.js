import './index.scss';
import React from 'react';
var loadjs = require('loadjs');

export default class Background extends React.Component {
    componentDidMount() {
        loadjs('./noise.min.js', function () {
            // loadjs('./js/common_scripts.js')
        });
        loadjs('./swirl.js', function () {
            // loadjs('./js/common_scripts.js')
        });
        loadjs('./util.js', function () {
            // loadjs('./js/common_scripts.js')
        });
    }
    render() {
        return (
            <div className="bg">
                <div className="content content--canvas">
                    EHLO
                </div>
            </div>
        );
    };
}
