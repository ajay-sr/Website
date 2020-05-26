import React, {Component} from 'react';
import './Dropdown.css';

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {showProjects:false};
    }

    toggleProjects = () => {
        this.setState({showProjects:!this.state.showProjects})
    }

    render () {
    return (
        <div className={`dropdown ${this.props.className | ""}`} onMouseLeave={this.toggleProjects}>
            <div className="btn dropdownAcc" onMouseEnter={() => {if (!this.state.showProjects) this.toggleProjects()}} >{this.props.title}</div>
            <div className={`hidden ${this.state.showProjects?"display":''}`}>{this.props.children}</div>
        </div>)
    };
}
export default Dropdown;