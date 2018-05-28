import React, {Component} from 'react';
import './customize-bar.css';

class CustomizeBar extends Component {
    render(){
        return(
            <div className="customize-bar-container">
                <ul className="list-container">
                <li className="list-item" id="BasicCoffeeHome" onClick={this.props.changeHome}>Basic</li>
                <li className="list-item" id="ModernCoffeeHome" onClick={this.props.changeHome}>Modern</li>
                </ul>
            </div>
        )
    }
}

export default CustomizeBar;