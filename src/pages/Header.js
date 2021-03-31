import React, { Component } from "react";
import ParticlesBackground from "../components/Particles";
import {isMobile} from 'react-device-detect';

export default class Header extends Component {
  render() {
    let data = this.props.data;
    if (isMobile) {
      return (
          <React.Fragment>
            <header id="home">
              <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline">Hello, my name is {data.name}.</h1>
                  <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                    <div>
                      <p>I am an aspiring SDE, welcome to my portfolio.</p>
                    </div>
                  </h3>
                  <hr />
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
                </div>
              </div>

              <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                  <i className="icon-down-circle" />
                </a>
              </p>

            </header>
          </React.Fragment>
      );
    } else {
      return (
          <React.Fragment>
            <div id="particles-js">
              {/*<Particles/>*/}
              <ParticlesBackground/>
            </div>
            <header id="home">
              <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline">Hello, my name is {data.name}.</h1>
                  <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                    <div id={"typewriter-js"}>
                      <p className="line-1 anim-typewriter">I am an aspiring SDE, welcome to my portfolio.</p>
                    </div>

                    {/*I am an {resumeData.role}.{resumeData.roleDescription}*/}
                  </h3>
                  <hr />
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
                </div>
              </div>

              <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                  <i className="icon-down-circle" />
                </a>
              </p>

            </header>

          </React.Fragment>
      );
    }

  }
}
