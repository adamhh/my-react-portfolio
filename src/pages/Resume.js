import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {data.education &&
              data.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        {" "}
                        <em className="date">
                          {" "}{item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p className="achievements">{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>
          <div className="nine columns main-col">
          <h3 className="resume-heading1">Tako Agency</h3>
            <div className="title-date-wrap">
              <p className="tdw-title"><strong>Full Stack Developer</strong></p>
              <p><i>April 2021 - Current</i></p>
            </div>
            <p className="resume-details">
              I primarily work as a mobile applications developer with Tako Agency; this includes developing in Typescript with React Native, as well as the development
              and maintenance of GCP cloud hosted functions that serve as the back end. I also periodically develop Shopify storefronts and
              applications using traditional web technolgoies, when the need arises.
            </p>

            <h3 className="resume-heading2">My Own Experience</h3>
            <div className="title-date-wrap">
              <p className="tdw-title"><strong>CS Student</strong></p>
              <p><i>2016 - Current</i></p>
            </div>
            <p className="resume-details">
              For the 5 years I spent working towards my CS degree I honed my skills as a developer, 
              programming primarily in Java with a concentration in data structures and alogirithms.
              </p>

          </div>
          
        </div>
      </section>
    );
  }
}
