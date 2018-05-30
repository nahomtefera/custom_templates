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
        <div className="web-editor-container">
          <div className="device-type">
            <div className="device-icon active-device-type">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"/></svg>
            </div>
            <div className="device-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 0v14h12V2H4zm6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
            </div>
            <div className="custom-template-title">Customized Web Design</div>
          </div>
          <br/>
          <div className="custom-template-container">   
            <HomeContainer home_type={this.state.home}/>
            <ModernCoffeeIntro />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
