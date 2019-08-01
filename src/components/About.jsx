import React, { Component } from "react";
import Navbar from "./Navbar";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="display-4">About</h1>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default About;
