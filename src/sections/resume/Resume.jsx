import React, {useState, useEffect} from 'react';
import './resume.css'


export default function Resume() {
    const [showResume, setShowResume] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            setScrollPosition(current);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
    }, []);

    useEffect(() => {
        if (!showResume && scrollPosition > 650) {
          setShowResume(true)
      }
    }, [scrollPosition]);
    return(
        <section id="resume">

            {showResume && (
            <>
                        <div className="blinder">

                        </div>
                <div className="education">
                    <div className="title">
                        <p>Education</p>
                    </div>
                    <div className="content">
                        <p>B.S. Computer Science and Systems</p>
                        <p>University of Washington, Tacoma</p>
                        <p>June 2021, 3.7 GPA</p>
                    </div>
                </div>
                <div className="work">
                    <div className="title">
                        <p>Work</p>
                    </div>
                    <div className="content desktop">
                        <p>Software Engineer at Sparetoolz <i> May 21 - Current</i></p>
                        <p>Full Stack Developer at Tako <i> March 21 - Current</i></p>
                        <p>Hobbyist/student programmer <i> Jan 17 - Current</i></p>
                    </div>
                    <div className="content mobile">
                        <p>Software Engineer - Sparetoolz</p>
                        <p><i>May 21 - Current</i></p>
                        <p>Full Stack Developer - Tako </p>
                        <p><i> March 21 - Current</i></p>
                        <p>Hobbyist/student programmer </p>
                        <p><i> Jan 17 - Current</i></p>
                    </div>
                </div>
            </>
            )}

        </section>
    )
}