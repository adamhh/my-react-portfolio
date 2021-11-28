import React, { useEffect, useState } from 'react';
import './about.css'

export default function About() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showBlurb, setShowBlurb] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showStack, setShowStack] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            setScrollPosition(current);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
    }, []);

    useEffect(() => {
        if (!showBlurb && scrollPosition > 50) {
            setShowBlurb(true)
        }
        if (!showButton && scrollPosition > 200) {
            setShowButton(true)
        }

        if (!showStack && scrollPosition > 300) {
          setShowStack(true)
      }
    }, [scrollPosition]);

    return (
      <section id="about">
          {showBlurb && (
              <div className="blurb">
                  <p>Hey! My name is Adam Hall and thank you for checking out my profile.</p>
                  <p>I had fun making this site and was inspired by webpages I have seen across the web.</p>
                  <p>I love getting outside, my favorite activities being snowboarding and golf.</p>
                  <p>Below you'll find some information about my career as a programmer.</p>
              </div>
          )}

          {showButton && (
            <div className="about-button">
              <div><a href="mailto: adamhh@uw.edu">Reach out</a></div>
            </div>
          )}

          {showStack && (
            <>
              <h2 className="about-header">My Favorite Tools</h2>
              <div className="about-stack">
                <div className="one-third-desktop outside">
                  <div>
                    <p>React</p>
                    <p>Typescript</p>
                    <p>Redux</p>
                  </div>

                </div>
                <div className="one-third-desktop inside">
                  <div>
                    <p>Java</p>
                    <p>JS/HTML/CSS</p>
                    <p>SQL</p>
                  </div>
                </div>
                <div className="one-third-desktop outside">
                  <div>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>Next.js</p>
                  </div>
                </div>
              </div>
            </>
          )}
      </section>
    );
}
