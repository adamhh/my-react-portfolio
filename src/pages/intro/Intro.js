import React from 'react';
import './intro.css'

export default function Intro(props) {
    let data = props.data;
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
            <ul className="social">
                    {data.socialLinks &&
                    data.socialLinks.map((item) => {
                      return (
                          <li key={item.name}>
                            <a href={item.url} target="_blank noopener noreferrer">
                              <i className={item.className} />
                            </a>
                          </li>
                      );
                    })}
            </ul>
        </section>
    )
}