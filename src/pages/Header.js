import React, { Component } from "react";
import ParticlesBackground from "../components/Particles";
export default class Header extends Component {
  render() {
    let data = this.props.data;
    return (

      <React.Fragment>

        <div id="particles-js">
          {/*<Particles/>*/}
          <ParticlesBackground/>
        </div>
        <header id="home">
          {/*<nav id="nav-wrap">*/}
          {/*  <a className="mobile-btn" href="#nav-wrap" title="Show navigation">*/}
          {/*    Show navigation*/}
          {/*  </a>*/}
          {/*  <a className="mobile-btn" href="/#" title="Hide navigation">*/}
          {/*    Hide navigation*/}
          {/*  </a>*/}
          {/*  <ul id="nav" className="nav">*/}
          {/*    <li className="current">*/}
          {/*      <a className="smoothscroll" href="#home">*/}
          {/*        Home*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a className="smoothscroll" href="#about">*/}
          {/*        About*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a className="smoothscroll" href="#resume">*/}
          {/*        Resume*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a className="smoothscroll" href="#portfolio">*/}
          {/*        Works*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a className="smoothscroll" href="#contact">*/}
          {/*        Contact*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

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
