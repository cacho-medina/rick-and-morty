import React from "react";
import "./About.modules.css";
import cacho from "../../assets/img/cacho.jpg";

const About = () => {
    return (
        <div className="about_section">
            <img alt="perfil" className="profile__img" src={cacho} />
            <div className="about">
                <h1 className="name">Cacho Medina</h1>
                <h3 className="description">
                    Aprendiendo routes con la Daianeta
                </h3>
            </div>
        </div>
    );
};

export default About;
