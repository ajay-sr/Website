import React, {Component} from 'react';
import './Card.css';
import Button from 'components/Button/Button';

class Card extends Component {
    render () {
    return (
        <div className="card">
            <div className="title">{this.props.title}</div>
            <div className="content">{this.props.children}</div>
        </div>)
    };
}
export default Card;