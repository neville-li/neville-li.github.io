import React from "react";
import avatarHead from "./../../img/avatarHead.png";
import landingAvatar from "./../utils/landingAvatar";

class Landing extends React.Component{

    componentDidMount() {
        landingAvatar();
    }

    render() {
        return (
            <section className="landing">
                <div className="landing__avatar">
                    <img className="landing__avatar__img" src={avatarHead} alt="Avatar"/>
                    <canvas className="landing__avatar__canvas"></canvas>
                </div>
            </section>
        );
    }
} 

export default Landing;