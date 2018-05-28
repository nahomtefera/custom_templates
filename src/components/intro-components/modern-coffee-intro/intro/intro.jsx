import React, {Component} from 'react';
import './intro.css';

class Intro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [require('../../images/intro/intro-img-1.jpg'), require('../../images/intro/intro-img-2.jpg'), require('../../images/intro/intro-img-3.jpg'), require('../../images/intro/intro-img-5.jpg')]
        }
    
    }
    render() {
        return(
            <div className="intro-container">
                
                <div className="intro-images-container">
                    {this.state.images.map((image, index)=> {
                        return (
                            <div className="intro-img-item-container">
                                <img className="intro-img-item" key={index} src={image} alt="coffee and cups"/>
                            </div>
                        )
                    })}
                </div>

                <div className="intro-coffee">
                    <div className="intro-coffee-text-container">
                        <h1>Our Coffees</h1>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'. 
                        </p>
                        <div className="view-menu-button">
                            view menu
                        </div>
                    </div>
                    <div className="intro-coffee-img-container"></div>

                </div>
                
                <div className="intro-pastries">
                    <div className="intro-pastries-img-container"></div>
                    <div className="intro-pastries-text-container">
                        <h1>Our Pastries</h1>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                        </p>
                        <div className="view-menu-button">
                            view menu
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Intro;