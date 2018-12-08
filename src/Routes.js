import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Practo from './components/Projects/Practo';
import Photography from './components/Projects/Photography'; 
import Illustrations from './components/Projects/Illustrations'; 
import Videography from './components/Projects/Videography'; 
import MotionGraphics from './components/Projects/MotionGraphics'; 
import GraphicDesign from './components/Projects/GraphicDesign'; 
import UIUXDesign from './components/Projects/UIUXDesign';
import Recotap from './components/Projects/Recotap';
import Credits from './components/Credits';

class Routes extends Component {
    render() {
      if(window.innerWidth > 3000){
        alert('Hello user, please use a device with a lesser viewport for a better experience. Sorry for the incovenience!')
        return <div style={{display:'none'}} />
      }
      return (
        <Router>
            <Fragment>
                <Route exact path="/" component={App}/>
                <Route exact path="/ui-ux-design" component={UIUXDesign} />
                <Route exact path="/ui-ux-design/practo" component={Practo} />
                <Route exact path="/ui-ux-design/impel-labs" component={Recotap} />
                <Route exact path="/photography" component={Photography} />
                <Route exact path="/illustrations" component={Illustrations} />
                <Route exact path="/videography" component={Videography} />
                <Route exact path="/motion-graphics" component={MotionGraphics} />
                <Route exact path="/graphic-design" component={GraphicDesign} />
                <Route exact path="/credits" component={Credits} />
                {/* <Route exact path="/about" component={About}/>
                <Route exact path="/projects" component={Projects}/> */}
            </Fragment>
        </Router>
      );
    }
  }
  
  export default Routes;