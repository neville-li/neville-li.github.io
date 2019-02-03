import React from "react";
import Project from "./Project";

class Projects extends React.Component{

    constructor(props){
        super(props);

        this.projectWidth = 550;

        this.state = {
            projectCount: this.getProjectCount(),
            projectHead: 0
        }
    }

    componentDidMount(){
        window.onresize = () => {
            this.setState(() => ({
                projectCount: this.getProjectCount()
            }))
        }
    }

    getProjectCount(){
        return Math.round(window.innerWidth / this.projectWidth);
    }

    generateProjects(){
        const projects = []
        for(let i = 0; i < this.state.projectCount; i++){
            projects.push(<Project key={i}/>);
        }
        return projects;
    }

    render(){
        return (
            <section className="projects">   
                    <h1>
                        Projects
                    </h1>
                    <div className="projects__display">
                        { this.generateProjects() }
                    </div>
            </section>
        );
    }
};

export default Projects;