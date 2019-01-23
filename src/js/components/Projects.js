import React from "react";
import Project from "./Project";

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <h1>
                    Projects
                </h1>
                <div class="projects__display">
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </section>
    );
};

export default Projects;