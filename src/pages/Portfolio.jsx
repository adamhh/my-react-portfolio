import React, { Component } from 'react';
import ImageSlider from "../components/Slider";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h2>Check out some of my favorite projects.</h2>
      <ImageSlider/>

  </section>
        );
  }
}