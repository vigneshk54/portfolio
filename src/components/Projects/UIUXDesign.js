import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import edureka from '../../assets/Edureka.pdf';
import Footer from '../Footer';

let designs = [
    {
        title: 'Practo',
        url: '/ui-ux-design/practo'
    },
    {
        title: 'Edureka!',
        url: edureka
    },
    {
        title: 'Impel Labs Pvt. Ltd',
        url: '/ui-ux-design/impel-labs'
    },
]

export default class UIUXDesign extends React.Component{
    componentDidMount(){
        ReactDOM.findDOMNode(this).scrollIntoView();
    }
    render(){
        return(
            <div>
                <Navbar />
                <div style={{textAlign:'center'}} className="container photo-co">
                    <div className="row">
                        <h1 className="photo-h1">UI/UX Design</h1> <br/> <br/> <br/>
                        {designs && designs.map(design => (
                            <div key={design.title} className="col-md-4 col-sm-12">
                                {design.url !== edureka ? <Link to={design.url} className="thumbnail ui-thumb">
                                    <h1 className="design-name">{design.title}</h1>
                                </Link>
                                : <a target="_blank" rel="noopener noreferrer" href={design.url} className="thumbnail ui-thumb">
                                    <h1 className="design-name">{design.title}</h1>
                                </a>}
                            </div>
                        ))}
                    </div>
                </div>
                <br/> <br/> <br/> <hr className="test-hr"/> <br/>
                <Footer/>
            </div>
        );
    }
}