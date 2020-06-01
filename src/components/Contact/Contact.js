import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render () {
    return (
        <div className="contactSec" onMouseLeave={this.toggleProjects}>
            <h1 className="contactHeader">Contact Me</h1>
            <div className="contactInfo">
                <div className="phoneSec contactItem">Phone: (647) 205-0037</div>
                <div className="emailSec contactItem">Email: ajay.srai@outlook.com</div>
            </div>
        </div>)
    };
}
export default Contact;