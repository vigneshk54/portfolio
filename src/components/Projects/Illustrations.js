import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import '../../styles/Photography.css';
import {illustrations} from '../../utils/_data';
import Footer from '../Footer';

export default class Illustrations extends React.Component{
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
                <h1 className="photo-h1 h2">Illustrations</h1>
                <div className="row">
                    {illustrations && illustrations.map((illustration,index) => (
                        <div key={index} className="col-md-4 col-sm-12 ill">
                            <img className={`ill-${index}`} src={illustration.src} alt={index}/> <br/> <br/>
                            <small>{illustration.caption}</small>
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