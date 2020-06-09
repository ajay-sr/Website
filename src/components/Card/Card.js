import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render () {
    return (
        <div className="card">
            <div className="title">
                <h4>{this.props.title}</h4>
                <img className="icon" src={this.props.icon} alt="companyLogo"/>
            </div>
            <div className="content">{this.props.children}</div>
        </div>)
    };
}
export default Card;