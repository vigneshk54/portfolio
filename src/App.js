import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './components/Projects/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Testimonials from './components/Testimonials';

class App extends Component {
  componentDidMount(){
      // ReactDOM.findDOMNode(this).scrollIntoView();
      if(window.innerWidth === 1024 && window.innerHeight === 1366){
        alert("please rotate your device to landscape mode for a better experience")
      }
  }
  render() {
    return (
      <div className="App">
        <div className="hero">
          <Navbar />
          <Hero />
        </div>    
        <Work/>    
        <Testimonials />
      </div>
    );
  }
}

export default App;
