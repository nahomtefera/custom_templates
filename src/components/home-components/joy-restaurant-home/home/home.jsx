import React, {Component} from 'react';
import './home.css';


class Home extends Component {

    render(){
        
        return(
            <div id="home" className="joy-home-container">
                <div className="joy-logo-container">
                    <img className="joy-logo-name" src={require('../../images/joy-restaurant/restaurant-logo-joy-4.png')} alt="restaurant logo" />
                </div>

                {/* <div className="arrow-container">
                    <Scrollchor className="navbar-list-link" to="menu" >
                        <FontAwesome 
                                className="arrow-down-icon floating" 
                                name="chevron-down" 
                        />
                    </Scrollchor>
                    
                </div> */}
            </div>
        )
    }
}

export default Home;