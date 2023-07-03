import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    count: 0,
  };
  nextLight = () => {
    this.state.count === 2
      ? this.setState({ count: this.state.count - 2 })
      : this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div
            className={this.state.count === 0 ? "circle red" : "circle black"}
          ></div>
          <div
            className={
              this.state.count === 2 ? "circle yellow" : "circle black"
            }
          ></div>
          <div
            className={this.state.count === 1 ? "circle green" : "circle black"}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.nextLight}>
          Next State
        </button>
      </div>
    );
  }
}
