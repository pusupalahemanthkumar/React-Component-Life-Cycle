// Importing Required Files And Packages Here
import React, { Component } from "react";
import classes from "./Counter.module.css";

// Defining The Counter Class Component Here
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
      initialization: true,
    };
    console.log(" [ Counter.js ] Constructor ");
  }
  // Defining Utility Methods Here
  incrementCounter = () => {
    const nextCounterValue = this.state.counter + 1;
    this.setState({
      counter: nextCounterValue,
    });
  };
  decrementCounter = () => {
    const nextCounterValue = this.state.counter - 1;
    this.setState({
      counter: nextCounterValue,
    });
  };
  /*  
  1. static getDerivedStateFromProps(props,state) :
  --->>The purpose of this method is give you chance ,
        to copy any  value  from props
  --->>General use case: to copy props to state
  --->> getDerivedStateFromProps is static method so,
        we don't have access to instance properties/instance of the object
  */
  static getDerivedStateFromProps(props, state) {
    console.log(" [Counter.js ] getDerivedStateFromProps  starting  ");
    console.log("props ", props);
    console.log("state ", state);
    if (props.seed && props.seed !== state.seed) {
      // Below code is an Error Because it is static method
      // this.setState({
      //   counter: this.props.seed,
      //   seed: this.props.seed
      // });
      // return state;
      return {
        counter: props.seed,
        seed: props.seed,
      };
    }
    console.log(" [Counter.js ] getDerivedStateFromProps  ending  ");
    return null;
  }
  componentDidMount() {
    console.log("[Counter.js] componentDidMount ");
    setTimeout(() => {
      this.setState({
        initialization: false,
      });
    }, 1000);
    console.log("---------------------");
  }

  componentWillUnmount() {
    console.log(" [Counter.js] componentWillUnmount ");
    console.log("---------------------");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProps &&
      this.props.ignoreProps !== nextProps.ignoreProps
    ) {
      console.log(" [ Counter.js ] shouldComponentUpdate.. No render..");
      console.log("------------------------");
      return false;
    }
    console.log(" [ Counter.js ] shouldComponentUpdate..  render..");

    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[ Counter.js] getSnapshotBeforeUpdate ");
    return {
      message: "getSanapshotBeforeUpdate",
      prevProps: prevProps,
      prevState: prevState,
    };

    // return null;
  }
  render() {
    const styleCounter = {
      backgroundColor: "#ccc",
      padding: "20px",
      fontSize: "30px",
    };
    console.log(" [ Counter.js ] render ");
    if (this.state.initialization) {
      return (
        <div style={styleCounter}>
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div className={classes.Counter}>
        <p style={styleCounter}>Counter : {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
  // componentDidUpdate(prevProps, prevState, snapshot)
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(" [Counter.js] componentDidUpdate ");
    console.log(snapshot);
    console.log("---------------------");
  }
}

export default Counter;
