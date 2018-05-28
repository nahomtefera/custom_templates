import React, { Component } from 'react';
import CustomizeBar from './components/customize-bar/customize-bar';
import HomeContainer from './components/home-components/home-container/home-container';
import ModernCoffeeIntro from './components/intro-components/modern-coffee-intro/intro/intro';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      home: "BasicCoffeeHome"
    }

    this.changeHome = this.changeHome.bind(this);
  }

  changeHome(e){
    let id = e.target.id

    this.setState({
      home: id
    })
  }

  render() {


    return (
      <div className="main-container">

        <CustomizeBar changeHome={this.changeHome} />

        <div className="custom-template-container">   

          <HomeContainer home_type={this.state.home}/>
          <ModernCoffeeIntro />
        </div>
      </div>
    );
  }
}

export default App;
