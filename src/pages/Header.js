import React, { Component } from "react";

export default class Header extends Component {
  render() {
    let data = this.props.data;
      return (
            <header id="home">
              <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline">Hello, my name is Adam Hall</h1>
                  <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                    <div>
                      <p>I am a Software Developer, welcome to my portfolio.</p>
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
      );

  }
}
