import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Projects/Navbar';
import Footer from './Footer';

class Credits extends Component {
  componentDidMount(){
      ReactDOM.findDOMNode(this).scrollIntoView();
  }
    goBack = () => {
        this.props.history.goBack();
    }
  render() {
    return (
        <div >
          <Navbar />
          <div style={{textAlign:'center'}} className="container photo-co">
          <h1 className="work-tag">Credits</h1> <br/>
            <p className="work-p">
                All work uploaded in this website (i.e., UI/UX Designs, Graphic Designs, Motion Graphics, Illustrations, 
                Photography, Videography), and the design of this website itself, is by me, i.e., Vignesh Kannan. The 
                coding and development of this web-site alone has been aided by Mr. Adithya NR.
            </p> <br/> <br/> <br/> <br className="mac"/>

            <button onClick={this.goBack} style={{textAlign:'center'}} className="back" >Back</button>
          </div>    
            <br/><br/><hr className="test-hr"/> <br/>
            <Footer />
        </div>
    );
  }
}

export default Credits;
