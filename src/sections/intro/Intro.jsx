import React from 'react';
import me from './intro.jpg'
import './intro.css';

export default function Intro() {
    
    return(
        <section id="intro">
            <div className="intro-background">
                <img src={me} className="background" alt="Me"></img>
            </div>
            <div className="intro-flex-wrap">
                <h5>Software Engineer</h5>
                <h1 className="h1-1">Developing Software.</h1>
                <h1 className="h1-2">Having Fun.</h1>
            </div>
        </section>
    )
}
