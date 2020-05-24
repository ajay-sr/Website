// A component that hides info until you scroll on it, then displays in a pop up window where the mouse pointer is
import React, {Component} from 'react';
import './Hidder.css';

class Hidder extends Component {
    constructor(props){
        super(props);
        this.state = {hovering: false, styles:{top:0, left:0}};
    }

    toggleHover = () => {
        this.setState({hovering:!this.state.hovering});
    }

    moveHidden = (e) => {
        let x = {};
        console.log(e.clientY);
        if(e.clientY > window.innerHeight - 100) x.bottom =  document.body.scrollHeight - (e.clientY + window.scrollY);
        else x.top = e.clientY + window.scrollY;
        x.left = e.clientX + window.scrollX;
        this.setState({styles:x});
    }

    render () {
    return (
        <div className="hidder">
            <div className="showCont" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onMouseMove={(e)=>this.moveHidden(e)}>{this.props.display}</div>
            <div className={`hideCont ${this.state.hovering?'showhidden':''}`} style={this.state.styles}>{this.props.children}</div>
        </div>)
    };
}
export default Hidder;