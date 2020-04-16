// Importing Required Packages And Files Here
import React, { Component } from "react";
import classes from "./App.module.css";
import Counter from "../components/Counter/Counter";

// Defining App Class Component Here
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounter: false,
      ignoreProps: 0,
      seed: 0
    };
  }
  // Defining Utility Methods Here
  ToggleCounter = () => {
    const currentMounterValue = this.state.mounter;
    this.setState({
      mounter: !currentMounterValue
    });
  };

  updateIgnorePropsHandler = () => {
    this.setState({
      ignoreProps: Math.random()
    });
  };
  updateSeedPropsHandler = () => {
    this.setState({
      seed: parseInt(Math.random() * 100)
    });
  };
  render() {
    let displayCounter = null;
    if (this.state.mounter) {
      displayCounter = (
        <Counter
          ignoreProps={this.state.ignoreProps}
          seed={this.state.seed}
        />
      );
    }
    return (
      <div className={classes.App}>
        <header>
          <h1>{this.props.AppTitle}</h1>
        </header>
        <button onClick={this.updateIgnorePropsHandler}>Ignore Props</button>
        <button onClick={this.updateSeedPropsHandler}>Seed Props</button>
        <button onClick={this.ToggleCounter}>
          {this.state.mounter ? "Unmount Counter" : "Mount Counter"}
        </button>
        {displayCounter}
      </div>
    );
  }
}

export default App;
