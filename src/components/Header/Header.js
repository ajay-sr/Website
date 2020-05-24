import React, {Component} from 'react';
import './Header.css';
import Button from 'components/Button/Button';

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
        <div className="wrapper">
            <div className={`buffer ${this.state.stickyTop? 'stick': ''}`}/>
            <div className={`mainHeader ${this.state.stickyTop? 'stick': ''}`}>
                <Button className="homeBtn">Ajay</Button>
                <Button>Projects</Button>
            </div>
        </div>)
    };
}
export default Header;