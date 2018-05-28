import React, {Component} from 'react';
import './home.css';

class Home extends Component{

    render() {
        return(
            <div className="modern-home-container">
                <div className="modern-fixed-home-background"></div>
                <div className="modern-logo-container">
                    <img className="modern-logo-img" src={require('../../images/modern/modern-logo-1.png')} alt="web-logo"/>
                </div>
            </div>
        )
    }
}

export default Home;