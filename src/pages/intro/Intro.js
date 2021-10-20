import React from 'react';
import './intro.css'

export default function Intro() {
    return(
        <section id="intro-wrapper">
            <div className="intro-img-wrap">
                <img className="profile-pic" src="images/avatar.png" alt="profile"/>
            </div>
            <div className="intro-name">
                <p>Adam Hall</p>
            </div>
            <div className="intro-title">
                <p>Software Developer</p>
            </div>
        </section>
    )
}