import React from "react";
import "./app.css";

export class App extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  };

  // Неккорктно работает функция double поправь пожалуйста
  double = () => {
    this.increment();
    this.increment();
  };

  render() {
    return (
      <div className="parent">
        <div className="counter">{this.state.counter}</div>
        <button className="button" onClick={this.double}>
          Жмяк
        </button>
      </div>
    );
  }
}
