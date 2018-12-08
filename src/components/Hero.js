import React, { Component } from 'react';
import resume from '../assets/Vignesh_Kannan-Resume.pdf';
import { HashLink } from 'react-router-hash-link';
import heroimg from '../assets/HPImage.png';

class Hero extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-push-6">
                    <img src={heroimg} alt="Vignesh Kannan" className="hero-img"/>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <h1 className="hero-tag">Hi, I am <br/> <strong>Vignesh Kannan.</strong></h1>
                    <p className="about-tag">
                        A self-taught Designer & a Mechanical Engineer, I <br className="mac"/> am currently working as a UI/UX Designer at 
                        Impel <br className="mac"/> Labs Private Limited, Bangalore. 
                    </p>
                    <p className="buttons">
                        <HashLink to="#work" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} title="view work">view work</HashLink>
                        <a target="_blank" rel="noopener noreferrer" href={resume} title="view resume">view resume</a>
                    </p>
                    <p className="socials">
                        <a target="_blank" rel="noopener noreferrer" title="mail" href="mailto:vigneshk96@gmail.com">
                            <i className="far fa-2x fa-envelope"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" title="instagram" href="https://instagram.com/vigneshk54">
                            <i className="fab fa-2x fa-instagram"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" title="dribbble" href="https://www.dribbble.com/vigneshk54">
                            <i className="fab fa-2x fa-dribbble"></i>
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
  }
}

export default Hero;
