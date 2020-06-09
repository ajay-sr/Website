import React, {Component} from 'react';
import './Header.css';
class Header extends Component {
    render () {
    return (
        <div className="mainHeader" id="header">
            <div className="homeBtn btn"><a className="headerLink" href="#top">Ajay Rai</a></div>
            <nav className="nav">
                <div className="btn"><a className="headerLink" href="#experience">Experience</a></div>
                <div className="btn"><a className="headerLink" href="#skills">Skills</a></div>
                <div className="btn"><a className="headerLink" href="#contact">Contact</a></div>
            </nav>
        </div>)
    };
}
export default Header;