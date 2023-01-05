import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  static defaultProps = {
    // here defaultProps is a special keyword we must use.
    name: "stranger",
  };

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {/* <p>{!!this.props.age ? <Age age={this.props.age} /> : ""}</p> */}
        {/* !! is for 0 value as prop */}
        {/* Second Way */}
        {!!this.props.age && <Age age={this.props.age} />}
        {!this.props.age && ""}
      </div>
    );
  }
}
