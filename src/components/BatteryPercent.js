import React from "react";
import styled from "styled-components";


//Pass in maximum and minimum criteria for battery usage and the car model

const Style = styled.div`
  text-align: center;
  white-space: pre-line;
  font-family: 'Arvo';
`;

class BatteryPercent extends React.Component {
  state = {
    value: 100,
    text: "Scroll to see what you can\n do with you Battery usage %",
  };

  handleOnChange = (e) => {
    let text = "";
    if (
      e.target.value <= this.props.maximum &&
      e.target.value > this.props.minimum
    ) {
      text =
        "The battery can be repurposed into solar\n battery or for street lights. Look up\n for a company looking for used batteries\n through our website";
    } else if (e.target.value < 20) {
      text =
        "Cannot be used anymore.\n Contact nearest dealership to dispose\n the battery";
    } else {
      text = "Still usable for you car";
    }
    this.setState({ value: e.target.value, text: text });
  };

  render() {
    return (
      <Style>
        <h1>{this.props.car}</h1>
        <br></br>
        <input
          type="range"
          min={0}
          max={100}
          value={this.state.value}
          className="BatteryPercent"
          onChange={this.handleOnChange}
        />
        <div className="PercentValue">{this.state.value}</div>
        <br />
        <h5>
          <div>{this.state.text}</div>
        </h5>
      </Style>
    );
  }
}

export default BatteryPercent;
