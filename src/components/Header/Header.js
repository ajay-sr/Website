import React, {Component} from 'react';
import './Header.css';
import Button from 'components/Button/Button';

class Header extends Component {
    render () {
    return (
        <div className="mainHeader">
            <Button className="homeBtn">Ajay</Button>
            <div className="infoSec">
                <Button>About Me</Button>
            </div>
        </div>)
    };
}
export default Header;