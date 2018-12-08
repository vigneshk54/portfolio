import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import '../../styles/Photography.css';
import photos from '../../utils/_data';
import Footer from '../Footer';

export default class Photography extends React.Component{
    componentDidMount(){
        ReactDOM.findDOMNode(this).scrollIntoView();
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render(){
    return(
        <div>
            <Navbar />
            <div style={{textAlign:'center'}} className="container photo-co">
                <h1 className="photo-h1">Photography</h1>
                <div className="row">
                    {photos && photos.map((photo,index) => (
                        <div key={index} className="col-md-4 col-sm-12 blo">
                            <a href={`https://www.instagram.com/p/${photo}/`} target="_blank" rel="noopener noreferrer">
                                <img src={`https://www.instagram.com/p/${photo}/media/?size=l`} alt={index}/>
                            </a>
                        </div>
                    ))}
                </div>
                <br/> <br/> <br/>
                <a href="https://instagram.com/vigneshk54" className="back back1" style={{textTransform:'none'}} target="_blank" rel="noopener noreferrer">See more on Instagram</a> 
                <button onClick={this.goBack} className="back" >Back</button> 
            </div>
            <br/><br/> <hr className="test-hr"/> <br/>
            <Footer color="black" />
        </div>
    )
}}