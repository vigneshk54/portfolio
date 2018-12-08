import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer({hmm}){
    return(
        <div className="container bottom">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h3 className="bottom-h3 Vignesh">Vignesh Kannan</h3> 
                    <br/>
                    <p className="bottom-icons">
                        <a href="mailto:vigneshk96@gmail.com" target="_blank" rel="noopener noreferrer" title="mail"><i className="far fa-envelope fa-2x"></i></a>
                        <a href="https://instagram.com/vigneshk54" target="_blank" rel="noopener noreferrer" title="instagram"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="https://dribbble.com/vigneshk54" target="_blank" rel="noopener noreferrer" title="dribbble"><i className="fab fa-dribbble fa-2x"></i></a>
                    </p>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h3 className="bottom-h3"><HashLink to={hmm ? `../../#work` : `./#work`}>Work</HashLink></h3>
                    <p className="bottom-a"><Link to="/ui-ux-design">UI/UX Design</Link></p>
                    <p className="bottom-a"><Link to="/graphic-design">Graphic Design</Link></p>
                    <p className="bottom-a"><Link to="/illustrations">Illustrations</Link></p>
                    <p className="bottom-a"><Link to="/motion-graphics">Motion Graphics</Link></p>
                    <p className="bottom-a"><Link to="/photography">Photography</Link></p>
                    <p className="bottom-a"><Link to="/videography">Videography</Link></p>
                    <h3 className="bottom-h3"><HashLink to={hmm ? `../../#testimonial` : `./#testimonial`}>Testimonials</HashLink></h3>
                    <h3 className="bottom-h3"><a href="mailto:vigvin12@gmail.com" to="/">Contact</a></h3>
                    <h3 className="bottom-h3"><Link to="/credits" to="/credits">Credits</Link></h3>
                </div>
            </div>
        </div>
    );
}