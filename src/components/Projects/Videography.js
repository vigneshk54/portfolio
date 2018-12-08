import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import '../../styles/Photography.css';
import Footer from '../Footer';

export default class Videography extends React.Component{
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
                <h1 className="photo-h1 h2">Videography</h1>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/_wAdBHeOVJs"
                    className="embed-responsive-item"
                    frameBorder="0" 
                    allowFullScreen
                    title="videography ">
                    </iframe>
                </div>
                <br/> <br/> <br className="mac"/>
                <button onClick={this.goBack} className="back" >Back</button>  
            </div>
            <br/><br/><hr className="test-hr"/> <br/>
            <Footer color="black" />
        </div>
    )
}}