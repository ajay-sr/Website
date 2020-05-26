import React, {Component} from 'react';
import './Header.css';
import Button from 'components/Button/Button';
import Dropdown from 'components/Dropdown/Dropdown';
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {stickyTop:false};
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
            if(window.scrollY > window.innerHeight){
                this.setState({stickyTop: true});
            } else {
                this.setState({stickyTop: false});
            }
        });
    }

    render () {
    return (
        <div className="wrapper" id="header">
            <div className={`buffer ${this.state.stickyTop? 'stick': ''}`}/>
            <div className={`mainHeader ${this.state.stickyTop? 'stick': ''}`}>
                <Button className="homeBtn">Ajay</Button>
                <Dropdown title="Projects">
                    <a className="projectItem" href="https://sample-maker.herokuapp.com/">Sample Maker</a>
                    <a className="projectItem" href='#'>Fire Emblem Database (WIP)</a>
                </Dropdown>
            </div>
        </div>)
    };
}
export default Header;