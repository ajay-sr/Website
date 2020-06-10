// A component that hides info until you scroll on it, then displays in a pop up window where the mouse pointer is
import React, {Component} from 'react';
import './Hidder.css';

class Hidder extends Component {
    render () {
    return (
        <div className={`hidder ${this.props.className}`} style={{background: this.props.themeColor}}>
            <h4 className="showCont">{this.props.display}</h4>
            <div className="hidden">{this.props.children}</div>
        </div>)
    };
}
export default Hidder;