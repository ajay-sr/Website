import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render () {
        return <div className={`btn ${this.props.className || ""}`} onClick={this.props.onClick}>{this.props.children}</div>;
    }
}
export default Button;