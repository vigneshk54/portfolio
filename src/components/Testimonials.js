import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer';
import Bargava from '../assets/Testimonials/Bargav.jpg';
import Varun from '../assets/Testimonials/Varun.jpg';
import Tejashree from '../assets/Testimonials/Tejashree.jpeg';

class Testimonials extends Component{
    render(){
        return(
            <div className="testimonial" id="testimonial">
                <div className="carousel container" id="carousel" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                        <img className="test-img" src={Bargava} alt="Bargava Subramnian"/>
                            <p className="test-p">Vignesh is an original and creative thinker, who is extremely 
                            passionate about his work. His UX skills are beyond his years & his commitment and work 
                            ethic makes it easy to collaborate with him.
                            </p>
                            <h4 className="test-h">Bargava Subramnian, Founder - Impel Labs Pvt. Ltd.</h4>
                        </div>
                        <div className="item">
                            <img className="test-img" src={Varun} alt="Varun Pai"/>
                            <p className="test-p">Vignesh's thought process is sound. He is passionate and enthusiastic 
                            about design processes from the starting idea, its concept evolution till achievement of the 
                            end product. I firmly believe that a good process leads to good design and execution, Vignesh 
                            has encouraged and practiced every detail of this.
                            </p>
                            <h4 className="test-h">Varun Pai, Lead Designer - Videoken</h4>
                        </div>
                        <div className="item">
                            <img className="test-img" src={Tejashree} alt="Tejashree"/>
                            <p className="test-p">I have worked with Vignesh on multiple freelance projects. He has an 
                            amazing sense of aesthetics. What is also very impressive about him is his ability to think 
                            from the user’s perspective. Also, his work ethic and reliability was the only reason I kept 
                            going back to him for anything Design.
                            </p>
                            <h4 className="test-h">Tejashree Sanjeev, CEO - Appkrafting</h4>
                        </div>
                    </div>
                    <HashLink className="carousel-control left" to="#carousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                    </HashLink>
                    <HashLink className="carousel-control right" to="#carousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </HashLink>
                </div>
                <br/><br/>  <hr className="test-hr"/><br/>
                <Footer color="white" />
            </div>
        );
    }
}

export default Testimonials;