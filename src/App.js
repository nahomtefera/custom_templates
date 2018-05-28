import React, { Component } from 'react';
import ModernCoffeeHome from './components/home-components/modern-coffee-home/home/home';
import BasicCoffeeHome from './components/home-components/basic-coffee-home/home/home';
import ModernCoffeeIntro from './components/intro-components/modern-coffee-intro/intro/intro';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      home: "basic-home"
    }

    this.changeHome = this.changeHome.bind(this);
  }

  changeHome(e){
    let selected = e.target.id;

    this.setState({
      home: selected
    })
  }

  render() {
    return (
      <div className="main-container">
        <ul>
          <li id="basic-home" onClick={this.changeHome}>Basic</li>
          <li id="modern-home" onClick={this.changeHome}>Modern</li>
        </ul>
        <div className="custom-template-container"> 

          
          {this.state.home === "basic-home" ? <BasicCoffeeHome /> : <ModernCoffeeHome/>}
          <ModernCoffeeIntro />
          
        </div>
      </div>
    );
  }
}

export default App;
