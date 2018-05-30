import React, {Component} from 'react';
import './customize-bar.css';

class CustomizeBar extends Component {
    render(){
        return(
            <div className="customize-bar-container">
                <div className="bar-title">Custom Panel</div>

                <div className="outer-list-container">
                    <span className="list-title">Home</span>
                    <ul className="list-container">
                                <li className="list-item" id="BasicCoffeeHome" onClick={this.props.changeHome}>Basic</li>
                                <li className="list-item" id="ModernCoffeeHome" onClick={this.props.changeHome}>Modern</li>
                                <li className="list-item" id="MinimalRestaurantHome" onClick={this.props.changeHome}>Minimal</li>
                                <li className="list-item" id="JoyRestaurantHome" onClick={this.props.changeHome}>Joy</li>
                    </ul>

                    <span className="list-title">Intro</span>
                    <ul className="list-container">
                        <li className="list-item" >Basic</li>
                        <li className="list-item" >Modern</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CustomizeBar;