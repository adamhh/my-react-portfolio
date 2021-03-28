import React, { Component, useState } from 'react';
import Modal from 'react-modal';
import Carousel from "./Carousel";
import Slider from "./Slider";
import ImageSlider from "./Slider";

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <h2>Check out some of my favorite projects.</h2>
      {/*<div className="row">*/}
      {/*  <div className="twelve columns collapsed">*/}
      {/*    <h1>Check Out Some of My Works.</h1>*/}
      {/*    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">*/}
      {/*    {*/}
      {/*      resumeData.portfolio && resumeData.portfolio.map((item)=>{*/}
      {/*        return(*/}
      {/*          <div className="columns portfolio-item">*/}
      {/*            <div className="item-wrap">*/}
      {/*              <a href="#modal">*/}
      {/*                <img src={`${item.imgurl}`} className="item-img" alt={""}/>*/}
      {/*                <div className="overlay">*/}
      {/*                  <div className="portfolio-item-meta">*/}
      {/*                    <h5>{item.name}</h5>*/}
      {/*                    <p>{item.description}</p>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </a>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        )*/}
      {/*      })*/}
      {/*    }*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <ImageSlider/>
      {/*<Carousel/>*/}
  </section>
        );
  }
}