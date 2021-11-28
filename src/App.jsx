import React from "react";
import Banner from "./sections/banner/Banner";
import Intro from "./sections/intro/Intro";
import About from "./sections/about/About";
import Resume from "./sections/resume/Resume";
import Portfolio from "./sections/portfolio/Portfolio"
import Footer from "./sections/footer/Footer"

import data from "./data";



function App () {

  const v2 = true;
  return (
      <div className="App">
        <Banner data={data}/>
        <Intro/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Footer data={data}/>
      </div>
  );
}

export default App;
