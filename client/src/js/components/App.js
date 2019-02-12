import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends React.Component {

    render(){
        return (
            <div className="app">
                <Navbar />
                <Landing />
                <Projects />
                <Contact />
            </div>
        );
    }
} 

export default App;