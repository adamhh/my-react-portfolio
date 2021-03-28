import React, { Component } from "react";
import Header from "./pages/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import data from "./data";
class App extends Component {
  render() {

    return (
      <div className="App">
          <Header data={data} />
          <About data={data} />
          <Resume data={data} />
          <Portfolio />
          <ContactUs />
          <Footer data={data} />
      </div>
    );
  }
}

export default App;
