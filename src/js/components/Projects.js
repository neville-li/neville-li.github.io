import React from "react";
import projects from "../utils/getProjects";

class Projects extends React.Component{

    constructor(props){
        super(props);

        this.projectWidth = 550;

        this.state = {
            projectCount: this.getProjectCount(), // the number of projects being displayed 
            firstShownProject: 0,
            totalProjects: projects.length
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

    generateProjects(projects){
        const shownProjects = []
        let projectIdx = this.state.firstShownProject;
        for(let i = 0; i < this.state.projectCount; i++){
            shownProjects.push(projects[projectIdx++]);
            if(projectIdx > projects.length -1) {
                projectIdx = 0;
            } else if (projectIdx < 0){
                projectIdx = projects.length - 1;
            }

        }
        return shownProjects;
    }

    toNext(){
        this.setState((state) => {
            const nextHead = state.firstShownProject + state.projectCount;
            const head =  nextHead < state.totalProjects ? nextHead : nextHead - state.totalProjects; 
            return { firstShownProject: head }
        });
    }
    toPrevious(){
        this.setState((state) => {
            const nextHead = state.firstShownProject - state.projectCount;
            const head =  nextHead >= 0 ? nextHead : state.totalProjects + nextHead; 
            return { firstShownProject: head }
        });
    }

    render(){
        return (
            <section className="projects">   
                    <h1>
                        Projects
                    </h1>
                    <div className="projects__display">
                        { this.generateProjects(projects) }
                    </div>
                    <div className="projects__navigation">
                        <button
                        onClick={() => {
                            this.toPrevious();
                        }} 
                        > 
                            &lt;
                        </button>
                        <button
                            onClick={() => {
                                this.toNext();
                            }} 
                        >
                            &gt;
                        </button>
                    </div> 
            </section>
        );
    }
};

export default Projects;