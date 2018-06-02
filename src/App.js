import React, { Component } from 'react';
import CustomizeBar from './components/customize-bar/customize-bar';
import HomeContainer from './components/home-components/home-container/home-container';
import ModernCoffeeIntro from './components/intro-components/modern-coffee-intro/intro/intro';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      home: "BasicCoffeeHome",
      desktop_view: true,
      full_home: true
    }

    this.changeViewport = this.changeViewport.bind(this);
    this.changeHome = this.changeHome.bind(this);
  }

  changeHome(e){
    let id = e.target.id

    if(id==="BasicCoffeeHome" || id==="MinimalRestaurantHome"){
      this.setState({
        home: id,
        full_home: true
      })
    }else{
      this.setState({
        home: id,
        full_home: false
      })
    }
  }

  changeViewport(e){
    if(e.target.id === "desktop-icon") {
      this.setState({
        desktop_view: true
      })
    }else{
      this.setState({
        desktop_view: false
      })
    }

  }

  render() {


    return (
      <div className={this.state.desktop_view ? "main-container" : "main-container-mobile"}>

        <CustomizeBar changeHome={this.changeHome} />
        <div className="web-editor-container">
          <div className="device-type">
            <div className={this.state.desktop_view ? "device-icon active-device-type" : "device-icon"} >
              <svg id="desktop-icon" onClick={this.changeViewport} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"/></svg>
            </div>
            <div className={this.state.desktop_view ? "device-icon" : "device-icon active-device-type"} >
              <svg id="mobile-icon" onClick={this.changeViewport} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 0v14h12V2H4zm6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
            </div>
            {/* <div className="custom-template-title">Customized Web Design</div> */}
          </div>
          <br/>
          <div className={this.state.desktop_view ? "custom-template-container" : "custom-template-container-mobile"}>   
            <HomeContainer home_type={this.state.home}/>
            <div className={this.state.full_home ? "blank-space" : ""}></div>
            <ModernCoffeeIntro />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
