import React from "react";
import Intro from "./pages/intro/Intro";
import About from "./pages//about/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import data from "./data";


function App() {
  return (
    <div className="App">
        <Intro data={data} />
        <About data={data} />
        <Resume data={data} />
        <Portfolio />
        <ContactUs />
        <Footer data={data} />
    </div>
  );

}

export default App;
