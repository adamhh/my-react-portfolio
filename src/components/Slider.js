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
                        <img src="images/DarkDespairSS.jpg" alt={"Screenshot - Dark Despair Game"} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/adamhh/DarkDespairGame/" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-github-square"/></a></li>
                        <li><a href="https://adamhh.github.io/DarkDespairGame/" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-external-link-square"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Dark Despair:<span className="description">HTML5/JS Web Game</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/jumperSS.jpg" alt={"Screenshot - Jump Game"} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/larryj6029/GameDev" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-github-square"/></a></li>
                        <li><a href="https://larryj6029.github.io/GameDev/" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-external-link-square"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Game Dev:<span className="description">HTML5/JS Web Game</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/androidSS.jpg" alt={"Screenshot - ComChat Android App"}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/adamhh/450Group8" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-github-square"/></a></li>
                        <li><a href="https://github.com/adamhh/450Group8" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-youtube"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>ComChat:<span className="description">Android Application</span></h2>
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
            {/*            <h2>John Doe <span className="description">UI Developer</span></h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Slider>
    )
}

export default ImageSlider

