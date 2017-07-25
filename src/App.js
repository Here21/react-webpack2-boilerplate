import React, { Component } from "react";
import Logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    console.log(process.env.NODE_ENV);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <h2>Welcome to React</h2>
          <Logo width={60} />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
