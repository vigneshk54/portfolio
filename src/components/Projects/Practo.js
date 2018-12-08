import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import practo_main from '../../assets/practo-mobile.png';
import user_personas from '../../assets/user-personas.png';
import app_arc from '../../assets/practo-arch.png';
import card_design_process from '../../assets/card-design-process.png';
import final from '../../assets/final-product.png';
import op from '../../assets/practo_op.png'
import '../../styles/Projects.css';
import Footer from '../Footer';

export default class Practo extends React.Component{
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
                    <img className="img-practo" src={practo_main} alt="Practo Mobile" title="Practo Mobile"/>
                    <br className="mac"/> <br className="mac"/>
                    <p className="about-practo" style={{textAlign:'center'}}>
                        Practo is a consumer-facing health-tech company funded by <br className="mac"/>
                        Google, Sequoia, Tencent & others. 
                    </p>
                    <br className="hide"/> <br className="hide"/> <br className="mac"/>
                    <h4 className="practo-h4">Problem Statement</h4>
                    <p className="about-practo">
                    The problem statement given to me was to re-think the mobile application’s homepage. My brief was to propose
                    features and the related UI, to make the application more engaging and to make the user use the application 
                    more often. At the time of my internship, the only major features of the app were to Book 
                    Doctor Appointments/Diagnostic Tests, Order Medicines & Chat with a Doctor. Since these features would not be used on 
                    a daily basis, the app downloads had stagnated after reaching a point. The following was what I put 
                    forth as what the new homepage should be.
                    </p>
                    <h4 className="practo-h4">Solution</h4>
                    <p className="about-practo">
                    Since Practo was a Health app, I proposed multiple additional features which would have a higher frequency of use.
                     I added a reminder system for all things related to health in an effort to make 
                    Practo the one-stop-solution for all things health. 
                    </p>
                    <h4 className="practo-h4">User Personas</h4>
                    <img onClick={() => this.handleClick('practo_1')} id="practo_1" src={user_personas} alt="user personas" title="user personas" className="img_overlay"/>
                    <br className="hide"/> <br className="hide"/>
                    <h4 className="practo-h4-center">Homepage Flow</h4>
                    <img onClick={() => this.handleClick('practo_2')} id="practo_2" src={app_arc} className="img_overlay img-smaller" alt="app architecture" title="app architecture"/>

                    <h4 className="practo-h4-center">Card Design Process</h4>
                    <img onClick={() => this.handleClick('practo_3')} id="practo_3" src={card_design_process} alt="card design process" title="card design process" className="img_overlay"/>

                    <h4 className="practo-h4-center">Final Product</h4>
                    <img onClick={() => this.handleClick('practo_4')} id="practo_4" src={final} className="img_overlay less-width" alt="final product" title="Final Product"/>

                    <h4 className="practo-h4-center">The on-boarding process</h4>
                    <p className="about-practo">
                    My goal with this new all-in-one health reminder system was not to acquire new users. Practo had 
                    millions of users spanning 5 countries. What I wanted to acheive with these new features was to 
                    increase User Engagement, User Retention & User Loyalty. The new reminder system would be put 
                    forth to the user in the form of action cards and notifications.
                    </p><br className="mac"/>
                    <img onClick={() => this.handleClick('practo_5')} id="practo_5" src={op} className="img_overlay less-width" alt="onboarding process" title="the onboarding process"/>

                    <br/> <br/> <br/> <br className="mac"/>

                    <button onClick={this.goBack} className="back" >Back</button>  

                    <div id="myModal" className="modal">
                        <span className="close"><i className="fa fa-times"></i></span>
                        <img alt="modal" className="modal-content" id="practo-1" />
                        <div id="caption"></div>
                    </div>
                </div>
                <br/><br/><hr className="test-hr"/> <br/>
                <Footer hmm={true}/>
            </div>   
        );
    }
}