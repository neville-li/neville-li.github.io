import React from "react";
import uuid from "uuid";
import ProjectModel from "../models/projectModel";
import Project from "../components/Project";

// Images
import animationGallery from "../../img/animationGallery.png";
import angelStudio from "../../img/angelStudio.png";
import waterLevelIndicator from "../../img/waterLevelIndicator.jpg";

const projectData = [
    new ProjectModel({
        img: animationGallery,
        title: "Animation Gallery",
        description: "A collection of animation created on HTML canvas"
    }),
    new ProjectModel({
        img: angelStudio,
        title: "Angel Studio",
        description: "An website created for an imaginary photographer using Bootstrap 4"
    }),
    new ProjectModel({
        img: waterLevelIndicator,
        title: "Water Level Indicator",
        description: "Created a user interface that allows users to collect water level using an Ardino, and monitor the data on the browser"
    })
];

export default projectData.map(project => 
   (
    <Project
        key={uuid()}img={project.img}
        title={project.title}
        description={project.description}
    />
    )
);
