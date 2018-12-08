import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import '../../styles/Photography.css';
import {motiongraphics} from '../../utils/_data';
import Footer from '../Footer';

export default class MotionGraphics extends React.Component{
    componentDidMount(){
        ReactDOM.findDOMNode(this).scrollIntoView();
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render(){
    return(
        <div>
            <Navbar/>
            <div style={{textAlign:'center'}} className="container photo-co">
                <h1 className="photo-h1 h2">Motion graphics</h1>
                <div className="row">
                    {motiongraphics && motiongraphics.map((motiongraphic,index) => (
                        <div key={index} className="col-md-6 col-sm-12 blo">
                            <video alt={index} controls preload="metadata">
                                <source src={`${motiongraphic.src}#t=0`}></source>
                            </video>
                            <small>{motiongraphic.caption}</small>
                        </div>
                    ))}
                </div>
                <br/> <br/>
                <button onClick={this.goBack} className="back" >Back</button>  
            </div>
            <br/><br/> <hr className="test-hr"/> <br/>
            <Footer color="black" />
        </div>
    )
}}