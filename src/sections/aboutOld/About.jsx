import React from "react";
import './about.css'

export default function About(props) {
    let data = props.data;
    return (
      <section id="about">
        <div className="about-header">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <p>
            I am a software developer that loves getting outside and enjoying nature. 
            My favorite activities include snowboarding, hiking, and taking road trips.
          
          </p>
        </div>
        <div className="about-header">
          <h2>My Work</h2>
        </div>
        <div className="about-content">
          <p>
            When developing, I love taking on new and exciting projects.  The most rewarding
            aspect of this career is that every day presents a new learning opportunity.
            In a prospective employer, I value companies that prioritize team morale and positivity.
          </p>
        </div>
        <div className="about-header">
          <h2>Contact Details</h2>
        </div>
        <div className="about-details">
          <p>Adam Hall</p>
          <p>{data.address}</p>
          <p>{data.email}</p>
        </div>
      </section>
    );
}
