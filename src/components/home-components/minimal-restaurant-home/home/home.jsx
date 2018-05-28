import React, {Component} from 'react';
import './home.css';

class Home extends Component {

    render(){
        
        return(
            <div id="home" className="minimal-home-container">
                <div className="minimal-logo-container">
                    <img className="minimal-logo-name" src={require('../../images/minimal-restaurant/restaurant-logo-minimal.png')} alt="restaurant logo" />
                </div>

            </div>
        )
    }
}

export default Home;