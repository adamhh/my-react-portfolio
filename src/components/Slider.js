import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {isMobile} from 'react-device-detect';


function ImageSlider() {
    let slides = 3;
    if (isMobile) {
        slides = 1;
    }
    let settings = {
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: false,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/DarkDespairSS.png" alt={"Screenshot"} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-github-square"></i></a></li>
                        <li><a href="#"><i className="fa fa-external-link-square"></i></a></li>
                    </ul>
                    <div className="details">
                        <h3>John Doe <span className="job-title">Dark Despair</span></h3>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/jumperSS.png" alt={"Screenshot"} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-github-square"></i></a></li>
                        <li><a href="#"><i className="fa fa-external-link-square"></i></a></li>
                    </ul>
                    <div className="details">
                        <h3>John Doe <span className="job-title">UI Developer</span></h3>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/androidSS.png" alt={"Screenshot"}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-github-square"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h3>John Doe <span className="job-title">UI Developer</span></h3>
                    </div>
                </div>
            </div>
            {/*<div className="card-wrapper">*/}
            {/*    <div className="card">*/}
            {/*        <div className="card-image">*/}
            {/*            <img src="images/16.jpg" />*/}
            {/*        </div>*/}
            {/*        <ul className="social-icons">*/}
            {/*            <li><a href="#"><i className="fa fa-facebook"></i></a></li>*/}
            {/*            <li><a href="#"><i className="fa fa-instagram"></i></a></li>*/}
            {/*            <li><a href="#"><i className="fa fa-twitter"></i></a></li>*/}
            {/*            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>*/}
            {/*        </ul>*/}
            {/*        <div className="details">*/}
            {/*            <h2>John Doe <span className="job-title">UI Developer</span></h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Slider>
    )
}

export default ImageSlider

