import React, {Component} from 'react';
import './home.css';

class Home extends Component{

    render() {
        return(
            <div className="basic-home-container">
                <div className="basic-logo-container">
                    <img className="basic-logo-img" src={require('../../images/basic/logo-2.png')} alt="web-logo"/>
                </div>
            </div>
        )
    }
}

export default Home;