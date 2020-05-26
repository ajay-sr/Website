import React, {Component} from 'react';
import './Banner.css';

class Banner extends Component {
    render () {
    return (
        <div className="beegpic">
            <h1 className="siteTitle">Ajay Rai: The Website</h1>
            <a className="startButton" href="#header">Click to Start</a>
        </div>)
    };
}
export default Banner;