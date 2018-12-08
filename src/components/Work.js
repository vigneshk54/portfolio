import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let projectnames = [
    {
        name: "UI/UX Design",
        company: "PRACTO / IMPEL LABS / EDUREKA!",
        url: "/ui-ux-design"
    },
    {
        name: "Graphic Design",
        company: "PANTHEON / SELF / FREELANCE",
        url: "/graphic-design"
    },
    {
        name: "Motion Graphics",
        company: "PANTHEON / SELF / FREELANCE",
        url: "/motion-graphics"
    },
    {
        name: "Illustrations",
        company: "SELF",
        url: "/illustrations"
    },
    {
        name: "Photography",
        company: "SELF",
        url: "/photography"
    },
    {
        name: "Videography",
        company: "SELF",
        url: "/videography"
    },
]

class Work extends Component{
    render(){
        return(
            <div className="work" id="work">
                <div className="container work-container">
                    <h1 className="work-tag">My work</h1>
                    <p className="work-p">Design is a field involving many inter-linked skill sets. I feel that in 
                    order to be a complete designer, knowledge of all these skills will help. </p>
                    <div className="row">
                        {projectnames && projectnames.map(project => (
                            <div key={project.name} className="col-md-4 col-sm-12">
                                <Link to={project.url} className="thumbnail">
                                    <h2 className="work-name">{project.name}</h2>
                                    <h5 className="work-company">{project.company}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;