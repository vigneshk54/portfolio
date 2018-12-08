import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import reco_main from '../../assets/reco-main.png';
import user_journey from '../../assets/homepage-flow-recotap.png';
import homepage_flow from '../../assets/homepage-flow-reco.png';
import '../../styles/Projects.css';
import Footer from '../Footer';

export default class Recotap extends React.Component{
    handleClick = (id) => {
        var modal = document.getElementById('myModal');
	    var img = document.getElementById(id);

        img.addEventListener('click',function(){
        //   var clickID = this.id;
          var modalImg = document.getElementById("practo-1");
          modal.style.display = "block";
          modalImg.src = this.src;
        });
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() { 
          modal.style.display = "none";
        }	
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this).scrollIntoView();
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render(){
        return(
            <div>
                <Navbar hmm={true}/>
                <div style={{textAlign:'center', color: '#151515'}} className="container practo">
                    <img className="img-practo" src={reco_main} alt="Recotap Web" title="Recotap Web"/>
                    <br className="mac"/> <br className="mac"/>
                    <p className="about-practo" style={{textAlign:'center'}}>
                    Impel Labs Pvt. Ltd. is a seed funded tech startup based in Bengaluru. The company's product - <br/>
                    Recotap - helps Digital Marketers personalise Customer Experience <br className="mac"/>
                    for their product(s), and improve ROI.
                    </p>
                    <br className="hide"/> <br className="hide"/> <br className="mac"/>
                    <h4 className="practo-h4">Problem Statement</h4>
                    <p className="about-practo">
                    What Impel Labs wanted to achieve through the website re-design was: (1) Clearly 
                    communicate what it does as a company, and (2) Present it's value propositions well enough to increase 
                    conversions and customer acquisitions. 
                    </p>
                    <h4 className="practo-h4">Solution</h4>
                    <p className="about-practo">
                    Since Recotap was a B2B service - a personalisation product - I wanted every visiting prospect to see two things: (1) 
                    How her business would benefit if the right communication was delivered at the right time to the right people, 
                    and (2) How her company’s existing users would benefit as a result of this communication - thereby increasing key 
                    metrics like User Retention and Loyalty.  
                    </p>
                    <h4 className="practo-h4">My Process</h4>
                    <p className="about-practo">
                    1. I interviewed existing customers and industry experts to figure out what the exact communication of the 
                    website should be - who it should speak to and what message it should convey. <br/> <br/> <br/>
                    2. I then drew out the different sections of the website homepage on paper and decided what 
                    each section would communicate. <br/> <br/> <br/>
                    3. Finally, I built wireframes and then went on to create the UI.  
                    </p>
                    <h4 className="practo-h4-center">User Journey</h4>
                    <img onClick={() => this.handleClick('practo_1')} id="practo_1" src={user_journey} alt="user journey" title="user journey" className="img_overlay img-smaller"/>
                    <br className="hide"/> <br className="hide"/>
                    <h4 className="practo-h4">Homepage Flow</h4>
                    <img onClick={() => this.handleClick('practo_2')} id="practo_2" src={homepage_flow} className="img_overlay" alt="homepage flow" title="home pageflow"/>
                    <br/> <br/> <br/> <br className="mac"/>

                    <button onClick={this.goBack} className="back" >Back</button>  

                    <div id="myModal" className="modal">
                        <span className="close"><i className="fa fa-times"></i></span>
                        <img alt="modal" className="modal-content" id="practo-1" />
                        <div id="caption"></div>
                    </div>
                </div>
                <br/><br/><hr className="test-hr"/> <br/>
                <Footer hmm={true} />
            </div>   
        );
    }
}