import React, {Component} from 'react';
import ModernCoffeeHome from '../modern-coffee-home/home/home';
import BasicCoffeeHome from '../basic-coffee-home/home/home';
import MinimalRestaurantHome from '../minimal-restaurant-home/home/home';

class HomeContainer extends Component {

    render() {
        
        return (
            <div>
                {this.props.home_type === "ModernCoffeeHome" ? <ModernCoffeeHome /> :
                 this.props.home_type === "BasicCoffeeHome" ? <BasicCoffeeHome /> : 
                 this.props.home_type === "MinimalRestaurantHome" ? <MinimalRestaurantHome /> :
                 "" 
                }
            </div>
        )
    }

}

export default HomeContainer;