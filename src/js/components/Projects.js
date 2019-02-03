import React from "react";
import Project from "./Project";
import uuid from "uuid";


const project = (img, title, description) => (
    <Project key={uuid()}img={img} title={title} description={description} />
);

const projectSeed = [
    project("https://images.unsplash.com/photo-1548815056-de4dab9bfd9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "0", "Irure qui enim pariatur aliquip est magna. Non pariatur deserunt aliqua anim in minim ex aliquip occaecat aliquip. Excepteur culpa exercitation nisi eiusmod cillum culpa. Quis aute consequat voluptate nisi in anim duis nostrud magna Lorem."),
    project("https://images.unsplash.com/photo-1549045969-8d29fe0ea4f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60","1", "jfdiafjd dfjfdfue  dfujjff epqjffdaf"),
    project("https://images.unsplash.com/photo-1549064464-87c30b51c927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "2", "fjiffj ifjadsjfi fkadsfj;sadf j fijejf fkasfsajf"),
    project("https://images.unsplash.com/photo-1549045162-ac1e6f848abc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "3", "the world's most overpriced phone"),
    project("https://images.unsplash.com/photo-1549042875-e82f785239ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "4", "I need to pay this church a visit"),
    project("https://images.unsplash.com/photo-1549017900-6e44c77071bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "5", "jfjfjfi fijfdjf fjiejmfkmkd idfjidfj;asjf dkjf;asjfiemvijifje dfja;djfifjs"),
    project("https://images.unsplash.com/photo-1548990044-11586bc151f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "6", "what a beautiful day"),
    project("https://images.unsplash.com/photo-1549005209-85c245af55f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80", "7", "There are a lot of stars"),
    project("https://images.unsplash.com/photo-1548820524-7c4742f76035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "8", "halo como eesata if;fji cmzmv come to me")
];


class Projects extends React.Component{

    constructor(props){
        super(props);

        this.projectWidth = 550;

        this.state = {
            projectCount: this.getProjectCount(), // the number of projects being displayed 
            firstShownProject: 0,
            totalProjects: projectSeed.length
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
                        { this.generateProjects(projectSeed) }
                    </div>
                    <div>
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