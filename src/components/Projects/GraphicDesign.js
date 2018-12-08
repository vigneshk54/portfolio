import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import '../../styles/Photography.css';
import {graphics} from '../../utils/_data';
import Footer from '../Footer';

export default class GraphicDesign extends React.Component{
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
                <h1 className="photo-h1 h2">Graphic Design</h1> <br/> <br/>
                <div className="row">
                    {graphics && graphics.map((graphic,index) => (
                        <div key={index} className="col-md-4 col-sm-12 gra">
                            <img className={`ill-${index}`} src={graphic.src} alt={index}/> <br/> <br/>
                            <small>{graphic.caption}</small>
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